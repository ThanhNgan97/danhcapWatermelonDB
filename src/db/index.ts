import { Platform } from 'react-native'
import { Database } from '@nozbe/watermelondb'
import SQLiteAdapter from '@nozbe/watermelondb/adapters/sqlite'
import AccountAllocation from '../model/AccountAllocation';

import schema from './schema';
import migrations from './migrations';
// import Post from './model/Post' // ⬅️ You'll import your Models here
import Account from '../model/Account';
import Allocation from '../model/Allocation';

// First, create the adapter to the underlying database:
const adapter = new SQLiteAdapter({
  schema,
  // (You might want to comment it out for development purposes -- see Migrations documentation)
  // migrations,
  // (optional database name or file system path)
  // dbName: 'myapp',
  // (recommended option, should work flawlessly out of the box on iOS. On Android,
  // additional installation steps have to be taken - disable if you run into issues...)
  jsi: false, /* Platform.OS === 'ios' */
  // (optional, but you should implement this method)
  onSetUpError: error => {
    // Database failed to load -- offer the user to reload the app or log out
  }
})

// Then, make a Watermelon database from it!
const database = new Database({
  adapter,
  modelClasses: [
    Account,
    Allocation,
    AccountAllocation,
    // Post, // ⬅️ You'll add Models to Watermelon here
  ],
})

export default database;

export const accountsCollection  = database.get<Account>('accounts');
export const allocationsCollection = database.get<Allocation>('allocations');
export const accountAllocationColection = database.get<AccountAllocation>('account_allocations');