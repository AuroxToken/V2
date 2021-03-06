/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface StakingMasterInterface extends ethers.utils.Interface {
  functions: {
    "addToStake(address,uint256)": FunctionFragment;
    "batchRecreateStake((uint256,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,bool)[])": FunctionFragment;
    "claimRewards(address)": FunctionFragment;
    "closeStake(address)": FunctionFragment;
    "createStaking(uint256,uint256,address)": FunctionFragment;
    "investedTotal()": FunctionFragment;
    "localCreationCount()": FunctionFragment;
    "owner()": FunctionFragment;
    "poolRewardsTotal()": FunctionFragment;
    "recreateStake((uint256,address,uint256,uint256,uint256,uint256,bool,uint256,uint256,bool))": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "returnClaimAmountForEarlyStakeClose(address)": FunctionFragment;
    "returnCompoundInterest(uint256,uint256,uint256)": FunctionFragment;
    "returnCurrentStakeValue(address)": FunctionFragment;
    "returnInterestPercentage(uint256,bool,bool)": FunctionFragment;
    "returnSimpleInterest(uint256,uint256,uint256)": FunctionFragment;
    "returnStakeState(address)": FunctionFragment;
    "returnStakesClaimablePoolRewards(address)": FunctionFragment;
    "returnStakesClaimableRewards(address)": FunctionFragment;
    "returnTotalInterestAmount(uint256,uint256,uint256,bool)": FunctionFragment;
    "returnUsersStakes(address)": FunctionFragment;
    "returnUsersTotalStakeValue(address)": FunctionFragment;
    "returnValidUsersProviderStake(address)": FunctionFragment;
    "setProviderAddress(address)": FunctionFragment;
    "staking(address)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addToStake",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "batchRecreateStake",
    values: [
      {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "claimRewards",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "closeStake", values: [string]): string;
  encodeFunctionData(
    functionFragment: "createStaking",
    values: [BigNumberish, BigNumberish, string]
  ): string;
  encodeFunctionData(
    functionFragment: "investedTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "localCreationCount",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "poolRewardsTotal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "recreateStake",
    values: [
      {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "returnClaimAmountForEarlyStakeClose",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnCompoundInterest",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "returnCurrentStakeValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnInterestPercentage",
    values: [BigNumberish, boolean, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "returnSimpleInterest",
    values: [BigNumberish, BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "returnStakeState",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnStakesClaimablePoolRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnStakesClaimableRewards",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnTotalInterestAmount",
    values: [BigNumberish, BigNumberish, BigNumberish, boolean]
  ): string;
  encodeFunctionData(
    functionFragment: "returnUsersStakes",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnUsersTotalStakeValue",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "returnValidUsersProviderStake",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "setProviderAddress",
    values: [string]
  ): string;
  encodeFunctionData(functionFragment: "staking", values: [string]): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;

  decodeFunctionResult(functionFragment: "addToStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "batchRecreateStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "claimRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "closeStake", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "createStaking",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "investedTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "localCreationCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "poolRewardsTotal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "recreateStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnClaimAmountForEarlyStakeClose",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnCompoundInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnCurrentStakeValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnInterestPercentage",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnSimpleInterest",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnStakeState",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnStakesClaimablePoolRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnStakesClaimableRewards",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnTotalInterestAmount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnUsersStakes",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnUsersTotalStakeValue",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "returnValidUsersProviderStake",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setProviderAddress",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "staking", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;

  events: {
    "AddToStake(address,uint256)": EventFragment;
    "ClaimRewards(address,address,uint256,uint256)": EventFragment;
    "CloseStaking(address,address,uint256,uint256)": EventFragment;
    "CreateStaking(address,address,uint256,uint256)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "UpdateProviderAddress(address)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "AddToStake"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ClaimRewards"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CloseStaking"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "CreateStaking"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "UpdateProviderAddress"): EventFragment;
}

export type AddToStakeEvent = TypedEvent<
  [string, BigNumber] & { stakeAddress: string; _amount: BigNumber }
>;

export type ClaimRewardsEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    _from: string;
    stakeAddress: string;
    _claimableAmount: BigNumber;
    _claimablePoolRewards: BigNumber;
  }
>;

export type CloseStakingEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    _from: string;
    stakeAddress: string;
    _claimAmount: BigNumber;
    _penaltyAmount: BigNumber;
  }
>;

export type CreateStakingEvent = TypedEvent<
  [string, string, BigNumber, BigNumber] & {
    _from: string;
    stakeAddress: string;
    _stakeEndTime: BigNumber;
    _amount: BigNumber;
  }
>;

export type OwnershipTransferredEvent = TypedEvent<
  [string, string] & { previousOwner: string; newOwner: string }
>;

export type UpdateProviderAddressEvent = TypedEvent<
  [string] & { _newAddress: string }
>;

export class StakingMaster extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: StakingMasterInterface;

  functions: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    claimRewards(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    closeStake(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    investedTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    localCreationCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    poolRewardsTotal(overrides?: CallOverrides): Promise<[BigNumber]>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    returnClaimAmountForEarlyStakeClose(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnCompoundInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnInterestPercentage(
      _duration: BigNumberish,
      _epochOne: boolean,
      _fromStakingContract: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnSimpleInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        currentStakeValue: BigNumber;
        stakeEndTime: BigNumber;
        interestRate: BigNumber;
        lastUpdate: BigNumber;
        compounding: boolean;
        rawInvestedAmount: BigNumber;
        stakeStartTime: BigNumber;
      }
    >;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnTotalInterestAmount(
      _durationInSeconds: BigNumberish,
      _interestRate: BigNumberish,
      _amount: BigNumberish,
      compounding: boolean,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string[]] & { usersStakes: string[] }>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<[string]>;

    setProviderAddress(
      _providerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    staking(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        boolean,
        BigNumber
      ] & {
        investedAmount: BigNumber;
        stakeEndTime: BigNumber;
        interestRate: BigNumber;
        lastUpdate: BigNumber;
        compounded: boolean;
        rawInvestedAmount: BigNumber;
        stakeStartTime: BigNumber;
        providerStake: boolean;
        released: BigNumber;
        poolRewardsClaimed: boolean;
        totalLocked: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addToStake(
    _stakingAddress: string,
    _amount: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  batchRecreateStake(
    recreateStakeArgs: {
      _balance: BigNumberish;
      _recipient: string;
      _investedAmount: BigNumberish;
      _stakeEndTime: BigNumberish;
      _interestRate: BigNumberish;
      _lastUpdate: BigNumberish;
      _compounded: boolean;
      _rawInvestedAmount: BigNumberish;
      _stakeStartTime: BigNumberish;
      _providerStake: boolean;
    }[],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  claimRewards(
    _stakingAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  closeStake(
    _stakingAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createStaking(
    _amount: BigNumberish,
    _duration: BigNumberish,
    _recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  investedTotal(overrides?: CallOverrides): Promise<BigNumber>;

  localCreationCount(overrides?: CallOverrides): Promise<BigNumber>;

  owner(overrides?: CallOverrides): Promise<string>;

  poolRewardsTotal(overrides?: CallOverrides): Promise<BigNumber>;

  recreateStake(
    recreateStakeArgs: {
      _balance: BigNumberish;
      _recipient: string;
      _investedAmount: BigNumberish;
      _stakeEndTime: BigNumberish;
      _interestRate: BigNumberish;
      _lastUpdate: BigNumberish;
      _compounded: boolean;
      _rawInvestedAmount: BigNumberish;
      _stakeStartTime: BigNumberish;
      _providerStake: boolean;
    },
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  renounceOwnership(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  returnClaimAmountForEarlyStakeClose(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnCompoundInterest(
    _amount: BigNumberish,
    _interest: BigNumberish,
    _duration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnCurrentStakeValue(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnInterestPercentage(
    _duration: BigNumberish,
    _epochOne: boolean,
    _fromStakingContract: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnSimpleInterest(
    _amount: BigNumberish,
    _interest: BigNumberish,
    _duration: BigNumberish,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnStakeState(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber
    ] & {
      currentStakeValue: BigNumber;
      stakeEndTime: BigNumber;
      interestRate: BigNumber;
      lastUpdate: BigNumber;
      compounding: boolean;
      rawInvestedAmount: BigNumber;
      stakeStartTime: BigNumber;
    }
  >;

  returnStakesClaimablePoolRewards(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnStakesClaimableRewards(
    _stakingAddress: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnTotalInterestAmount(
    _durationInSeconds: BigNumberish,
    _interestRate: BigNumberish,
    _amount: BigNumberish,
    compounding: boolean,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnUsersStakes(
    _user: string,
    overrides?: CallOverrides
  ): Promise<string[]>;

  returnUsersTotalStakeValue(
    _user: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  returnValidUsersProviderStake(
    _user: string,
    overrides?: CallOverrides
  ): Promise<string>;

  setProviderAddress(
    _providerAddress: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  staking(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<
    [
      BigNumber,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      BigNumber,
      boolean,
      BigNumber,
      boolean,
      BigNumber
    ] & {
      investedAmount: BigNumber;
      stakeEndTime: BigNumber;
      interestRate: BigNumber;
      lastUpdate: BigNumber;
      compounded: boolean;
      rawInvestedAmount: BigNumber;
      stakeStartTime: BigNumber;
      providerStake: boolean;
      released: BigNumber;
      poolRewardsClaimed: boolean;
      totalLocked: BigNumber;
    }
  >;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: CallOverrides
    ): Promise<void>;

    claimRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    closeStake(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    investedTotal(overrides?: CallOverrides): Promise<BigNumber>;

    localCreationCount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    poolRewardsTotal(overrides?: CallOverrides): Promise<BigNumber>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: CallOverrides
    ): Promise<void>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    returnClaimAmountForEarlyStakeClose(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnCompoundInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnInterestPercentage(
      _duration: BigNumberish,
      _epochOne: boolean,
      _fromStakingContract: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnSimpleInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber
      ] & {
        currentStakeValue: BigNumber;
        stakeEndTime: BigNumber;
        interestRate: BigNumber;
        lastUpdate: BigNumber;
        compounding: boolean;
        rawInvestedAmount: BigNumber;
        stakeStartTime: BigNumber;
      }
    >;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnTotalInterestAmount(
      _durationInSeconds: BigNumberish,
      _interestRate: BigNumberish,
      _amount: BigNumberish,
      compounding: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<string[]>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<string>;

    setProviderAddress(
      _providerAddress: string,
      overrides?: CallOverrides
    ): Promise<void>;

    staking(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<
      [
        BigNumber,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        BigNumber,
        boolean,
        BigNumber,
        boolean,
        BigNumber
      ] & {
        investedAmount: BigNumber;
        stakeEndTime: BigNumber;
        interestRate: BigNumber;
        lastUpdate: BigNumber;
        compounded: boolean;
        rawInvestedAmount: BigNumber;
        stakeStartTime: BigNumber;
        providerStake: boolean;
        released: BigNumber;
        poolRewardsClaimed: boolean;
        totalLocked: BigNumber;
      }
    >;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    "AddToStake(address,uint256)"(
      stakeAddress?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { stakeAddress: string; _amount: BigNumber }
    >;

    AddToStake(
      stakeAddress?: string | null,
      _amount?: null
    ): TypedEventFilter<
      [string, BigNumber],
      { stakeAddress: string; _amount: BigNumber }
    >;

    "ClaimRewards(address,address,uint256,uint256)"(
      _from?: string | null,
      stakeAddress?: string | null,
      _claimableAmount?: null,
      _claimablePoolRewards?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _from: string;
        stakeAddress: string;
        _claimableAmount: BigNumber;
        _claimablePoolRewards: BigNumber;
      }
    >;

    ClaimRewards(
      _from?: string | null,
      stakeAddress?: string | null,
      _claimableAmount?: null,
      _claimablePoolRewards?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _from: string;
        stakeAddress: string;
        _claimableAmount: BigNumber;
        _claimablePoolRewards: BigNumber;
      }
    >;

    "CloseStaking(address,address,uint256,uint256)"(
      _from?: string | null,
      stakeAddress?: null,
      _claimAmount?: null,
      _penaltyAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _from: string;
        stakeAddress: string;
        _claimAmount: BigNumber;
        _penaltyAmount: BigNumber;
      }
    >;

    CloseStaking(
      _from?: string | null,
      stakeAddress?: null,
      _claimAmount?: null,
      _penaltyAmount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _from: string;
        stakeAddress: string;
        _claimAmount: BigNumber;
        _penaltyAmount: BigNumber;
      }
    >;

    "CreateStaking(address,address,uint256,uint256)"(
      _from?: string | null,
      stakeAddress?: null,
      _stakeEndTime?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _from: string;
        stakeAddress: string;
        _stakeEndTime: BigNumber;
        _amount: BigNumber;
      }
    >;

    CreateStaking(
      _from?: string | null,
      stakeAddress?: null,
      _stakeEndTime?: null,
      _amount?: null
    ): TypedEventFilter<
      [string, string, BigNumber, BigNumber],
      {
        _from: string;
        stakeAddress: string;
        _stakeEndTime: BigNumber;
        _amount: BigNumber;
      }
    >;

    "OwnershipTransferred(address,address)"(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    OwnershipTransferred(
      previousOwner?: string | null,
      newOwner?: string | null
    ): TypedEventFilter<
      [string, string],
      { previousOwner: string; newOwner: string }
    >;

    "UpdateProviderAddress(address)"(
      _newAddress?: string | null
    ): TypedEventFilter<[string], { _newAddress: string }>;

    UpdateProviderAddress(
      _newAddress?: string | null
    ): TypedEventFilter<[string], { _newAddress: string }>;
  };

  estimateGas: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    claimRewards(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    closeStake(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    investedTotal(overrides?: CallOverrides): Promise<BigNumber>;

    localCreationCount(overrides?: CallOverrides): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    poolRewardsTotal(overrides?: CallOverrides): Promise<BigNumber>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    returnClaimAmountForEarlyStakeClose(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnCompoundInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnInterestPercentage(
      _duration: BigNumberish,
      _epochOne: boolean,
      _fromStakingContract: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnSimpleInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnTotalInterestAmount(
      _durationInSeconds: BigNumberish,
      _interestRate: BigNumberish,
      _amount: BigNumberish,
      compounding: boolean,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    setProviderAddress(
      _providerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    staking(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addToStake(
      _stakingAddress: string,
      _amount: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    batchRecreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      }[],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    claimRewards(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    closeStake(
      _stakingAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createStaking(
      _amount: BigNumberish,
      _duration: BigNumberish,
      _recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    investedTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    localCreationCount(
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    poolRewardsTotal(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    recreateStake(
      recreateStakeArgs: {
        _balance: BigNumberish;
        _recipient: string;
        _investedAmount: BigNumberish;
        _stakeEndTime: BigNumberish;
        _interestRate: BigNumberish;
        _lastUpdate: BigNumberish;
        _compounded: boolean;
        _rawInvestedAmount: BigNumberish;
        _stakeStartTime: BigNumberish;
        _providerStake: boolean;
      },
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    renounceOwnership(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    returnClaimAmountForEarlyStakeClose(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnCompoundInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnCurrentStakeValue(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnInterestPercentage(
      _duration: BigNumberish,
      _epochOne: boolean,
      _fromStakingContract: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnSimpleInterest(
      _amount: BigNumberish,
      _interest: BigNumberish,
      _duration: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnStakeState(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnStakesClaimablePoolRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnStakesClaimableRewards(
      _stakingAddress: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnTotalInterestAmount(
      _durationInSeconds: BigNumberish,
      _interestRate: BigNumberish,
      _amount: BigNumberish,
      compounding: boolean,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnUsersStakes(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnUsersTotalStakeValue(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    returnValidUsersProviderStake(
      _user: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    setProviderAddress(
      _providerAddress: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    staking(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
