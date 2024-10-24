import { v4 as uuidv4 } from 'uuid'; // Import UUID library for generating unique IDs
import { promises as fs } from 'fs'; // Import fs module for file operations
import path from 'path';

const dataFilePath = path.join(process.cwd(), 'posts.json'); // Define the path for the JSON file

// Function to load posts from the JSON file
async function loadPosts() {
  try {
    const data = await fs.readFile(dataFilePath, 'utf8');
    return JSON.parse(data); // Parse and return the posts
  } catch (error) {
    // If the file doesn't exist or is unreadable, return an empty array
    return [];
  }
}

// Function to save posts to the JSON file
async function savePosts(posts) {
  await fs.writeFile(dataFilePath, JSON.stringify(posts, null, 2)); // Write posts to JSON file
}

// Handle GET requests
export async function GET() {
  const posts = await loadPosts(); // Load posts from the file
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle POST requests
export async function POST(req) {
  const data = await req.formData();
  const file = data.get('picture');
  const title = data.get('title');
  const content = data.get('content');

  if (!file || !title || !content) {
    return new Response('Missing fields', { status: 400 });
  }

  // Convert the uploaded file to a Base64 string using Buffer
  const buffer = Buffer.from(await file.arrayBuffer());
  const base64Image = buffer.toString('base64');
  const base64DataUrl = `data:${file.type};base64,${base64Image}`;

  // Create a new post object
  const newPost = {
    id: uuidv4(), // Use UUID for unique ID
    title,
    content,
    picture: base64DataUrl, // Store image as a Base64 data URL
    date: new Date().toISOString(),
  };

  // Load existing posts, add the new post, and save them back to the file
  const posts = await loadPosts();
  posts.push(newPost);
  await savePosts(posts);

  // Respond with the newly created post
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
