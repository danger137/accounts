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

  // Check the file type
  if (!file.type.startsWith('image/')) {
    console.error('Uploaded file is not an image'); // Log the error
    return new Response('Uploaded file is not an image', { status: 400 });
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

    // Store the new post in memory (or in a database for production)
    posts.push(newPost);
    
    // If you switch to using files, uncomment the line below
    // await writePostsToFile(posts); 

    // Respond with the newly created post
    return new Response(JSON.stringify(newPost), {
      status: 201,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    console.error('Error processing file: ', error); // Log errors related to file processing
    return new Response('Error processing file', { status: 500 });
  }
}
