export interface IStorage {
  write: (key: string, data: string) => void;
  read: (key: string) => string | null;
}

export class LocalStorage implements IStorage {
  write(key: string, data: string) {
    localStorage.setItem(key, data);
  }
  read(key: string) {
    return localStorage.getItem(key);
  }
}
