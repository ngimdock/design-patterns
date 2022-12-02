import { Device } from "../interface.js";

export class Tv implements Device {
  private isTvEnabled: boolean;
  private volume: number = 30;
  private channel: number = 1;

  constructor(isTvEnabled: boolean = false) {
    this.isTvEnabled = isTvEnabled;
  }

  isEnabled(): boolean {
    return this.isTvEnabled;
  }

  enable(): void {
    this.isTvEnabled = true;
  }

  disable(): void {
    this.isTvEnabled = false;
  }

  getVolume(): number {
    return this.volume;
  }

  setVolume(percent: number): void {
    this.volume = percent;
  }

  getChannel(): number {
    return this.channel;
  }

  setChannel(channel: number): void {
    this.channel = channel;
  }
}
