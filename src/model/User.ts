class User {
  private id: number
  private name: string
  private email: string
  private password: string

  constructor(id: number, name: string, email: string, password: string) {
    this.id = id
    this.name = name
    this.email = email
    this.password = password
  }

  getId(): number {
    return this.id;
  }

  getName(): string {
    return this.name;
  }

  getEmail(): string {
    return this.email
  }

  getPassword(): string {
    return this.password
  }
}

export default User