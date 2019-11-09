import NumbersCollection from './NumbersCollection';
import CharactersCollection from './CharactersCollection';
import LinkedList from './LinkedList';

const collection = new NumbersCollection([10232, 10, 3, -5, 0]);
collection.sort();
console.log(collection.data);

const stringCollection = new CharactersCollection('zvdkbcadazqAX');
stringCollection.sort();
console.log(stringCollection.data);

const linkedList = new LinkedList();
linkedList.add(500);
linkedList.add(-10);
linkedList.add(20);
linkedList.add(3);

linkedList.sort();
linkedList.print();
