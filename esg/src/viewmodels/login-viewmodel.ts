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
      console.log(this.username, this.password);

      if (this.username === "admin" && this.password === "1") {
        localStorage.setItem("authState", "signedin");
        globalStore.router.push("home").catch(() => true);
      }
    } catch (error: any) {
      if (error.name === "UserNotConfirmedException") {
        this.onChangeState("register_confirmation");
      }
    }
  }
  onChangeState(arg0: string) {
    throw new Error("Method not implemented.");
  }
}
