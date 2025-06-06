class LocalStorageService<T> {
  constructor(private key: string) {}

  save(data: T): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem(this.key, JSON.stringify(data));
    }
  }

  get(): T | null {
    if (typeof window === 'undefined') return null;
    const raw = localStorage.getItem(this.key);
    return raw ? (JSON.parse(raw) as T) : null;
  }

  clear(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(this.key);
    }
  }

  exists(): boolean {
    return (
      typeof window !== 'undefined' && localStorage.getItem(this.key) !== null
    );
  }
}
export default LocalStorageService;
