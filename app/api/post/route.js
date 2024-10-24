import { v4 as uuidv4 } from 'uuid'; // Import UUID library for generating unique IDs

let posts = []; // In-memory array to store posts

// Handle GET requests
export async function GET() {
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

  // Add the new post to the in-memory array
  posts.push(newPost);

  // Respond with the newly created post
  return new Response(JSON.stringify(newPost), {
    status: 201,
    headers: { 'Content-Type': 'application/json' },
  });
}
