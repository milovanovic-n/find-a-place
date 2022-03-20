import { hashPassword } from "../../../utils/verifyPassword";
import dbConnect from "../../../utils/dbConnect";
import { hash } from "bcryptjs";

async function handler(req, res) {
  if(req.method !== "POST") {
    return
  }

  const data = req.body;
  const { fullName, email, password } = data;

  if(
    !fullName ||
    !email ||
    !email.includes('@') ||
    !password ||
    password.trim().length < 7
  ) {
    res.status(422).json({
      message: "Invalid input - password should also be at least 7 characters long"
    })
    return;
  }

  const { db } = dbConnect();

  const existingUser = await db.collection("users").findOne({email: email});

  if(existingUser) {
    res.status(422).json({success: false, message: "User already exists!"});
    db.close();
    return
  }

  const hashedPassword = await hashPassword(password);

  await db.collection("users").insertOne({
    fullName,
    email,
    password: hashedPassword
  });

  res.status(201).json({success: true, message: "Successfully created user!"});

  db.close();
}

export default handler;