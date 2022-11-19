"use strict";

let currentAccount;
let copyTransactions;
let timerId;
let time = 300;

const account1 = {
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

const account2 = {
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

const account3 = {
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

const account4 = {
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

const account5 = {
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

let accounts = [account1, account2, account3, account4, account5];

const headerButtonLogin = document.querySelector(".header__btn");
const headerContainer = document.querySelector(".header__container");
const popupToEnter = document.querySelector(".popup__content");
const popupChange = document.querySelector(".popup__account-register");
const openPopupWindowRegistration = document.querySelector(".sign__popup");
const openPopupWindowToEnter = document.querySelector(".popup__account-change");
const errorWindowPopup = document.querySelector(".error__popup");
const buttonExitAccount = document.querySelector(".account__exit");
const successWindowRegistrationPopup = document.querySelector(
  ".success__registration-popup"
);

const buttonRegistrationNewAccount = document.querySelector("#logIn");
const buttonCloseErrorPopup = document.querySelector(".error__popup-exit");
const buttonCloseSuccessRegistrationPopup = document.querySelector(
  ".success__registration-popup"
);

const inputRegisterNewAccount = document.querySelector(
  ".input__login-register"
);
const inputRegisterNewAccountPassword = document.querySelector(
  ".input__login-password"
);

const opacity = document.querySelector(".opacity");

// Warning Popup
const warningWindowPopup = document.querySelector(".alert__popup");
const buttonCloseAlertPopup = document.querySelector(".alert__popup-exit");
const textAlertPopup = document.querySelector(".alert__popup-text");

buttonCloseAlertPopup.addEventListener("click", () => {
  warningWindowPopup.classList.remove("actives");
  opacity.classList.remove("opacity__block");
});

//Timer
// const clearTimer = document.querySelector(".wrapper__app");

//

//

headerButtonLogin.addEventListener("click", () => {
  popupToEnter.classList.add("active");
  opacity.classList.add("opacity__block");
});

function loginExitApplication() {
  headerContainer.classList.toggle("header__hide");
  containerApp.classList.toggle("app__grid");
  accountWindowName.classList.toggle("show");
  containerTransactions.innerHTML = "";
}

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

const change = () => {
  popupToEnter.classList.toggle("change");
  openPopupWindowRegistration.classList.toggle("active");
};

popupChange.addEventListener("click", () => {
  change();
});

openPopupWindowToEnter.addEventListener("click", () => {
  change();
});

const loginUserName = document.querySelector("#isSign");
const inputLoginUser = document.querySelector(".input__login");
const inputPasswordUser = document.querySelector(".input__password");
const accountName = document.querySelector(".account__title-name");
const accountWindowName = document.querySelector(".account");

// main app

const labelDate = document.querySelector(".date");
const labelBalance = document.querySelector(".balance__value");
const labelSumIn = document.querySelector(".total__value--in");
const labelSumOut = document.querySelector(".total__value--out");
const labelSumInterest = document.querySelector(".total__value--interest");
const labelTimer = document.querySelector(".timer");

const containerApp = document.querySelector(".app");
const containerTransactions = document.querySelector(".transactions");

const btnLogin = document.querySelector(".login__btn");
const btnTransfer = document.querySelector(".form__btn--transfer");
const btnLoan = document.querySelector(".form__btn--loan");
const btnClose = document.querySelector(".form__btn--close");
const btnSortDate = document.querySelector(".btn__sort-date");
const btnSortExpenses = document.querySelector(".btn__sort-expenses");

const inputLoginUsername = document.querySelector(".login__input--user");
const inputLoginPin = document.querySelector(".login__input--pin");
const inputTransferTo = document.querySelector(".form__input--to");
const inputTransferAmount = document.querySelector(".form__input--amount");
const inputLoanAmount = document.querySelector(".form__input--loan-amount");
const inputCloseUsername = document.querySelector(".form__input--user");
const inputClosePin = document.querySelector(".form__input--pin");

//

//

function newAccounts(arr) {
  return arr.push({ userName: newName, transactions: [], pin: +newPin });
}

function clearPopupForm() {
  inputLoginUser.value = "";
  inputPasswordUser.value = "";
}

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

function displayBalance() {
  const balance = currentAccount.transactions.reduce(
    (acc, b) => acc + b.sum,
    0
  );
  currentAccount.balance = balance;
  labelBalance.innerHTML = `${balance}$`;
}

function displayTransactions() {
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

function displayTotal() {
  const depositValue = currentAccount.transactions
    .filter((obj) => obj.sum > 0)
    .reduce((a, b) => a + b.sum, 0);
  const withdrawalValue = currentAccount.transactions
    .filter((obj) => obj.sum < 0)
    .reduce((a, b) => a + b.sum, 0);
  labelSumIn.innerHTML = `${depositValue}$`;
  labelSumOut.innerHTML = `${withdrawalValue}$`;
}

function resetTimer() {
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
