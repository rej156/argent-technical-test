/* Generated by ts-generator ver. 0.0.8 */
/* tslint:disable */

import { Contract, ContractTransaction, EventFilter, Signer } from "ethers";
import { Listener, Provider } from "ethers/providers";
import { Arrayish, BigNumber, BigNumberish, Interface } from "ethers/utils";
import {
  TransactionOverrides,
  TypedEventDescription,
  TypedFunctionDescription
} from ".";

interface GuardianManagerInterface extends Interface {
  functions: {
    securityWindow: TypedFunctionDescription<{ encode([]: []): string }>;

    init: TypedFunctionDescription<{ encode([_wallet]: [string]): string }>;

    revokeGuardian: TypedFunctionDescription<{
      encode([_wallet, _guardian]: [string, string]): string;
    }>;

    cancelGuardianRevokation: TypedFunctionDescription<{
      encode([_wallet, _guardian]: [string, string]): string;
    }>;

    getNonce: TypedFunctionDescription<{ encode([_wallet]: [string]): string }>;

    confirmGuardianRevokation: TypedFunctionDescription<{
      encode([_wallet, _guardian]: [string, string]): string;
    }>;

    guardianCount: TypedFunctionDescription<{
      encode([_wallet]: [string]): string;
    }>;

    addModule: TypedFunctionDescription<{
      encode([_wallet, _module]: [string, string]): string;
    }>;

    confirmGuardianAddition: TypedFunctionDescription<{
      encode([_wallet, _guardian]: [string, string]): string;
    }>;

    securityPeriod: TypedFunctionDescription<{ encode([]: []): string }>;

    recoverToken: TypedFunctionDescription<{
      encode([_token]: [string]): string;
    }>;

    cancelGuardianAddition: TypedFunctionDescription<{
      encode([_wallet, _guardian]: [string, string]): string;
    }>;

    execute: TypedFunctionDescription<{
      encode([_wallet, _data, _nonce, _signatures, _gasPrice, _gasLimit]: [
        string,
        Arrayish,
        BigNumberish,
        Arrayish,
        BigNumberish,
        BigNumberish
      ]): string;
    }>;

    addGuardian: TypedFunctionDescription<{
      encode([_wallet, _guardian]: [string, string]): string;
    }>;

    relayer: TypedFunctionDescription<{ encode([]: [string]): string }>;

    isGuardian: TypedFunctionDescription<{
      encode([_wallet, _guardian]: [string, string]): string;
    }>;

    guardianStorage: TypedFunctionDescription<{ encode([]: []): string }>;

    getGuardians: TypedFunctionDescription<{
      encode([_wallet]: [string]): string;
    }>;
  };

  events: {
    GuardianAdditionRequested: TypedEventDescription<{
      encodeTopics([wallet, guardian, executeAfter]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    GuardianRevokationRequested: TypedEventDescription<{
      encodeTopics([wallet, guardian, executeAfter]: [
        string | null,
        string | null,
        null
      ]): string[];
    }>;

    GuardianAdditionCancelled: TypedEventDescription<{
      encodeTopics([wallet, guardian]: [
        string | null,
        string | null
      ]): string[];
    }>;

    GuardianRevokationCancelled: TypedEventDescription<{
      encodeTopics([wallet, guardian]: [
        string | null,
        string | null
      ]): string[];
    }>;

    GuardianAdded: TypedEventDescription<{
      encodeTopics([wallet, guardian]: [
        string | null,
        string | null
      ]): string[];
    }>;

    GuardianRevoked: TypedEventDescription<{
      encodeTopics([wallet, guardian]: [
        string | null,
        string | null
      ]): string[];
    }>;

    TransactionExecuted: TypedEventDescription<{
      encodeTopics([wallet, success, signedHash]: [
        string | null,
        boolean | null,
        null
      ]): string[];
    }>;

    ModuleCreated: TypedEventDescription<{
      encodeTopics([name]: [null]): string[];
    }>;

    ModuleInitialised: TypedEventDescription<{
      encodeTopics([wallet]: [null]): string[];
    }>;
  };
}

export class GuardianManager extends Contract {
  connect(signerOrProvider: Signer | Provider | string): GuardianManager;
  attach(addressOrName: string): GuardianManager;
  deployed(): Promise<GuardianManager>;

  on(event: EventFilter | string, listener: Listener): GuardianManager;
  once(event: EventFilter | string, listener: Listener): GuardianManager;
  addListener(
    eventName: EventFilter | string,
    listener: Listener
  ): GuardianManager;
  removeAllListeners(eventName: EventFilter | string): GuardianManager;
  removeListener(eventName: any, listener: Listener): GuardianManager;

  interface: GuardianManagerInterface;

  functions: {
    securityWindow(): Promise<BigNumber>;

    init(
      _wallet: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    revokeGuardian(
      _wallet: string,
      _guardian: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    cancelGuardianRevokation(
      _wallet: string,
      _guardian: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    getNonce(_wallet: string): Promise<BigNumber>;

    confirmGuardianRevokation(
      _wallet: string,
      _guardian: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    guardianCount(_wallet: string): Promise<BigNumber>;

    addModule(
      _wallet: string,
      _module: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    confirmGuardianAddition(
      _wallet: string,
      _guardian: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    securityPeriod(): Promise<BigNumber>;

    recoverToken(
      _token: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    cancelGuardianAddition(
      _wallet: string,
      _guardian: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    execute(
      _wallet: string,
      _data: Arrayish,
      _nonce: BigNumberish,
      _signatures: Arrayish,
      _gasPrice: BigNumberish,
      _gasLimit: BigNumberish,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    addGuardian(
      _wallet: string,
      _guardian: string,
      overrides?: TransactionOverrides
    ): Promise<ContractTransaction>;

    relayer(arg0: string): Promise<BigNumber>;

    isGuardian(_wallet: string, _guardian: string): Promise<boolean>;

    guardianStorage(): Promise<string>;

    getGuardians(_wallet: string): Promise<string[]>;
  };

  securityWindow(): Promise<BigNumber>;

  init(
    _wallet: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  revokeGuardian(
    _wallet: string,
    _guardian: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  cancelGuardianRevokation(
    _wallet: string,
    _guardian: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  getNonce(_wallet: string): Promise<BigNumber>;

  confirmGuardianRevokation(
    _wallet: string,
    _guardian: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  guardianCount(_wallet: string): Promise<BigNumber>;

  addModule(
    _wallet: string,
    _module: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  confirmGuardianAddition(
    _wallet: string,
    _guardian: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  securityPeriod(): Promise<BigNumber>;

  recoverToken(
    _token: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  cancelGuardianAddition(
    _wallet: string,
    _guardian: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  execute(
    _wallet: string,
    _data: Arrayish,
    _nonce: BigNumberish,
    _signatures: Arrayish,
    _gasPrice: BigNumberish,
    _gasLimit: BigNumberish,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  addGuardian(
    _wallet: string,
    _guardian: string,
    overrides?: TransactionOverrides
  ): Promise<ContractTransaction>;

  relayer(arg0: string): Promise<BigNumber>;

  isGuardian(_wallet: string, _guardian: string): Promise<boolean>;

  guardianStorage(): Promise<string>;

  getGuardians(_wallet: string): Promise<string[]>;

  filters: {
    GuardianAdditionRequested(
      wallet: string | null,
      guardian: string | null,
      executeAfter: null
    ): EventFilter;

    GuardianRevokationRequested(
      wallet: string | null,
      guardian: string | null,
      executeAfter: null
    ): EventFilter;

    GuardianAdditionCancelled(
      wallet: string | null,
      guardian: string | null
    ): EventFilter;

    GuardianRevokationCancelled(
      wallet: string | null,
      guardian: string | null
    ): EventFilter;

    GuardianAdded(wallet: string | null, guardian: string | null): EventFilter;

    GuardianRevoked(
      wallet: string | null,
      guardian: string | null
    ): EventFilter;

    TransactionExecuted(
      wallet: string | null,
      success: boolean | null,
      signedHash: null
    ): EventFilter;

    ModuleCreated(name: null): EventFilter;

    ModuleInitialised(wallet: null): EventFilter;
  };

  estimate: {
    securityWindow(): Promise<BigNumber>;

    init(_wallet: string): Promise<BigNumber>;

    revokeGuardian(_wallet: string, _guardian: string): Promise<BigNumber>;

    cancelGuardianRevokation(
      _wallet: string,
      _guardian: string
    ): Promise<BigNumber>;

    getNonce(_wallet: string): Promise<BigNumber>;

    confirmGuardianRevokation(
      _wallet: string,
      _guardian: string
    ): Promise<BigNumber>;

    guardianCount(_wallet: string): Promise<BigNumber>;

    addModule(_wallet: string, _module: string): Promise<BigNumber>;

    confirmGuardianAddition(
      _wallet: string,
      _guardian: string
    ): Promise<BigNumber>;

    securityPeriod(): Promise<BigNumber>;

    recoverToken(_token: string): Promise<BigNumber>;

    cancelGuardianAddition(
      _wallet: string,
      _guardian: string
    ): Promise<BigNumber>;

    execute(
      _wallet: string,
      _data: Arrayish,
      _nonce: BigNumberish,
      _signatures: Arrayish,
      _gasPrice: BigNumberish,
      _gasLimit: BigNumberish
    ): Promise<BigNumber>;

    addGuardian(_wallet: string, _guardian: string): Promise<BigNumber>;

    relayer(arg0: string): Promise<BigNumber>;

    isGuardian(_wallet: string, _guardian: string): Promise<BigNumber>;

    guardianStorage(): Promise<BigNumber>;

    getGuardians(_wallet: string): Promise<BigNumber>;
  };
}