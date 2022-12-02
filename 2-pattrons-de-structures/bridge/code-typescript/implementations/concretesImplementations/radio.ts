import { Device } from "../interface.js";

export class Radio implements Device {
  private isRadioEnabled: boolean;
  private volume: number = 30;
  private channel: number = 0;

  constructor(isRadioEnabled: boolean = false) {
    this.isRadioEnabled = isRadioEnabled;
  }

  isEnabled(): boolean {
    return this.isRadioEnabled;
  }

  enable(): void {
    this.isRadioEnabled = true;
    console.log("La radio allumée.");
  }

  disable(): void {
    this.isRadioEnabled = false;
    console.log("La radio éteint.");
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
