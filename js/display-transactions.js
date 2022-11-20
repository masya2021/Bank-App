import { currentAccount, containerTransactions } from "./index.js";

export function displayTransactions() {
  currentAccount.transactions.forEach((i) => {
    const type = i.sum > 0 ? "deposit" : "withdrawal";
    // const value = i.sum > 0 ? "Депозит (приход)" : "Вывод средств (расход)";

    containerTransactions.innerHTML += `
      <div class="transactions__row">
              <div class="transactions__type transactions__type--${type} ">
              ${i.sum > 0 ? "Депозит (приход)" : "Вывод средств (расход)"}
              </div>
              <div class="transactions__date">${new Date(
                i.date
              ).toLocaleDateString()}</div>
              <div class="transactions__value">${i.sum}$</div>
            </div>
      `;
  });
}
