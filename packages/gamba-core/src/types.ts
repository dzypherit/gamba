import { IdlAccounts, IdlEvents, Wallet as AnchorWallet, Program } from '@coral-xyz/anchor'
import { Keypair, PublicKey } from '@solana/web3.js'
import { GambaIdl } from './constants'
import { Gamba } from './idl'

export type Wallet = Omit<AnchorWallet, 'payer'> & {payer?: Keypair}

export type HouseState = IdlAccounts<GambaIdl>['house']
export type UserState = IdlAccounts<GambaIdl>['user']
export type BetSettledEvent = IdlEvents<GambaIdl>['BetSettledEvent']

export type GambaProgram = Program<Gamba>

export interface GameResult {
  /**
   * The player who made the bet
   */
  player: PublicKey
  /**
   * Amount of lamports the player bet
   */
  wager: number
  /**
   * Amount of lamports the player received
   */
  payout: number
  /**
   * The hashed RNG seed. Should be equal to sha256(result.rngSeed)
   */
  rngSeedHashed: string
  /**
   * The RNG seed
   */
  rngSeed: string
  /**
   * The seed that the was generated by the player
   */
  clientSeed: string
  /**
   *
   */
  nonce: number
  /**
   * The game configuration array
   */
  options: number[]
  /**
   * The index that the bet landed on
   */
  resultIndex: number
  /**
   *
   */
  profit: number
}

export interface RecentPlayEvent {
  signature: string
  estimatedTime: number
  creator: PublicKey
  player: PublicKey
  wager: number
  nonce: number
  rngSeed: string
  clientSeed: string
  resultMultiplier: number
  resultIndex: number
}
