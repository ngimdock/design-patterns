package implementations.concretes_implementations;

import implementations.Device;

public class Tv implements Device {
    private boolean on = false;
    private int volume = 30;
    private int channel = 1;

    public boolean isEnabled() {
        return on;
    }

    public void enable() {
        on = true;
    }

    public void disable() {
        on = false;
    }

    public int getVolume() {
        return volume;
    }

    public void setVolume(int percent) {
        if (percent > 100) {
            this.volume = 100;
        } else {
            this.volume = percent;
        }
    }

    public int getChannel() {
        return channel;
    }

    public void setChannel(int channel) {
        this.channel = channel;
    }
}