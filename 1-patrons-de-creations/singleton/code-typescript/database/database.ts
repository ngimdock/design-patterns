export type Users = {
  name: string;
  age: number;
};

export class Database {
  private static instance: Database;

  private host: string | undefined;
  private port: number | undefined;

  private constructor(host?: string, port?: number) {
    this.host = host;
    this.port = port;
  }

  static getInstance(host?: string, port?: number): Database {
    if (!this.instance) Database.instance = new Database(host, port);

    return Database.instance;
  }

  get getHost() {
    return this.host;
  }

  get getPort() {
    return this.port;
  }

  async connection() {
    console.log("Connection to the database...");

    await new Promise((resolve) =>
      setTimeout(() => {
        resolve("resolved");
        console.log("Database connected ! ready to recieve queries...");
      }, 2000)
    );
  }

  async query(query: string): Promise<{ name: string; age: number }[]> {
    await new Promise((resolve) => setTimeout(resolve, 3000));

    return [
      { name: "john", age: 22 },
      { name: "daniela", age: 30 },
    ];
  }
}
