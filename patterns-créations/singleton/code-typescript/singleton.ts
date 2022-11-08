type SingletonType = Singleton | null;

export class Singleton {
  private constructor() {}

  private static instance: SingletonType = null;

  private static instanceName: string = "single instance";

  public static getInstance(): SingletonType {
    if (Singleton.instance === null) return new Singleton();

    console.log(Singleton.instance);
    return Singleton.instance;
  }
}
