import Sorter from './Sorter';

export default class NumbersCollection extends Sorter {
    constructor(public data: number[]) {
        super();
    }

    isGreaterThanNext(current: number): boolean {
        const next = current + 1;
        return this.data[current] > this.data[next];
    }

    swapWithNext(current: number): void {
        const currentValue = this.data[current];
        const next = current + 1;

        this.data[current] = this.data[next];
        this.data[next] = currentValue;
    }

    get length(): number {
        return this.data.length;
    }
}
