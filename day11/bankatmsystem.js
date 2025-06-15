function bankAtmSystem(initialAmount) {
  let bankAmount = initialAmount;

  //have a function for deposit , function for withdraw

  return {
    withdraw: (amount) => {
      if (amount > bankAmount) {
        console.warn("Oops Invalid amount request ");
      } else {
        bankAmount = bankAmount - amount;

        console.log(
          `Amount withdrawn is ${amount}, left balance is ${bankAmount}`
        );
      }
    },

    deposit: (amount) => {
      bankAmount = bankAmount + amount;
      console.log(
        `Amount deposited  is ${amount}, updated balance is ${bankAmount}`
      );
    },

    checkBalance: () => {
      console.log(`Current balance is ${bankAmount}`);
    },
  };
}

const seokjinAccount = bankAtmSystem(1000);
console.log(seokjinAccount.deposit(29));
console.log(seokjinAccount.withdraw(300));
console.log(seokjinAccount.checkBalance());
