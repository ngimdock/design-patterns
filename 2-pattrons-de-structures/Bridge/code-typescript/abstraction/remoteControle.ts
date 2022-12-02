import { Device } from "../implementations/interface.js";

export class RemoteControle {
  protected device: Device;

  constructor(device: Device) {
    this.device = device;
  }

  tooglePower(): void {
    if (this.device.isEnabled()) this.device.disable();
    else this.device.enable();
  }

  volumeDown(): void {
    this.device.setVolume(this.device.getVolume() - 10);
  }

  volumeUp(): void {
    this.device.setVolume(this.device.getVolume() + 10);
  }

  channelDown(): void {
    this.device.setChannel(this.device.getChannel() - 1);
  }

  channelUp(): void {
    this.device.setChannel(this.device.getChannel() + 1);
  }
}
