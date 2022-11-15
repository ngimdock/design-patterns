import { Button } from "../interfaces/button.js";

export class WindowButton implements Button {
  paint(): void {
    console.log("Paint button with blue windows color");
  }
}
