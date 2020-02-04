export class UseClass {
    private localStorage: Storage;

    constructor() {
        this.localStorage = window.localStorage;
    }

    setItem(key: string, obj: object): void {
        this.localStorage.setItem(key, JSON.stringify(obj));
    }

    getItem(key: string): object {
        return JSON.parse(this.localStorage.getItem(key));
    }

    removeItem(key: string): void {
        const obj = this.localStorage.removeItem(key);
    }
}
