package app;

import factories.abstract_factories.GuiFactory;
import gui_elements.interfaces.*;

public class Application {

    private GuiFactory factory;
    private Button button;
    private Checkbox checkbox;

    public Application(GuiFactory factory) {

        this.factory = factory;
    };

    public void createUiKids() {
        this.button = factory.createButton();
        this.checkbox = factory.createCheckbox();
    }

    public void paint() {
        this.button.paint();
        this.checkbox.paint();
    }
}