# starter-mongo-mongoose-atlas

This is code that connects to a MongoDB Atlas database via Mongo and Mongoose. 

![democlietodolist](https://github.com/edwardtanguay/starter-mongo-mongoose-atlas/assets/446574/89ee0d10-0944-41b5-b8ad-732422343020)

## setup

- clone locally
- `npm i`
- create **.env** file:

```
MONGO_ATLAS_CLUSTER_URL = cluster0.EXAMPLE.mongodb.net
MONGO_USER = nnn
MONGO_PASSWORD = nnn
MONGO_DATABASE = nnn
MONGO_COLLECTION = nnn
```

## execute

- `node index_mongo.js`
- `node index_mongoose.js`
- (coming soon...) npm run todos add "go to store"

## set up a MongoDB user that only has read/write access to a specific database and collection

Note that you have to create both a (1) **Custom Role** and (2) **Specific Privileges**:

![grafik](https://github.com/edwardtanguay/starter-mongo-mongoose-atlas/assets/446574/4926f497-96eb-4d12-a5fd-dd45c855785f)
