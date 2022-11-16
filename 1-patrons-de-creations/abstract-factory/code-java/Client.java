import app.Application;

import factories.abstract_factories.GuiFactory;
import factories.concrete_factories.*;


public class Client {

    public static void main(String[] args) {

        String SYSTEM_OS = "MAC";

        GuiFactory factory;

        if(SYSTEM_OS == "MAC")
            factory = new MacFactory();
        else if(SYSTEM_OS == "WINDOW")
            factory = new WindowFactory();

        else
            throw new RuntimeException("Unknown OS");

        Application app = new Application(factory);

        app.createUiKids();
        app.paint();
    }

}
