import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER_URL}/?retryWrites=true&w=majority&appName=Cluster0`;
const client = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	}
});
async function run() {
	try {
		await client.connect();
		const db = client.db(process.env.MONGO_DATABASE);
		const todos = await db.collection(process.env.MONGO_COLLECTION).find().toArray();
		console.log(todos);
	} finally {
		await client.close();
	}
}
run().catch(console.dir);