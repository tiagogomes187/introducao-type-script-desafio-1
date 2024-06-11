export abstract class DioAccount {
  private readonly name: string;
  private readonly accountNumber: number;
  private balance: number = 0;
  private status: boolean = true;

  constructor(name: string, accountNumber: number) {
    this.name = name;
    this.accountNumber = accountNumber;
  }

  getAccountNumber = (): number => {
    return this.accountNumber;
  }

  getName = (): string => {
    return this.name;
  };

  deposit = (balance: number): number => {
    console.log('Saldo disponível: R$',this.getBalance())
    if (this.validateStatus()) {
      this.balance = +balance;
      console.log("Depositou: R$", balance);
    }
    return balance;
  };

  withdraw = (cashout: number): number => {
    if (this.balance > cashout && this.status === true) {
      console.log("Você sacou: R$", cashout);
      this.balance = this.balance - cashout;
      console.log('Saldo atualizado: R$',this.getBalance());
    } else {
      console.log("Saldo insuficiente");
    }
    return this.balance;
  };

  getBalance = (): number => {
    return this.balance;
  };

  getValidateStatus = (): boolean => {
    return this.validateStatus();
  };

  private validateStatus = (): boolean => {
    if (this.status) {
      return this.status;
    }

    throw new Error("Conta inválida");
  };
}
