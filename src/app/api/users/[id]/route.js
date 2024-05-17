import connectToDatabase from "@/app/lib/mongodb";
import User from "@/app/models/User";
import bcrypt from "bcrypt";

await connectToDatabase();

export async function GET(req, { params }) {
  const { id } = params;

  try {
    const user = await User.findById(id);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid User ID" }), {
      status: 400,
    });
  }
}

export async function PUT(req, { params }) {
  const { id } = params;
  const { username, email, password, role } = await req.json();
  const updateUser = {};

  if (username) updateUser.username = username;
  if (email) updateUser.email = email;
  if (password) updateUser.password = await bcrypt.hash(password, 10);
  if (role) updateUser.role = role;

  try {
    const user = await User.findByIdAndUpdate(id, updateUser, { new: true });
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    return new Response(JSON.stringify(user), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid User ID" }), {
      status: 400,
    });
  }
}

export async function DELETE(req, { params }) {
  const { id } = params;

  try {
    const user = await User.findByIdAndDelete(id);
    if (!user) {
      return new Response(JSON.stringify({ error: "User not found" }), {
        status: 404,
      });
    }
    return new Response(null, { status: 204 });
  } catch (error) {
    return new Response(JSON.stringify({ error: "Invalid User ID" }), {
      status: 400,
    });
  }
}
