package factories.concrete_factories;

import factories.abstract_factories.GuiFactory;

import gui_elements.interfaces.*;

import gui_elements.mac_elements.*;

public class MacFactory implements GuiFactory {

    public void MacFactory() {};

    //create button
    public Button createButton() {
        return new MacButton();
    }

    //create checkbox
    public Checkbox createCheckbox() {
        return new MacCkeckbox();
    }
}