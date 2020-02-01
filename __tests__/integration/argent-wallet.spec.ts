import { getPreciseBalance, getERC20Tokens } from '../../src/lib/argent-wallet'

const argentWalletAddress = "0x592859824C9D8A97e0f61B22765fE1302fF3Bb60"

describe("Test Argent Wallet", () => {
  it("getBalance", async () => {
    const result = await getPreciseBalance(argentWalletAddress)
    expect(result).not.toEqual(0)
    expect(result.split('.')[1].length).toEqual(2)
  });

  it("getERC20Balance", async () => {
    const result = await getERC20Tokens(argentWalletAddress)
    expect(typeof result).toEqual('object')
    // console.log(result)
    expect(result['DAI']).toBeTruthy()
  });
})