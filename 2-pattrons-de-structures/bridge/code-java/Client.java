import implementations.Device;
import implementations.concretes_implementations.*;
import abstractions.RemoteControle;
import abstractions.concrete_abstractions.*;

public class Client {
    public static void main(String[] args) {
        
        Tv tv = new Tv();

        RemoteControle remoteControle = new RemoteControle(tv);

        remoteControle.togglePower();
        remoteControle.volumeUp();
        
        System.out.println(tv.getVolume());

        Radio radio = new Radio();
        AdvancedRemoteControl advanceControle = new AdvancedRemoteControl(radio);
        // advanceControle.mute();
    }
}