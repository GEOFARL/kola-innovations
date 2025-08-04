import { UserJSON } from '../types/auth/user';

export class User {
  constructor(
    public readonly id: string,
    public readonly firstName: string | null,
    public readonly lastName: string | null,
    public readonly imageUrl: string,
    public readonly emailAddress: string,
  ) {}

  get fullName(): string {
    return [this.firstName, this.lastName].filter(Boolean).join(' ');
  }

  static fromClerk(clerkUser: any): User {
    return new User(
      clerkUser.id,
      clerkUser.firstName,
      clerkUser.lastName,
      clerkUser.imageUrl,
      clerkUser.primaryEmailAddress?.emailAddress ?? '',
    );
  }

  toJSON(): UserJSON {
    return {
      id: this.id,
      firstName: this.firstName,
      lastName: this.lastName,
      imageUrl: this.imageUrl,
      emailAddress: this.emailAddress,
    };
  }

  static fromJSON(json: UserJSON): User {
    return new User(
      json.id,
      json.firstName,
      json.lastName,
      json.imageUrl,
      json.emailAddress,
    );
  }
}
