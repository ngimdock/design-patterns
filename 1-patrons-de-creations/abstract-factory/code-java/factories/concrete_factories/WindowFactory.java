package factories.concrete_factories;

import factories.abstract_factories.GuiFactory;

import gui_elements.interfaces.*;

import gui_elements.window_elements.*;

public class WindowFactory implements GuiFactory {

    public void WindowFactory () {};

     public Button createButton(){
        
        return new WindowButton();
     }

    public Checkbox  createCheckbox() {
        
        return new WindowCkeckbox();
    }
}