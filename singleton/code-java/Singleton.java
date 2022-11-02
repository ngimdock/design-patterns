public final class Singleton {
    private static Singleton instance = null;
    
    public tmp = "du text ici";

    private Singleton() {
    }

    public static Singleton getInstance() {
        if(instance == null) return new Singleton();

        return instance;
    }
}