package factories.abstract_factories;

import gui_elements.interfaces.*;

public interface GuiFactory {

    //create button
    public Button createButton();

    //create checkbox
    public Checkbox createCheckbox();
}