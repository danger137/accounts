import fs from 'fs';
import path from 'path';

// Define the path for posts.json
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

// Handle GET requests
export async function GET() {
  const posts = readPostsFromFile(); // Initialize posts from file
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle POST requests
export async function POST(req) {
  // Check if the request has a valid content type
  if (!req.body) {
    return new Response('No data provided', { status: 400 });
  }

  const posts = readPostsFromFile(); // Initialize posts from file

  // Use formData to get the data from the request
  const data = await req.formData();
  const file = data.get('picture');
  const title = data.get('title');
  const content = data.get('content');

  if (!file || !title || !content) {
    return new Response('Missing fields', { status: 400 });
  }

  // Create a unique filename and save the uploaded file
  const picturePath = path.join(process.cwd(), 'public', 'uploads', file.name);
  const buffer = Buffer.from(await file.arrayBuffer());
  fs.writeFileSync(picturePath, buffer);

  // Get the current date
  const date = new Date().toISOString();

  const newPost = {
    id: posts.length + 1,
    title,
    content,
    picture: `/uploads/${file.name}`,
    date,
  };

  posts.push(newPost);

  // Write the updated posts to the file
  writePostsToFile(posts);

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
