import { globalStore } from "@/stores/global-store";
import { action, observable } from "mobx";

export class LoginViewModel {
  constructor() {
    //
  }

  @observable username = "";
  @observable password = "";

  @action login() {
    try {
      // Auth.signIn(this.email, this.password)
      localStorage.setItem("authState", "signedin");
      console.log(this.username, this.password);

      if (this.username === "admin1234" && this.password === "1") {
        globalStore.router.push("home").catch(() => true);
      }
    } catch (error: any) {
      if (error.name === "UserNotConfirmedException") {
        // this.onChangeState('register_confirmation')
      }
      // this.errorMsg = error.message
      // snackController.error(error.message)
    }
  }
}
