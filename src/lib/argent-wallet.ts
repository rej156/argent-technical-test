import { getDefaultProvider, ethers } from "ethers"
import BigNumber from "bignumber.js"
import { ERC20Factory } from "../../types/ethers-contracts/ERC20Factory"
import superagent from "superagent"

const provider = getDefaultProvider("mainnet")

interface ERC20Result {
  blockNumber: string
  timeStamp: string
  hash: string
  nonce: string
  blockHash: string
  from: string
  contractAddress: string
  to: string
  value: string
  tokenName: string
  tokenSymbol: string
  tokenDecimal: string
  transactionIndex: string
  gas: string
  gasPrice: string
  gasUsed: string
  cumulativeGasUsed: string
  input: string
  confirmations: string
}

const getPreciseBalance = async (
  address: string,
  precision: number | undefined = 3
) => {
  const result = await provider.getBalance(address)
  const ethAmount = ethers.utils.formatEther(result)
  const preciseEthAmount = Number(ethAmount).toPrecision(precision)
  // console.log(preciseEthAmount)
  return preciseEthAmount
}

interface ERC20TransfersByBigNumbers {
  [tokenSymbol: string]: { contractAddress: string; value: BigNumber }
}

const getERC20Tokens = async (address: string) => {
  const erc20FetchBalance = `https://api.etherscan.io/api?module=account&action=tokentx&address=${address}&startblock=0&endblock=999999999&sort=asc&apikey=G8H5XVHDWWGSHERXG66AX15K2MTKW49CYY`
  const {
    body: { result },
  } = await superagent.get(erc20FetchBalance)
  const erc20Result: ERC20Result[] = result
  const erc20TransfersByBigNumbers = erc20Result.reduce((current, next) => {
    const transferredValue = new BigNumber(next.value)
    const formattedAddress = address.toLowerCase()
    const formattedToAddress = next.to.toLowerCase()
    const formattedFromAddress = next.from.toLowerCase()

    if (formattedToAddress === formattedAddress) {
      if (current[next.tokenSymbol]) {
        current[next.tokenSymbol] = {
          contractAddress: next.contractAddress,
          value: current[next.tokenSymbol].value.plus(transferredValue),
        }
      } else {
        current[next.tokenSymbol] = {
          contractAddress: next.contractAddress,
          value: transferredValue,
        }
      }
    } else if (formattedFromAddress == formattedAddress) {
      if (current[next.tokenSymbol]) {
        current[next.tokenSymbol] = {
          contractAddress: next.contractAddress,
          value: current[next.tokenSymbol].value.minus(transferredValue),
        }
      } else {
        current[next.tokenSymbol] = {
          contractAddress: next.contractAddress,
          value: new BigNumber(0),
        }
      }
    }
    return current
  }, {} as ERC20TransfersByBigNumbers)

  const formattedResults: { [tokenSymbol: string]: string } = {}

  await Promise.all(
    Object.keys(erc20TransfersByBigNumbers).map(async token => {
      const erc20Factory = ERC20Factory.connect(
        erc20TransfersByBigNumbers[token].contractAddress,
        provider
      )
      const contractDecimals = await erc20Factory.decimals()

      formattedResults[token] = erc20TransfersByBigNumbers[token].value
        .div(new BigNumber(10).pow(contractDecimals))
        .toString()
    })
  )

  return Object.keys(formattedResults).reduce((current, tokenSymbol) => {
    if (formattedResults[tokenSymbol] !== "0") {
      let formattedValue = Number(formattedResults[tokenSymbol]).toFixed(2)
      if (formattedValue.split('.')[1] === '00') {
        formattedValue = formattedValue.split('.')[0]
      }
      current[tokenSymbol] = formattedValue
    }
    return current
  }, {} as { [tokenSymbol: string]: string })
}

export { getPreciseBalance, getERC20Tokens }
