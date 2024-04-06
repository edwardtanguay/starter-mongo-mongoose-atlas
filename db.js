import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config();

const uri = `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@${process.env.MONGO_ATLAS_CLUSTER_URL}/${process.env.MONGO_DATABASE}?retryWrites=true&w=majority&appName=Cluster0`;
const clientOptions = { serverApi: { version: '1', strict: true, deprecationErrors: true } };

export const getAllTodos = async () => {
	return new Promise = ((resolve, reject) => {
		try {
			(async () => {
				await mongoose.connect(uri, clientOptions);
				const response = mongoose.connection.db.collection(process.env.MONGO_COLLECTION);
				const todos = await response.find().toArray();
				resolve(todos);
			})();
		}
		catch (error) {
			reject({ message: `ERROR: ${error.message}` });
		} finally {
			(async () => {
				await mongoose.disconnect();
			})();
		}
	});
};