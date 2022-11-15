import { GUIFactory } from "./factories/guiFactory.js";
import { MacFactory } from "./factories/concreteFactories/macFactory.js";
import { WindowFactory } from "./factories/concreteFactories/windowFactory.js";
import { Application } from "./application.js";

const SYSTEM_OS = "MAC";
let factory: GUIFactory;

if (SYSTEM_OS === "MAC") factory = new MacFactory();
else if (SYSTEM_OS === "WINDOWs") factory = new WindowFactory();
else throw new Error("The provided type donci");

const app: Application = new Application(factory);

app.createUiKid();
app.pain();
