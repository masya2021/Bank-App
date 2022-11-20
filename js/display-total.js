import { currentAccount, labelSumIn, labelSumOut } from "./index.js";

export function displayTotal() {
  const depositValue = currentAccount.transactions
    .filter((obj) => obj.sum > 0)
    .reduce((a, b) => a + b.sum, 0);
  const withdrawalValue = currentAccount.transactions
    .filter((obj) => obj.sum < 0)
    .reduce((a, b) => a + b.sum, 0);
  labelSumIn.innerHTML = `${depositValue}$`;
  labelSumOut.innerHTML = `${withdrawalValue}$`;
}
