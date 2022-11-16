import { Button } from "../../guiElements/interfaces/button.js";
import { Checkbox } from "../../guiElements/interfaces/checkbox.js";

export interface GUIFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
