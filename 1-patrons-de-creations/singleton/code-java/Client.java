import database.Database;

public class Client {

    public static void main(String[] args) {

        Database database2 = Database.getInstance();
        Database database = Database.getInstance("localhost", 3000);

        System.out.println(database);
        System.out.println(database2);

        database.connection();

    }
}
