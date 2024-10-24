import { IncomingForm } from 'formidable';
import fs from 'fs';
import path from 'path';

const postsFilePath = path.join(process.cwd(), 'data', 'posts.json');

// Ensure directory exists
const ensureDirectoryExists = (dir) => {
  if (!fs.existsSync(dir)) {
    fs.mkdirSync(dir, { recursive: true });
  }
};

// Read posts from JSON file
const readPostsFromFile = () => {
  if (!fs.existsSync(postsFilePath)) {
    return []; // Return empty if file doesn't exist
  }
  const data = fs.readFileSync(postsFilePath, 'utf-8');
  return JSON.parse(data);
};

// Write posts to JSON file
const writePostsToFile = (posts) => {
  fs.writeFileSync(postsFilePath, JSON.stringify(posts, null, 2), 'utf-8');
};

// Ensure data directory exists
ensureDirectoryExists(path.join(process.cwd(), 'data'));

// Handle GET requests
export async function GET() {
  const posts = readPostsFromFile();
  return new Response(JSON.stringify(posts), {
    status: 200,
    headers: { 'Content-Type': 'application/json' },
  });
}

// Handle POST requests
export async function POST(req) {
  return new Promise((resolve, reject) => {
    const form = new IncomingForm();
    form.parse(req, async (err, fields, files) => {
      if (err) {
        return reject(new Response('Error parsing form data', { status: 500 }));
      }

      const { title, content } = fields;
      const file = files.picture; // Get the uploaded file

      if (!file) {
        return reject(new Response('No file uploaded', { status: 400 }));
      }

      // Create uploads directory if it doesn't exist
      const uploadsDir = path.join(process.cwd(), 'public', 'uploads');
      ensureDirectoryExists(uploadsDir);

      // Move uploaded file
      const picturePath = path.join(uploadsDir, file.name);
      fs.renameSync(file.filepath, picturePath); // Move the file to the uploads directory

      // Get the current date
      const date = new Date().toISOString();
      const posts = readPostsFromFile(); // Read current posts
      const newPost = {
        id: posts.length + 1,
        title,
        content,
        picture: `/uploads/${file.name}`,
        date,
      };

      posts.push(newPost); // Add new post
      writePostsToFile(posts); // Write updated posts to file

      resolve(new Response(JSON.stringify(newPost), {
        status: 201,
        headers: { 'Content-Type': 'application/json' },
      }));
    });
  });
}

// Set runtime to Node.js to allow use of 'fs' and 'path'
export const runtime = 'nodejs';
