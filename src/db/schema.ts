import { appSchema, tableSchema } from '@nozbe/watermelondb'

export default appSchema({
  version: 5,
  tables: [
    // We'll add tableSchemas here later
    tableSchema({
        name: 'accounts',
        columns: [
          { name: 'created_at', type: 'number' },
          { name: 'updated_at', type: 'number' },
          { name: 'name', type: 'string' },
          { name: 'cap', type: 'number' },
          { name: 'tap', type: 'number' },
        ],
      }),


      tableSchema({
        name:'allocations',
        columns:[
          { name: 'created_at', type: 'number' },
          { name: 'updated_at', type: 'number' },
          {name: 'create_at', type:'number'},
          {name: 'income', type:'number'},
        ],
      }),

      tableSchema({
        name:'account_allocations',
        columns:[
          { name: 'created_at', type: 'number' },
          { name: 'updated_at', type: 'number' },
          // {name: 'create_at', type:'number'},
          {name: 'account_id', type:'string'},
          {name: 'allocation_id', type:'string'},
          {name: 'amount', type:'number'},
          {name: 'cap', type:'number'},
        ],
      }),
  ]
})