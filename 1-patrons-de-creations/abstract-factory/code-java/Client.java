import app.Application;

import gui_elements.interfaces.*;
import gui_elements.mac_elements.*;

import factories.abstract_factories.GuiFactory;
import factories.concrete_factories.*;


public class Client {

    public static void main(String[] args) {

        Application app = new Application();

        GuiFactory factory;

        factory = new MacFactory();

        Checkbox macCheck = factory.createCheckbox();
        Button macBtn = factory.createButton();

        macCheck.paint();
        macBtn.paint();

        factory = new WindowFactory();

         Button winBtn = factory.createButton();
         Checkbox winCheck = factory.createCheckbox();

         winBtn.paint();
         winCheck.paint();
    }

}
