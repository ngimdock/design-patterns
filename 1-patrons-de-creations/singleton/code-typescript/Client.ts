import { Database } from "./database/database.js";

const client = async () => {
  const database: Database = Database.getInstance("localhost", 3000);

  const database2: Database = Database.getInstance();

  console.log(database === database2);

  await database.connection();

  const allUsers = await database.query("SELECT * FROM Users");

  console.log(allUsers);
};

client();
