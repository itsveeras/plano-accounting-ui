export class Client {
    id: string
    firstName: string;
    lastName: string;
    type: Type;
    self: string;
    constructor(response: any) {
      this.firstName = response.firstName;
      this.lastName = response.lastName;
      this.type = response.type;
      this.self = response._links.self.href;
    }
}

export enum Type {Business, Individual};