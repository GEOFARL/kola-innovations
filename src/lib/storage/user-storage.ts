import { StoredUser } from '../types/auth/user';
import LocalStorageService from './local-storage-service';

const USER_KEY = 'app__user';

export class LocalUserStorage {
  private storage = new LocalStorageService<StoredUser>(USER_KEY);

  saveUser(user: StoredUser): void {
    this.storage.save(user);
  }

  getUser(): StoredUser | null {
    return this.storage.get();
  }

  clearUser(): void {
    this.storage.clear();
  }

  isLoggedIn(): boolean {
    return this.storage.exists();
  }
}

export const localUserStorage = new LocalUserStorage();
