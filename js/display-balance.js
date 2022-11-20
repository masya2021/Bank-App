import { currentAccount, labelBalance } from "./index.js";

export function displayBalance() {
  const balance = currentAccount.transactions.reduce(
    (acc, b) => acc + b.sum,
    0
  );
  currentAccount.balance = balance;
  labelBalance.innerHTML = `${balance}$`;
}
