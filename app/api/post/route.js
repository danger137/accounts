import fs from 'fs/promises';
import path from 'path';
import { v4 as uuidv4 } from 'uuid';

// Use `/tmp/posts.json` as the writable file path
const filePath = '/tmp/posts.json';

// In-memory cache to hold posts
let posts = [];

// Load posts from the file if available
async function loadPosts() {
  try {
    const data = await fs.readFile(filePath, 'utf8');
    if (data.trim()) {
      posts = JSON.parse(data);
    } else {
      posts = [];
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      // If the file doesn't exist, initialize an empty array
      posts = [];
    } else {
      console.error('Error loading posts:', error);
    }
  }
}

// Save posts to the file
async function savePosts() {
  try {
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2), 'utf8');
  } catch (error) {
    console.error('Error saving posts:', error);
  }
}

// Initialize posts when the server starts
await loadPosts();

// Define API routes
export async function GET() {
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function POST(req) {
  const data = await req.formData();
  const file = data.get('picture');
  const title = data.get('title');
  const content = data.get('content');

  if (!file || !title || !content) {
    return new Response('Missing fields', { status: 400 });
  }

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64Image = buffer.toString('base64');
  const base64DataUrl = `data:${file.type};base64,${base64Image}`;

  const newPost = {
    id: uuidv4(),
    title,
    content,
    picture: base64DataUrl,
    date: new Date().toISOString(),
  };

  posts.push(newPost);
  await savePosts();

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(req) {
  const { id } = await req.json();
  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return new Response('Post not found', { status: 404 });
  }

  posts.splice(index, 1);
  await savePosts();

  return new Response('Post deleted', { status: 204 });
}
