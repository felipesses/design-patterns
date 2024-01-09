import { MyDatabaseModule } from './db/my-database-module';

const myDatabaseA = MyDatabaseModule;

myDatabaseA.add({ name: 'Felipe', age: 23 });
myDatabaseA.add({ name: 'Marlui', age: 62 });
myDatabaseA.add({ name: 'Rita', age: 57 });

export { myDatabaseA };
