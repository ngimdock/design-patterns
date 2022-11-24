import database.Database;

public class Client {

    public static void main(String[] args) {

        Database database = Database.getInstance();

        System.out.println(database);

        database.connection();

    }
}