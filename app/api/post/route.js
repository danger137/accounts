import { v4 as uuidv4 } from 'uuid';
import fs from 'fs/promises';
import path from 'path';

const filePath = path.join(process.cwd(), 'posts.json');

async function loadPosts() {
  let posts = [];
  try {
    const data = await fs.readFile(filePath, 'utf8');
    if (data.trim()) {
      try {
        posts = JSON.parse(data);
      } catch (jsonError) {
        console.error('Error parsing JSON data:', jsonError);
        posts = []; // Reset to an empty array if JSON is invalid
      }
    }
  } catch (error) {
    if (error.code === 'ENOENT') {
      console.warn('posts.json not found, initializing empty list.');
      posts = [];
    } else {
      console.error('Error loading posts:', error);
      throw error;
    }
  }
  return posts;
}

async function writePosts(posts) {
  try {
    await fs.writeFile(filePath, JSON.stringify(posts, null, 2), 'utf8');
  } catch (writeError) {
    console.error('Error writing posts:', writeError);
    throw writeError;
  }
}

export async function GET() {
  const posts = await loadPosts();
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

  const posts = await loadPosts();
  posts.push(newPost);
  await writePosts(posts);

  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}

export async function DELETE(req) {
  const { id } = await req.json();
  const posts = await loadPosts();

  const index = posts.findIndex((post) => post.id === id);
  if (index === -1) {
    return new Response('Post not found', { status: 404 });
  }

  posts.splice(index, 1);
  await writePosts(posts);

  return new Response('Post deleted', { status: 204 });
}
