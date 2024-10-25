import { v4 as uuidv4 } from 'uuid';
import { MongoClient } from 'mongodb';

// MongoDB connection URI and database configuration
const uri = "mongodb://localhost:27017";
const client = new MongoClient(uri);
const dbName = 'myDatabase';
const collectionName = 'posts';

// Helper function to connect to the MongoDB collection
async function getCollection() {
  if (!client.topology || !client.topology.isConnected()) {
    await client.connect();
  }
  const db = client.db(dbName);
  return db.collection(collectionName);
}

// Handle GET requests to retrieve posts
export async function GET() {
  const collection = await getCollection();
  const posts = await collection.find({}).toArray();
  
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle POST requests to create a new post
export async function POST(req) {
  const data = await req.formData();
  const file = data.get('picture');
  const title = data.get('title');
  const content = data.get('content');

  if (!file || !title || !content) {
    return new Response('Missing fields', { status: 400 });
  }

  // Convert the uploaded file to a Base64 string
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64Image = buffer.toString('base64');
  const base64DataUrl = `data:${file.type};base64,${base64Image}`;

  // Create a new post object
  const newPost = {
    id: uuidv4(),
    title,
    content,
    picture: base64DataUrl,
    date: new Date().toISOString(),
  };

  // Store the new post in the MongoDB collection
  const collection = await getCollection();
  await collection.insertOne(newPost);

  // Respond with the newly created post
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle DELETE requests to delete a post by ID
export async function DELETE(req) {
  const { id } = await req.json();

  // Delete the post from the MongoDB collection
  const collection = await getCollection();
  const result = await collection.deleteOne({ id });

  if (result.deletedCount === 0) {
    return new Response('Post not found', { status: 404 });
  }

  return new Response('Post deleted', { status: 204 });
}
