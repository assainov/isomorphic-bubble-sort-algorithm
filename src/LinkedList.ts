import Sorter from './Sorter';

export default class LinkedList extends Sorter {
    head: Node | null = null;

    add(value: number): void {
        const node = new Node(value);

        if (this.head == null) {
            this.head = node;
            return;
        }

        let tail = this.head;
        while (tail.next) {
            tail = tail.next;
        }
        tail.next = node;
    }

    at(index: number): Node {
        if (index < 0) {
            throw new Error(`Index must be a positive number`);
        }

        if (!this.head) {
            throw new Error(
                `Could not move linked list to ${index}. The list is empty`
            );
        }

        let counter = 0;

        let node: Node | null = this.head;

        while (node) {
            if (counter === index) {
                return node;
            }

            node = node.next;
            counter++;
        }

        throw new Error(
            'Index must be less or equal to the length of the linked list'
        );
    }

    isGreaterThanNext(current: number): boolean {
        if (!this.head) {
            throw new Error('List is empty');
        }
        let currentNode = this.at(current);
        let nextNode = currentNode.next;

        if (!nextNode) {
            return false;
        }

        return currentNode.value > nextNode.value;
    }

    swapWithNext(current: number): void {
        const currentNode = this.at(current);
        const nextNode = currentNode.next;

        if (!nextNode) {
            throw new Error('Next node is not found');
        }

        const temp = currentNode.value;
        currentNode.value = nextNode.value;
        nextNode.value = temp;
    }

    print(): void {
        if (!this.head) {
            return;
        }

        let node: Node | null = this.head;

        while (node) {
            console.log(node.value);
            node = node.next;
        }
    }

    get length(): number {
        if (!this.head) {
            return 0;
        }

        let length = 0;
        let tail = this.head;

        while (tail.next) {
            length++;
            tail = tail.next;
        }

        return length;
    }
}

class Node {
    next: Node | null = null;
    constructor(public value: number) {}
}
