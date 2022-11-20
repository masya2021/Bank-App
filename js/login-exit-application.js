import {
  headerContainer,
  containerApp,
  accountWindowName,
  containerTransactions,
} from "./index.js";

export const loginExitApplication = () => {
  headerContainer.classList.toggle("header__hide");
  containerApp.classList.toggle("app__grid");
  accountWindowName.classList.toggle("show");
  containerTransactions.innerHTML = "";
};
