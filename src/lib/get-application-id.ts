import { Contract, Wallet, getDefaultProvider } from "ethers"

const provider = getDefaultProvider("ropsten")

// @ts-ignore
let wallet = Wallet.fromMnemonic()

wallet = wallet.connect(provider)

const abi = [
  {
    constant: false,
    inputs: [{ name: "hash", type: "bytes32" }],
    name: "apply",
    outputs: [],
    payable: false,
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    constant: true,
    inputs: [{ name: "email", type: "string" }],
    name: "getApplicationID",
    outputs: [{ name: "", type: "uint256" }],
    payable: false,
    stateMutability: "view",
    type: "function",
  },
]
const contractAddress = "0xcbbfbafedb0eb83016d2a96a4e80d30b20fa3e30"

const contract = new Contract(contractAddress, abi, provider)

const logArgentApplicationID = async () => {
  const result = await contract.getApplicationID('ericjohnjuta@gmail.com')
  console.log(result.toString())
  console.log(result)
  return result
}

logArgentApplicationID()