import { GuardianManagerFactory } from '../../types/ethers-contracts/GuardianManagerFactory'
import { getDefaultProvider } from "ethers"

const provider = getDefaultProvider("mainnet")

const contractAddress = "0xFF5A7299ff6f0fbAad9b38906b77d08c0FBdc9A7"

const guardianManagerContract = GuardianManagerFactory.connect(contractAddress, provider)

export { guardianManagerContract }