import { Radio } from "./implementations/concretesImplementations/radio.js";
import { RemoteControle } from "./abstraction/remoteControle.js";
import { AdvancedRemoteControl } from "./abstraction/concreteAbstraction/advancedRemoteControl.js";
import { Tv } from "./implementations/concretesImplementations/tv.js";

const tv: Tv = new Tv();
const remoteControle: RemoteControle = new RemoteControle(tv);

remoteControle.tooglePower();
remoteControle.volumeUp();

const radio: Radio = new Radio();
const advancedRemoteControle: AdvancedRemoteControl = new AdvancedRemoteControl(
  radio
);

advancedRemoteControle.mute();
