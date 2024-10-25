import { NextResponse } from "next/server";
import { promisify } from "util";
import fs from "fs";
import path from "path";
import { pipeline } from "stream";

const pump = promisify(pipeline);
const filePath = path.join(process.cwd(), "public/uploads/post.json");

export async function GET(req) {
  // Handle the GET request
  try {
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const users = JSON.parse(fileContent);

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
  // Handle the POST request
  try {
    let data = await req.formData();
    let file = data.get("picture");

    // Create file path for the uploaded image
    let filePathImage = path.join(process.cwd(), "public/uploads/", file.name);

    // Save the uploaded file
    await pump(file.stream(), fs.createWriteStream(filePathImage));

    // Create new ad data
    let newAd = {
      title: data.get("title"),
      content: data.get("content"),
      date: data.get("date"),
      price: data.get("price"),
      owner: data.get("owner"),
      picture: "/uploads/" + file.name,
    };

    // Read existing data from JSON file
    let existingData = [];
    try {
      const fileContent = fs.readFileSync(filePath, "utf-8");
      existingData = JSON.parse(fileContent);
    } catch (error) {
      console.warn("JSON file does not exist or is empty. Starting with an empty array.");
    }

    // Add new ad to the existing data
    existingData.push(newAd);

    // Write the updated data back to the JSON file
    fs.writeFileSync(filePath, JSON.stringify(existingData, null, 2), "utf-8");

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Failed to handle POST request:", error);
    return NextResponse.json({ success: false, error: "Failed to create ad" }, { status: 500 });
  }
}
