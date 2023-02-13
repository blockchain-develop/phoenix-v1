/**
 * This code was GENERATED using the solita package.
 * Please DO NOT EDIT THIS FILE, instead rerun solita to update it or write a wrapper to add functionality.
 *
 * See: https://github.com/metaplex-foundation/solita
 */

import * as beet from '@metaplex-foundation/beet'
import * as web3 from '@solana/web3.js'

/**
 * @category Instructions
 * @category Log
 * @category generated
 */
export const LogStruct = new beet.BeetArgsStruct<{
  instructionDiscriminator: number
}>([['instructionDiscriminator', beet.u8]], 'LogInstructionArgs')
/**
 * Accounts required by the _Log_ instruction
 *
 * @property [**signer**] logAuthority Log authority
 * @category Instructions
 * @category Log
 * @category generated
 */
export type LogInstructionAccounts = {
  logAuthority: web3.PublicKey
}

export const logInstructionDiscriminator = 15

/**
 * Creates a _Log_ instruction.
 *
 * @param accounts that will be accessed while the instruction is processed
 * @category Instructions
 * @category Log
 * @category generated
 */
export function createLogInstruction(
  accounts: LogInstructionAccounts,
  programId = new web3.PublicKey('PhoeNiXZ8ByJGLkxNfZRnkUfjvmuYqLR89jjFHGqdXY')
) {
  const [data] = LogStruct.serialize({
    instructionDiscriminator: logInstructionDiscriminator,
  })
  const keys: web3.AccountMeta[] = [
    {
      pubkey: accounts.logAuthority,
      isWritable: false,
      isSigner: true,
    },
  ]

  const ix = new web3.TransactionInstruction({
    programId,
    keys,
    data,
  })
  return ix
}