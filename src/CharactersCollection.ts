import Sorter from './Sorter';

export default class CharachtersCollection extends Sorter {
    constructor(public data: string) {
        super();
    }

    isGreaterThanNext(current: number): boolean {
        const next = current + 1;
        return this.data.toLowerCase()[current] > this.data.toLowerCase()[next];
    }

    swapWithNext(current: number): void {
        const charArray = this.data.split('');

        const currentValue = charArray[current];
        const next = current + 1;

        charArray[current] = this.data[next];
        charArray[next] = currentValue;

        this.data = charArray.join('');
    }

    get length(): number {
        return this.data.length;
    }
}
