import { guardianManagerContract } from '../../src/lib/guardian-manager'

const argentWalletAddress = "0x592859824C9D8A97e0f61B22765fE1302fF3Bb60"

describe("GuardianManager", () => {
  it("getGuardians", async () => {
    const result = await guardianManagerContract.getGuardians(argentWalletAddress)
    expect(result).not.toEqual([])
    expect(result.length).toEqual(3)
  });


  it("guardianCount", async () => {
    const result = await guardianManagerContract.guardianCount(argentWalletAddress)
    expect(result.toNumber()).toEqual(3)
  });
})