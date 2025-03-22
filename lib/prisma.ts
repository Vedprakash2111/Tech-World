import { PrismaClient } from '@prisma/client'

const globalForPrisma = globalThis as unknown as {
  prisma: PrismaClient | undefined
}

export const prisma = globalForPrisma.prisma ?? 
  new PrismaClient({
    log: ['query', 'error', 'warn'],
    datasources: {
      db: {
        url: process.env.DATABASE_URL
      },
    },
  })

if (process.env.NODE_ENV !== 'production') {
  globalForPrisma.prisma = prisma;
}

// Ensure the Prisma Client can connect to the database
async function connectPrisma() {
  try {
    await prisma.$connect();
    console.log('Successfully connected to database');
  } catch (error) {
    console.error('Failed to connect to database:', error);
    // Wait for 5 seconds before retrying
    await new Promise(resolve => setTimeout(resolve, 5000));
    await connectPrisma();
  }
}

connectPrisma(); 