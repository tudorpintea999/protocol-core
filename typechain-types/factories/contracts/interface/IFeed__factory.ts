/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Interface, type ContractRunner } from "ethers";
import type { IFeed, IFeedInterface } from "../../../contracts/interface/IFeed";

const _abi = [
  {
    inputs: [
      {
        internalType: "uint256",
        name: "liquidationRatio",
        type: "uint256",
      },
      {
        internalType: "bytes32",
        name: "collateral",
        type: "bytes32",
      },
    ],
    name: "setLiquidationRatio",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "oracle",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "collateral",
        type: "bytes32",
      },
    ],
    name: "setPriceOracleContract",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "collateral",
        type: "bytes32",
      },
    ],
    name: "updatePrice",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

export class IFeed__factory {
  static readonly abi = _abi;
  static createInterface(): IFeedInterface {
    return new Interface(_abi) as IFeedInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): IFeed {
    return new Contract(address, _abi, runner) as unknown as IFeed;
  }
}