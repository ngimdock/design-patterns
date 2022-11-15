import { Checkbox } from "../interfaces/checkbox.js";

export class MacCheckbox implements Checkbox {
  paint(): void {
    console.log("Paint checkbox with cian macOs color");
  }
}
