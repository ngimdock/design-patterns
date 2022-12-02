package abstractions.concrete_abstractions;

import abstractions.RemoteControle;
import implementations.*;

public class AdvancedRemoteControl extends RemoteControle {
    public AdvancedRemoteControl(Device device) {
        super(device);
    }

    public void mute() {
        device.setVolume(0);
    }
}