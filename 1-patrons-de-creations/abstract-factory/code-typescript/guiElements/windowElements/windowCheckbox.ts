import { Checkbox } from "../interfaces/checkbox.js";

export class WindowCheckbox implements Checkbox {
  paint(): void {
    console.log("Paint checkbox with blue windows color");
  }
}
