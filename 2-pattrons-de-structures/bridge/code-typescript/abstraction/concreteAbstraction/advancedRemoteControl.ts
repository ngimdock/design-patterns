import { Device } from "../../implementations/interface.js";
import { RemoteControle } from "../remoteControle.js";

export class AdvancedRemoteControl extends RemoteControle {
  constructor(device: Device) {
    super(device);
  }

  mute(): void {
    this.device.setVolume(0);
  }
}
