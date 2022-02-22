/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { RewardHelpers, RewardHelpersInterface } from "../RewardHelpers";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
    ],
    name: "_getSecondsToEpochEnd",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "lastClaimedTimestamp",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
    ],
    name: "_returnClaimSecondsForPulledLiquidity",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastEpochClaimed",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "lastClaimedTimestamp",
        type: "uint256",
      },
    ],
    name: "_returnEpochClaimSeconds",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
    ],
    name: "_returnEpochToTimestamp",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "usersInvestmentTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "overallInvestmentTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "secondsToClaim",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "totalReward",
        type: "uint256",
      },
    ],
    name: "_returnRewardAmount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "epochAmounts",
    outputs: [
      {
        internalType: "uint256",
        name: "shareTotal",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "allPrevInvestmentTotals",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "currentInvestmentTotal",
        type: "uint256",
      },
      {
        internalType: "bool",
        name: "withdrewLiquidity",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "lastEpochUpdate",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnCurrentAPY",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "returnCurrentEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "returnGivenEpochEndTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "returnGivenEpochStartTime",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "currentEpoch",
        type: "uint256",
      },
    ],
    name: "returnIfInFirstDayOfEpoch",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "epoch",
        type: "uint256",
      },
    ],
    name: "returnTotalRewardForEpoch",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "pure",
    type: "function",
  },
];

const _bytecode =
  "0x608060405262127500600155600160035534801561001c57600080fd5b5061073a8061002c6000396000f3fe608060405234801561001057600080fd5b50600436106100cf5760003560e01c80638676950f1161008c578063adfe675411610066578063adfe6754146101cb578063cb850490146101de578063e2157189146101f1578063e3a7d1581461020457600080fd5b80638676950f1461018c5780639d847eda14610195578063a5a87503146101b857600080fd5b80631feb0e3c146100d45780632d1f91c5146101355780633e4dbc371461014b5780634f324f661461015e57806358e3d223146101715780637fd8919414610179575b600080fd5b61010e6100e23660046105f6565b600260208190526000918252604090912080546001820154928201546003909201549092919060ff1684565b60408051948552602085019390935291830152151560608201526080015b60405180910390f35b61013d610217565b60405190815260200161012c565b61013d6101593660046105f6565b61034b565b61013d61016c3660046105f6565b610393565b61013d6103b3565b61013d6101873660046105f6565b6103e0565b61013d60035481565b6101a86101a33660046105f6565b610402565b604051901515815260200161012c565b61013d6101c63660046105f6565b610447565b61013d6101d936600461060f565b610494565b61013d6101ec3660046105f6565b6104cf565b61013d6101ff36600461060f565b6104eb565b61013d610212366004610641565b610558565b6000806102226103b3565b90506000600a8210156102af57600061023c600a846105a9565b9050825b61024a82856105b5565b81101561027e57600061025c82610447565b905061026884826105b5565b935050808061027690610679565b915050610240565b506102a76102a0610290601a846105a9565b682086ac351052600000906105c1565b83906105b5565b9150506102c6565b6102c3682086ac351052600000601a6105c1565b90505b600380546000908152600260208181526040808420815160808101835281548152600182015493810193909352928301549082015292015460ff161515606083015290610312906105cd565b9050806103245750670de0b6b3a76400005b60006103428261033c85670de0b6b3a76400006105c1565b906105ea565b95945050505050565b60008061036f610366600154856105c190919063ffffffff16565b600054906105b5565b9050428110156103825750600092915050565b61038c81426105a9565b9392505050565b60006103ad610366836001546105c190919063ffffffff16565b92915050565b60006103db60016103d560015461033c600054426105a990919063ffffffff16565b906105b5565b905090565b60006103ad60016103d560015461033c600054876105a990919063ffffffff16565b60008061040e8361034b565b90506000610427826001546105a990919063ffffffff16565b905062015180811161043d575060019392505050565b5060009392505050565b6000600a82106104615750682086ac351052600000919050565b600061038c6104846104748560016105a9565b68056bc75e2d63100000906105c1565b685150ae84a8cdf00000906105a9565b6000806104a58561033c85896105c1565b905060006104c260015461033c87856105c190919063ffffffff16565b925050505b949350505050565b60006103ad6103666104e28460016105a9565b600154906105c1565b60008385141561052d578383141561050e5761050742836105a9565b90506104c7565b6000610519866104cf565b905061052542826105a9565b9150506104c7565b8483141561054c57600061054086610393565b905061052581846105a9565b50600154949350505050565b600080610564846103e0565b90506000838214156105845761057a42866105a9565b92506103ad915050565b600061058f8561034b565b60015490915061059f90826105a9565b9695505050505050565b600061038c8284610694565b600061038c82846106ab565b600061038c82846106c3565b60006103ad826040015183602001516105b590919063ffffffff16565b600061038c82846106e2565b60006020828403121561060857600080fd5b5035919050565b6000806000806080858703121561062557600080fd5b5050823594602084013594506040840135936060013592509050565b6000806040838503121561065457600080fd5b50508035926020909101359150565b634e487b7160e01b600052601160045260246000fd5b600060001982141561068d5761068d610663565b5060010190565b6000828210156106a6576106a6610663565b500390565b600082198211156106be576106be610663565b500190565b60008160001904831182151516156106dd576106dd610663565b500290565b6000826106ff57634e487b7160e01b600052601260045260246000fd5b50049056fea26469706673582212200788ae313330bd94ca3a35b63ff06971777a1246f93dab95d3557fc2c39d523064736f6c634300080a0033";

export class RewardHelpers__factory extends ContractFactory {
  constructor(
    ...args: [signer: Signer] | ConstructorParameters<typeof ContractFactory>
  ) {
    if (args.length === 1) {
      super(_abi, _bytecode, args[0]);
    } else {
      super(...args);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<RewardHelpers> {
    return super.deploy(overrides || {}) as Promise<RewardHelpers>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): RewardHelpers {
    return super.attach(address) as RewardHelpers;
  }
  connect(signer: Signer): RewardHelpers__factory {
    return super.connect(signer) as RewardHelpers__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): RewardHelpersInterface {
    return new utils.Interface(_abi) as RewardHelpersInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): RewardHelpers {
    return new Contract(address, _abi, signerOrProvider) as RewardHelpers;
  }
}