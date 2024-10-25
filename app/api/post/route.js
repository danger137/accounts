import { v4 as uuidv4 } from 'uuid'; // Import the uuidv4 function

const gistId = "1fe378fdf0fe84766a410699ac5988c9"; // Use the actual Gist ID (not the full URL)
const githubToken = process.env.GITHUB_TOKEN; // Use the GitHub token from the environment variable

async function getPosts() {
  const response = await fetch(`https://api.github.com/gists/${gistId}`, {
    headers: {
      Authorization: `Bearer ${githubToken}`,
    },
  });

  if (!response.ok) {
    throw new Error('Failed to fetch posts from Gist');
  }

  const gist = await response.json();
  
  // Ensure 'posts.json' exists in the gist files
  if (!gist.files['posts.json']) {
    return []; // Return an empty array if no posts file exists
  }

  const posts = JSON.parse(gist.files['posts.json'].content);
  return posts;
}

async function savePosts(posts) {
  const updatedContent = JSON.stringify(posts, null, 2); // Pretty print JSON
  const response = await fetch(`https://api.github.com/gists/${gistId}`, {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${githubToken}`,
    },
    body: JSON.stringify({
      files: {
        'posts.json': {
          content: updatedContent,
        },
      },
    }),
  });

  if (!response.ok) {
    throw new Error('Failed to save posts to Gist');
  }
}

// Handle GET requests
export async function GET() {
  try {
    const posts = await getPosts();
    return new Response(JSON.stringify(posts), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
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

  const buffer = Buffer.from(await file.arrayBuffer());
  const base64Image = buffer.toString('base64');
  const base64DataUrl = `data:${file.type};base64,${base64Image}`;

  const newPost = {
    id: uuidv4(), // Generate a unique ID for the post
    title,
    content,
    picture: base64DataUrl,
    date: new Date().toISOString(),
  };

  try {
    const posts = await getPosts();
    posts.push(newPost);
    await savePosts(posts);

    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(error.message, { status: 500 });
  }
}
