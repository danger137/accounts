import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

const DATA_FILE = path.resolve('posts.json');

// Helper function to read posts from the file
async function readPosts() {
  try {
    const data = await fs.readFile(DATA_FILE, 'utf-8');
    return JSON.parse(data);
  } catch (error) {
    // If the file doesn't exist or can't be read, return an empty array
    return [];
  }
}

// Helper function to write posts to the file
async function writePosts(posts) {
  try {
    await fs.writeFile(DATA_FILE, JSON.stringify(posts, null, 2), 'utf-8');
  } catch (error) {
    console.error('Error writing to file:', error);
  }
}

// Handle GET requests to retrieve posts
export async function GET() {
  const posts = await readPosts();
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

  // Read existing posts, add the new post, and write the updated list
  const posts = await readPosts();
  posts.push(newPost);
  await writePosts(posts);

  // Respond with the newly created post
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle DELETE requests to delete a post by ID
export async function DELETE(req) {
  const { id } = await req.json();

  // Read existing posts
  const posts = await readPosts();

  // Find the index of the post to delete
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return new Response('Post not found', { status: 404 });
  }

  // Remove the post from the array and write the updated list to the file
  posts.splice(index, 1);
  await writePosts(posts);

  return new Response('Post deleted', { status: 204 });
}
