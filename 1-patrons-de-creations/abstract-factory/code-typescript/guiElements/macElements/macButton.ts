import { Button } from "../interfaces/button.js";

export class MacButton implements Button {
  paint(): void {
    console.log("Paint button with cian macOs color");
  }
}
