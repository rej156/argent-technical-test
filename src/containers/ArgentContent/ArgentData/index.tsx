/** @jsx jsx */
import React, { useState, useEffect } from "react"
import { jsx } from "theme-ui"
import { getPreciseBalance, getERC20Tokens } from "../../../lib/argent-wallet";
import { guardianManagerContract } from "../../../lib/guardian-manager";

interface IProps {
  address: string
  setSubmitting?: Function
}

const ArgentData: React.FunctionComponent<IProps> = ({ address, setSubmitting }) => {
  const [ethBalance, setEthBalance]  = useState<string>()
  const [ERC20Tokens, setERC20Tokens]  = useState<{ [tokenSymbol: string]: string }>()
  const [guardiansCount, setGuardiansCount]  = useState<string>()

  useEffect(() => {
    // Create an scoped async function in the hook
    async function fetchETHData() {
      const guardiansResult = await guardianManagerContract.guardianCount(address)
      setGuardiansCount(guardiansResult.toString())
      const ethBalanceResult = await getPreciseBalance(address)
      setEthBalance(ethBalanceResult)
      const erc20Result = await getERC20Tokens(address)
      setERC20Tokens(erc20Result)
      setSubmitting && setSubmitting(false)
    }
    // Execute the created function directly
    fetchETHData();
  }, [address]);

  return ethBalance && ERC20Tokens && guardiansCount ? (
    <div>
      <h5>Wallet Balance</h5>
      <p>
      {ethBalance && `${ethBalance} ETH`}
      </p>
      <h5>Number of guardians</h5>
      <p>
        {guardiansCount}
      </p>
      <h5>ERC20 tokens</h5>
      <ul>
        {ERC20Tokens && Object.keys(ERC20Tokens).map(tokenSymbol => (
          <li key={tokenSymbol}>
            <div sx={{ display: 'flex', '> :first-child': { mr: 2 } }}>
              <span>
                {tokenSymbol}
              </span>
              <span>
                {ERC20Tokens[tokenSymbol]}
              </span>
            </div>
          </li>
        ))
        }
      </ul>
    </div>
  ) : null
}

export default ArgentData
