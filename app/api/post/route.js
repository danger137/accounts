import { NextResponse } from "next/server";
import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import fs from "fs";
import path from "path";

// Configure AWS S3
const s3Client = new S3Client({
  region: "eu-north-1",
  credentials: {
    accessKeyId: "AKIA34AMDB5YY6SDUNAW", // Use environment variable
    secretAccessKey: "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", // Use environment variable
  },
});

// Define the file path for the JSON file
const filePath = path.join(process.cwd(), "public/uploads/post.json");

export async function GET(req) {
  try {
    // Read the JSON file
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = fileContent ? JSON.parse(fileContent) : [];

    return NextResponse.json({
      success: true,
      users: users,
    });
  } catch (error) {
    console.error("Failed to read JSON file:", error);
    return NextResponse.json(
      { success: false, error: "Failed to read data" },
      { status: 500 }
    );
  }
}

export async function POST(req) {
  try {
    const data = await req.formData();
    const file = data.get("picture");

    if (!file) {
      return NextResponse.json({ success: false, error: "No file uploaded" }, { status: 400 });
    }

    // Convert the uploaded file to a buffer
    const buffer = Buffer.from(await file.arrayBuffer());

    // Set up the S3 upload parameters
    const params = {
      Bucket: "myadminbucket927", // Your bucket name
      Key: file.name, // The name of the file to be saved in S3
      Body: buffer, // Use the buffer instead of the stream
      ContentType: file.type, // The file MIME type
    };

    // Upload the file to S3 using the v3 method
    await s3Client.send(new PutObjectCommand(params));

    // Create the new ad data
    const newAd = {
      title: data.get("title"),
      content: data.get("content"),
      date: data.get("date"),
      price: data.get("price"),
      owner: data.get("owner"),
      picture: `https://${params.Bucket}.s3.amazonaws.com/${file.name}`, // URL to access the file
    };


    console.log(newAd);
    
    // Read the current data from the JSON file
    let currentData = [];
    if (fs.existsSync(filePath)) {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      currentData = fileContent ? JSON.parse(fileContent) : [];
    }

    // Append the new ad data to the current data
    currentData.push(newAd);

    // Save the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(currentData, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to handle POST request:", error);
    return NextResponse.json({ success: false, error: "Failed to create ad" }, { status: 500 });
  }
}
