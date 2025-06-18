import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

async function main() {
  // Ejemplo: Crear planes iniciales
    await prisma.plan.createMany({
        data: [
        { name: 'Basic', price: 9.99, resolution: 'HD' },
        { name: 'Premium', price: 15.99, resolution: '4K' },
        ],
    });

    // Ejemplo: Crear un usuario admin
    await prisma.user.create({
        data: {
        email: 'admin@netflixclone.com',
        password: '$2b$10$EjemploDeHash', // Hashear con bcrypt antes
        name: 'Admin',
        plan: { connect: { name: 'Premium' } }, // Asignar plan
        },
    });
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
