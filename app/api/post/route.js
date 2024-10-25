import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises'; // File system library for reading/writing files
import path from 'path'; // Utility for handling file paths

const filePath = path.join(process.cwd(), 'posts.json'); // Path to the JSON file

// Helper function to read posts from the JSON file
async function readPostsFromFile() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    return JSON.parse(data); // Parse and return the JSON data
  } catch (error) {
    // If file doesn't exist or can't be read, return an empty array
    if (error.code === 'ENOENT') {
      return [];
    }
    throw error; // Throw other errors to be handled elsewhere
  }
}

// Helper function to write posts to the JSON file
async function writePostsToFile(posts) {
  await fs.writeFile(filePath, JSON.stringify(posts, null, 2), 'utf8'); // Write posts as pretty-printed JSON
}

// Handle GET requests to retrieve posts
export async function GET() {
  const posts = await readPostsFromFile(); // Read posts from the file
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' }, // Set the response type to JSON
  });
}

// Handle POST requests to create a new post
export async function POST(req) {
  console.log("Received POST request"); // Log the request start
  const data = await req.formData();
  console.log("Form Data: ", Object.fromEntries(data)); // Log the incoming form data

  const file = data.get('picture');
  const title = data.get('title');
  const content = data.get('content');

  // Check for missing fields
  if (!file || !title || !content) {
    console.error('Missing fields: ', { file, title, content }); // Log the missing fields
    return new Response('Missing fields', { status: 400 });
  }

  // Convert the uploaded file to a Base64 string
  try {
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

    // Here, you'd typically store the new post in a database

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing file: ', error); // Log errors related to file processing
    return new Response('Error processing file', { status: 500 });
  }
}


// Handle DELETE requests to delete a post by ID
export async function DELETE(req) {
  const { id } = await req.json(); // Get the post ID from the request body

  // Read the existing posts
  const posts = await readPostsFromFile();

  // Find the index of the post to delete
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return new Response('Post not found', { status: 404 });
  }

  // Remove the post from the array and write the updated list back to the file
  posts.splice(index, 1);
  await writePostsToFile(posts);

  return new Response('Post deleted', { status: 204 });
}
