import { DioAccount } from "./DioAccount"

export class SavingsAccount extends DioAccount {

    constructor(name: string, accountNumber: number){
        super(name, accountNumber)
      }

      deposit = (balance: number): number => {
        console.log('Saldo disponível: R$',this.getBalance())
        console.log('Valor depositado: R$', balance)
        if(this.getValidateStatus() === true){
            balance =+ balance + 10
            console.log('Saldo atualizado: R$',balance)
        }
        return balance
      }
}