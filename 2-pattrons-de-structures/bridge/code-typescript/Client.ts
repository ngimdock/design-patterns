import { Radio } from "./implementations/concretesImplementations/radio.js";
import { RemoteControle } from "./abstraction/remoteControle.js";
import { AdvancedRemoteControl } from "./abstraction/concreteAbstraction/advancedRemoteControl.js";
import { Tv } from "./implementations/concretesImplementations/tv.js";

const tv: Tv = new Tv();
const remoteControle: RemoteControle = new RemoteControle(tv);

remoteControle.tooglePower();
remoteControle.volumeUp();

console.log(tv.getVolume());

const radio: Radio = new Radio();
const advancedRemoteControle: AdvancedRemoteControl = new AdvancedRemoteControl(
  radio
);

console.log(radio.getVolume());
advancedRemoteControle.mute();
console.log(radio.getVolume());
