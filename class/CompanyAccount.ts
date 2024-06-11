import { DioAccount } from "./DioAccount"

export class CompanyAccount extends DioAccount {

  constructor(name: string, accountNumber: number){
    super(name, accountNumber)
  }

  getLoan = (loan: number): number => {
    console.log('Fez um empréstimo de R$', loan)
    if(this.getValidateStatus() === true){
      loan = loan + this.getBalance()
      console.log('Seu saldo após o empréstimo: R$',loan)
    }else{
      console.log('Conta inválida')
    }
    return loan

  }
}
