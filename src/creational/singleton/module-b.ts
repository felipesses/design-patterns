import { MyDatabaseModule } from './db/my-database-module';
import { myDatabaseA } from './module-a';

const myDatabase = MyDatabaseModule;

myDatabase.add({ name: 'Fabio', age: 23 });
myDatabase.add({ name: 'Guilherme', age: 23 });
myDatabase.add({ name: 'Julio', age: 23 });

myDatabase.show();

console.log(myDatabase === myDatabaseA); // true, mesma instancia
