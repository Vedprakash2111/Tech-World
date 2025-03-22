import { NextResponse } from "next/server";
import bcryptjs from "bcryptjs";
import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const { name, email, password } = await req.json();

    if (!name || !email || !password) {
      return new NextResponse('Missing required fields', { status: 400 });
    }

    // Check if user already exists
    console.log('Attempting to check for existing user...');
    const existingUser = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });

    if (existingUser) {
      return new NextResponse('User already exists', { status: 409 });
    }

    // Hash password
    const hashedPassword = await bcryptjs.hash(password, 12);

    // Create user
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
      },
    });

    return NextResponse.json({
      user: {
        name: user.name,
        email: user.email,
      },
    });
  } catch (error: any) {
    console.error('Registration error details:', error);
    
    // Check for specific error types
    if (error.code === 'P2002') {
      return new NextResponse('User already exists', { status: 409 });
    }
    
    if (error.code === 'P2010' || error.message.includes('connection')) {
      return new NextResponse('Database connection error. Please try again later.', { status: 503 });
    }

    return new NextResponse('Internal server error', { status: 500 });
  }
} 