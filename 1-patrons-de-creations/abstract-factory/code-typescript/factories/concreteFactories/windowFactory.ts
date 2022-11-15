import { Button } from "../../guiElements/interfaces/button.js";
import { Checkbox } from "../../guiElements/interfaces/checkbox.js";
import { WindowButton } from "../../guiElements/windowElements/windowButton.js";
import { WindowCheckbox } from "../../guiElements/windowElements/windowCheckbox.js";
import { GUIFactory } from "../guiFactory.js";

export class WindowFactory implements GUIFactory {
  createButton(): Button {
    return new WindowButton();
  }

  createCheckbox(): Checkbox {
    return new WindowCheckbox();
  }
}
