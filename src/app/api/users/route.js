import connectToDatabase from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcrypt";

await connectToDatabase();

export async function POST(req) {
  const { username, email, password, role } = await req.json();
  const hashedPassword = await bcrypt.hash(password, 10);
  const user = new User({ username, email, password: hashedPassword, role });
  await user.save();
  return new Response(JSON.stringify(user), { status: 201 });
}

export async function GET(req) {
  const users = await User.find({});
  return new Response(JSON.stringify(users), { status: 200 });
}
