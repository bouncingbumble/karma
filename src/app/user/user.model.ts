import { Wallet } from "../wallet/wallet.model";

export class User {
  constructor(
    public name: string,
    public wallet: Wallet
  ){}
}
