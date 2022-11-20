"use strict";

import "./login-exit-application.js";
import { loginExitApplication } from "./login-exit-application.js";

import "./display-balance.js";
import { displayBalance } from "./display-balance.js";

import "./clear-popup-form.js";
import { clearPopupForm } from "./clear-popup-form.js";

import "./change.js";
import { change } from "./change.js";

import "./display-transactions.js";
import { displayTransactions } from "./display-transactions.js";

import "./display-total.js";
import { displayTotal } from "./display-total.js";


export let currentAccount;
export let copyTransactions;
export let timerId;
export let time = 300;

export const account1 = {
  userName: "Дмитрий Николаев",
  transactions: [
    {
      date: "2021-11-13T11:48:50.942Z",
      sum: 500,
    },
    {
      date: "2021-11-14T12:00:50.942Z",
      sum: 250,
    },
    {
      date: "2021-12-01T14:12:50.942Z",
      sum: -300,
    },
    {
      date: "2021-12-26T18:08:50.942Z",
      sum: 5000,
    },
    {
      date: "2022-01-02T13:02:00.942Z",
      sum: -850,
    },
    {
      date: "2022-01-26T13:08:50.942Z",
      sum: -110,
    },
    {
      date: "2022-02-02T10:02:15.942Z",
      sum: -170,
    },
    {
      date: "2022-02-26T14:08:50.942Z",
      sum: 1100,
    },
  ],
  pin: 1111,
};

export const account2 = {
  userName: "Анна Смирнова",
  transactions: [
    {
      date: "2022-01-13T11:48:50.942Z",
      sum: 2000,
    },
    {
      date: "2022-01-14T12:00:50.942Z",
      sum: 6400,
    },
    {
      date: "2022-01-17T14:12:50.942Z",
      sum: -1350,
    },
    {
      date: "2022-01-26T18:08:50.942Z",
      sum: -70,
    },
    {
      date: "2022-02-02T13:02:00.942Z",
      sum: -210,
    },
    {
      date: "2022-03-26T13:08:50.942Z",
      sum: -2000,
    },
    {
      date: "2022-03-02T10:02:15.942Z",
      sum: 5500,
    },
    {
      date: "2022-03-12T14:08:50.942Z",
      sum: -30,
    },
  ],
  pin: 2222,
};

export const account3 = {
  userName: "Сергей Ковалев",
  transactions: [
    {
      date: "2021-12-13T11:48:50.942Z",
      sum: 900,
    },
    {
      date: "2021-12-14T12:00:50.942Z",
      sum: -200,
    },
    {
      date: "2021-12-01T14:12:50.942Z",
      sum: 280,
    },
    {
      date: "2021-12-26T18:08:50.942Z",
      sum: 300,
    },
    {
      date: "2022-01-02T13:02:00.942Z",
      sum: -200,
    },
    {
      date: "2022-01-26T13:08:50.942Z",
      sum: 150,
    },
    {
      date: "2022-02-02T10:02:15.942Z",
      sum: 1400,
    },
    {
      date: "2022-03-02T14:08:50.942Z",
      sum: -400,
    },
  ],
  pin: 3333,
};

export const account4 = {
  userName: "Елена Федорова",
  transactions: [
    {
      date: "2021-10-11T10:00:50.942Z",
      sum: 530,
    },
    {
      date: "2021-11-14T15:00:50.942Z",
      sum: 1300,
    },
    {
      date: "2021-11-25T14:12:50.942Z",
      sum: 500,
    },
    {
      date: "2021-12-02T08:08:50.942Z",
      sum: 40,
    },
    {
      date: "2022-01-23T19:02:00.942Z",
      sum: 190,
    },
  ],
  pin: 4444,
};

export const account5 = {
  userName: "Андрей Иванов",
  transactions: [
    {
      date: "2022-02-01T06:40:50.942Z",
      sum: 630,
    },
    {
      date: "2022-02-14T22:04:50.942Z",
      sum: 800,
    },
    {
      date: "2022-02-01T14:12:50.942Z",
      sum: 300,
    },
    {
      date: "2022-03-06T12:08:50.942Z",
      sum: 50,
    },
    {
      date: "2022-03-10T13:02:00.942Z",
      sum: 120,
    },
    {
      date: "2022-03-10T13:02:00.942Z",
      sum: -20,
    },
  ],
  pin: 5555,
};

export let accounts = [account1, account2, account3, account4, account5];

export const headerButtonLogin = document.querySelector(".header__btn");
export const headerContainer = document.querySelector(".header__container");
export const popupToEnter = document.querySelector(".popup__content");
export const popupChange = document.querySelector(".popup__account-register");
export const openPopupWindowRegistration =
  document.querySelector(".sign__popup");
export const openPopupWindowToEnter = document.querySelector(
  ".popup__account-change"
);
export const errorWindowPopup = document.querySelector(".error__popup");
export const buttonExitAccount = document.querySelector(".account__exit");
export const successWindowRegistrationPopup = document.querySelector(
  ".success__registration-popup"
);

export const buttonRegistrationNewAccount = document.querySelector("#logIn");
export const buttonCloseErrorPopup =
  document.querySelector(".error__popup-exit");
export const buttonCloseSuccessRegistrationPopup = document.querySelector(
  ".success__registration-popup"
);

export const inputRegisterNewAccount = document.querySelector(
  ".input__login-register"
);
export const inputRegisterNewAccountPassword = document.querySelector(
  ".input__login-password"
);

export const opacity = document.querySelector(".opacity");

// Warning Popup
export const warningWindowPopup = document.querySelector(".alert__popup");
export const buttonCloseAlertPopup =
  document.querySelector(".alert__popup-exit");
export const textAlertPopup = document.querySelector(".alert__popup-text");

buttonCloseAlertPopup.addEventListener("click", () => {
  warningWindowPopup.classList.remove("actives");
  opacity.classList.remove("opacity__block");
});

//

headerButtonLogin.addEventListener("click", () => {
  popupToEnter.classList.add("active");
  opacity.classList.add("opacity__block");
});


buttonExitAccount.addEventListener("click", () => {
  loginExitApplication();
});

opacity.addEventListener("click", (e) => {
  if (e.target.classList.contains("opacity")) {
    opacity.classList.remove("opacity__block");
    popupToEnter.classList.remove("active");
    openPopupWindowRegistration.classList.remove("active");
    popupToEnter.classList.remove("change");
    errorWindowPopup.classList.remove("actives");
    warningWindowPopup.classList.remove("actives");
    successWindowRegistrationPopup.classList.remove("actives");
  }
});

buttonCloseErrorPopup.addEventListener("click", () => {
  errorWindowPopup.classList.remove("actives");
});

buttonCloseSuccessRegistrationPopup.addEventListener("click", () => {
  successWindowRegistrationPopup.classList.remove("actives");
});

popupToEnter.addEventListener("click", (e) => {
  if (e.target.classList.contains("active"))
    errorWindowPopup.classList.remove("actives");
});


popupChange.addEventListener("click", () => {
  change();
});

openPopupWindowToEnter.addEventListener("click", () => {
  change();
});

export const loginUserName = document.querySelector("#isSign");
export const inputLoginUser = document.querySelector(".input__login");
export const inputPasswordUser = document.querySelector(".input__password");
export const accountName = document.querySelector(".account__title-name");
export const accountWindowName = document.querySelector(".account");

// main app

export const labelDate = document.querySelector(".date");
export const labelBalance = document.querySelector(".balance__value");
export const labelSumIn = document.querySelector(".total__value--in");
export const labelSumOut = document.querySelector(".total__value--out");
export const labelSumInterest = document.querySelector(
  ".total__value--interest"
);
export const labelTimer = document.querySelector(".timer");

export const containerApp = document.querySelector(".app");
export const containerTransactions = document.querySelector(".transactions");

export const btnLogin = document.querySelector(".login__btn");
export const btnTransfer = document.querySelector(".form__btn--transfer");
export const btnLoan = document.querySelector(".form__btn--loan");
export const btnClose = document.querySelector(".form__btn--close");
export const btnSortDate = document.querySelector(".btn__sort-date");
export const btnSortExpenses = document.querySelector(".btn__sort-expenses");

export const inputLoginUsername = document.querySelector(".login__input--user");
export const inputLoginPin = document.querySelector(".login__input--pin");
export const inputTransferTo = document.querySelector(".form__input--to");
export const inputTransferAmount = document.querySelector(
  ".form__input--amount"
);
export const inputLoanAmount = document.querySelector(
  ".form__input--loan-amount"
);
export const inputCloseUsername = document.querySelector(".form__input--user");
export const inputClosePin = document.querySelector(".form__input--pin");

//

// Вход в аккаунт
loginUserName.addEventListener("click", (e) => {
  e.preventDefault();
  const name = inputLoginUser.value;
  currentAccount = accounts.find((el) => el.userName === name);

  if (currentAccount?.pin === +inputPasswordUser.value) {
    containerApp.classList.toggle("app__grid");
    popupToEnter.classList.remove("active");
    headerContainer.classList.toggle("header__hide");
    accountWindowName.classList.toggle("show");
    opacity.classList.remove("opacity__block");
    accountName.innerHTML = currentAccount.userName;
    const date = new Date().toLocaleDateString();
    labelDate.innerHTML = date;
    updateUI();

    copyTransactions = [...currentAccount.transactions];

    if (timerId) {
      clearInterval(timerId);
    }
    timerId = startTimer();
  } else if (
    name !== currentAccount ||
    currentAccount.pin !== +inputPasswordUser.value
  ) {
    errorWindowPopup.classList.add("actives");
    clearPopupForm();
  }
});

//

export function resetTimer() {
  clearInterval(timerId);
  time = 300;
  timerId = startTimer();
}

function updateUI() {
  displayBalance();
  displayTransactions(currentAccount.transactions);
  displayTotal();
  resetTimer();
}

// Регистрация нового аккаунта

buttonRegistrationNewAccount.addEventListener("click", (e) => {
  e.preventDefault();

  const newName = inputRegisterNewAccount.value;
  console.log(newName);
  const newPin = inputRegisterNewAccountPassword.value;
  // console.log(newPin);
  // console.log(inputRegisterNewAccount.value);

  if (
    inputRegisterNewAccount.value === "" ||
    inputRegisterNewAccountPassword.value === ""
  ) {
    warningWindowPopup.classList.add("actives");
    opacity.classList.add("opacity__block");
    textAlertPopup.innerHTML = "Заполните все необходимые поля!!";
  } else {
    accounts.push({
      userName: newName,
      transactions: [],
      pin: +newPin,
    });

    successWindowRegistrationPopup.classList.add("actives");
  }

  inputRegisterNewAccount.value = "";
  inputRegisterNewAccountPassword.value = "";

  containerTransactions.innerHTML = "";
});

// transfer

btnTransfer.addEventListener("click", (e) => {
  e.preventDefault();
  resetTimer();
  const reciepientName = inputTransferTo.value;
  const transferAmount = inputTransferAmount.value;
  const reciepientAccount = accounts.find(
    (el) => el.userName === reciepientName
  );
  if (
    reciepientAccount?.userName !== currentAccount.userName &&
    transferAmount > 0 &&
    transferAmount <= currentAccount.balance
  ) {
    const newTransfer = {
      date: new Date().toISOString(),
      sum: -transferAmount,
    };
    currentAccount.transactions.unshift(newTransfer);
    containerTransactions.innerHTML = "";

    updateUI();

    inputTransferTo.value = "";
    inputTransferAmount.value = "";
  } else {
    warningWindowPopup.classList.add("actives");
    opacity.classList.add("opacity__block");
    textAlertPopup.innerHTML = "Проверьте введенные данные!!";
  }
});

// Займ

btnLoan.addEventListener("click", (e) => {
  e.preventDefault();
  resetTimer();
  const loanAmount = inputLoanAmount.value;

  const mapLimit =
    Math.max.apply(
      null,
      currentAccount.transactions.map((i) => i.sum)
    ) * 10;

  if (loanAmount > 0 && loanAmount < mapLimit) {
    const newTransfer = {
      date: new Date().toISOString(),
      sum: +loanAmount,
    };

    currentAccount.transactions.unshift(newTransfer);
    containerTransactions.innerHTML = "";

    updateUI();

    inputLoanAmount.value = "";
  } else {
    warningWindowPopup.classList.add("actives");
    opacity.classList.add("opacity__block");
    textAlertPopup.innerHTML =
      "Cумма займа превысила установленный порог лимита. Исправьте сумму или обратитесь в банк";

    inputLoanAmount.value = "";
  }
});

// Сортировка по расходам

btnSortExpenses.addEventListener("click", () => {
  currentAccount.sorted = !currentAccount.sorted;
  const sortedTransactions = currentAccount.transactions.sort(
    (a, b) => b.sum - a.sum
  );
  containerTransactions.innerHTML = "";
  displayTransactions(
    currentAccount.sorted ? sortedTransactions : copyTransactions
  );

  resetTimer();
});

// Сортировка по дате

btnSortDate.addEventListener("click", () => {
  // currentAccount.sorted = !currentAccount.sorted;

  const sortedTransactionsDate = currentAccount.transactions.sort(
    (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
  );
  containerTransactions.innerHTML = "";

  displayTransactions(
    currentAccount.sorted ? sortedTransactionsDate : copyTransactions
  );

  resetTimer();
});

// Закрытие Счета
btnClose.addEventListener("click", (e) => {
  e.preventDefault();
  resetTimer();
  const ownerName = inputCloseUsername.value;
  const ownerPin = inputClosePin.value;

  if (ownerName === currentAccount.userName && ownerPin == currentAccount.pin) {
    accounts = accounts.filter(function (currentAccount) {
      return currentAccount.userName !== ownerName;
    });

    containerTransactions.innerHTML = "";
    inputCloseUsername.value = "";
    inputClosePin.value = "";

    loginExitApplication();
  } else {
    warningWindowPopup.classList.add("actives");
    opacity.classList.add("opacity__block");
    textAlertPopup.innerHTML = "Проверьте введенные данные";
    inputClosePin.value = "";
    inputCloseUsername.value = "";
  }
});

function startTimer() {
  function timer() {
    const minutes = Math.trunc(time / 60);
    const seconds = Math.trunc(time % 60);

    labelTimer.innerHTML = `${minutes.toString().padStart(2, 0)} : ${seconds
      .toString()
      .padStart(2, 0)}`;

    if (time === 0) {
      clearInterval(logoutTimer);

      // если время вышло, скрыть окно приложения и отобразить страницу входа
      loginExitApplication();
    }

    time--;
  }

  timer();

  const logoutTimer = setInterval(timer, 1000);
  return logoutTimer;
}
