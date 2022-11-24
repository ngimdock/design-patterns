package database;

public class Database {

    private static Database instance = null;

    private String host;
    private int port;

    private Database() {}

    private Database(String host, int port) {
        this.host = host;
        this.port = port;
    }

    public static Database getInstance(){

        if(instance == null) {
            Database.instance = new Database();
        }

        return Database.instance;
    }

    public static Database getInstance(String host, int port) {
        if(instance == null) {
            Database.instance = new Database(host, port);
        }

        return Database.instance;
    }

    public String getHost() {
        return this.host;
    }

    public int getPort(){
        return this.port;
    }

    public void connection() {
        System.out.println("Database connected! ready to receive queries...");
    }
}