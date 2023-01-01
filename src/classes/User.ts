class User {
  public roles: string[];

  constructor() {
    this.roles = ['PreferredCustomer'];
  }

  isInRole(role: string): boolean {
    return this.roles.includes(role);
  }
}

export default User;
