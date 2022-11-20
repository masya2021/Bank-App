import { inputLoginUser, inputPasswordUser } from "./index.js";

export function clearPopupForm() {
  inputLoginUser.value = "";
  inputPasswordUser.value = "";
}
