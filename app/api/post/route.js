import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'data', 'posts.json');

// Function to ensure the directory exists
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Function to read posts from the JSON file
const readPostsFromFile = () => {
  if (!fs.existsSync(postsFilePath)) {
    return []; // Return an empty array if the file does not exist
  }
  const data = fs.readFileSync(postsFilePath, 'utf-8');
  return JSON.parse(data);
};

// Function to write posts to the JSON file
const writePostsToFile = (posts) => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
};

// Ensure the data directory exists
ensureDirectoryExists(path.join(process.cwd(), 'data'));

// Initialize posts by reading from the file
let posts = readPostsFromFile();

// Handle GET requests
export async function GET() {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle POST requests
export async function POST(req) {
  const form = new IncomingForm();

  // Convert the request to a Node.js request object
  const data = await req.formData(); // Get form data as a FormData object
  const file = data.get('picture'); // Retrieve the uploaded file
  const title = data.get('title');
  const content = data.get('content');

  // Create a unique filename and move the uploaded file
  const picturePath = path.join(process.cwd(), 'public', 'uploads', file.name);
  const buffer = await file.arrayBuffer(); // Get file buffer
  fs.writeFileSync(picturePath, Buffer.from(buffer)); // Save the file

  // Get the current date
  const date = new Date().toISOString(); // Format date as ISO string

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    picture: `/uploads/${file.name}`,
    date, // Include date in the new post
  };

  posts.push(newPost);
  
  // Write the updated posts to the file
  writePostsToFile(posts);

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Configure formidable to handle file uploads
export const config = {
  api: {
    bodyParser: false,
  },
};
