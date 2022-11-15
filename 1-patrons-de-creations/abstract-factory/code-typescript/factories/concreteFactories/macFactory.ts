import { Button } from "../../guiElements/interfaces/button.js";
import { Checkbox } from "../../guiElements/interfaces/checkbox.js";
import { MacButton } from "../../guiElements/macElements/macButton.js";
import { MacCheckbox } from "../../guiElements/macElements/macCheckbox.js";
import { GUIFactory } from "../guiFactory.js";

export class MacFactory implements GUIFactory {
  createButton(): Button {
    return new MacButton();
  }

  createCheckbox(): Checkbox {
    return new MacCheckbox();
  }
}
