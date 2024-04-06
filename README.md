# starter-mongo-mongoose-atlas

- This is a collection of code that connects to a MongoDB Atlas database via Mongo and Mongoose commands.
- The CRUD CLI uses Mongoose to list, add, delete and edit todos in a database collection at MongoDB Atlas.
- Below are instructions on how to restrict a MongoDB Atlas user to only be able to read/write to a specific database collection.

![democlietodolist](https://github.com/edwardtanguay/starter-mongo-mongoose-atlas/assets/446574/89ee0d10-0944-41b5-b8ad-732422343020)

## setup

- clone locally
- `npm i`
- create MongoDB Atlas database e.g. "test001-cli"
- create a collection in that database called "todos"
- create an **.env** file:

```
MONGO_ATLAS_CLUSTER_URL = cluster0.EXAMPLE.mongodb.net
MONGO_USER = nnn
MONGO_PASSWORD = nnn
MONGO_DATABASE = nnn
MONGO_COLLECTION = nnn
```

## execute

- `node index_mongo.js` - displays data from MongoDB Atlas collection using Mongo commands
- `node index_mongoose.js` - displays data from MongoDB Atlas collection using Mongoose commands
- `npm run todos` - a CRUD CLI that lists, adds, deletes and edits todos in a MongoDB Atlas collection

## set up a MongoDB user that only has read/write access to a specific database and collection

Note that you have to create both a (1) **Custom Role** and (2) **Specific Privileges**:

![grafik](https://github.com/edwardtanguay/starter-mongo-mongoose-atlas/assets/446574/4926f497-96eb-4d12-a5fd-dd45c855785f)
