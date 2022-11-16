import { GUIFactory } from "./factories/abstractFactories/guiFactory.js";
import { Button } from "./guiElements/interfaces/button.js";
import { Checkbox } from "./guiElements/interfaces/checkbox.js";

export class Application {
  private button: Button;
  private checkbox: Checkbox;
  constructor(private factory: GUIFactory) {}

  createUiKid() {
    this.button = this.factory.createButton();
    this.checkbox = this.factory.createCheckbox();
  }

  pain(): void {
    this.button.paint();
    this.checkbox.paint();
  }
}
