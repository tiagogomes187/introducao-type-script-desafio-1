import { CompanyAccount } from './class/CompanyAccount'
import { PeopleAccount } from './class/PeopleAccount'
import { SavingsAccount } from './class/SavingsAccount'
console.log()
console.log('----| PEOPLE ACCOUNT |----')
const peopleAccount: PeopleAccount = new PeopleAccount(1, 'Nath', 10)
console.log('NOME: ',peopleAccount.getName())
console.log('Nº CONTA: ',peopleAccount.getAccountNumber())
peopleAccount.deposit(60)
peopleAccount.withdraw(45)

console.log('-----------------------------')
console.log('----| COMPANY ACCOUNT |----')
const companyAccount: CompanyAccount = new CompanyAccount('DIO', 20)
console.log('NOME: ',companyAccount.getName())
console.log('Nº CONTA: ',companyAccount.getAccountNumber())
companyAccount.deposit(90)
companyAccount.withdraw(60)
companyAccount.getLoan(100)

console.log('-----------------------------')
console.log('----| SAVINGS ACCOUNT |----')
const savingsAccount: SavingsAccount = new SavingsAccount('Tiago', 30)
console.log('NOME: ',savingsAccount.getName())
console.log('Nº CONTA: ',savingsAccount.getAccountNumber())
savingsAccount.deposit(100)