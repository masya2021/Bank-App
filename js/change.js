import { popupToEnter, openPopupWindowRegistration } from "./index.js";

export const change = () => {
  popupToEnter.classList.toggle("change");
  openPopupWindowRegistration.classList.toggle("active");
};
