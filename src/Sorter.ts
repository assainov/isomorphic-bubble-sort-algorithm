export interface Sortable {
    isGreaterThanNext(index: number): boolean;
    swapWithNext(index: number): void;
    length: number;
}

export default abstract class Sorter {
    abstract length: number;
    abstract isGreaterThanNext(current: number): boolean;
    abstract swapWithNext(current: number): void;

    sort(): void {
        for (let outer = this.length; outer >= 1; outer--) {
            for (let inner = 0; inner <= outer; inner++) {
                if (this.isGreaterThanNext(inner)) {
                    this.swapWithNext(inner);
                }
            }
        }
    }
}
