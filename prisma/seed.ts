import { PrismaClient } from '@prisma/client';
import * as bcrypt from 'bcrypt'; 
import * as dotenv from 'dotenv'; 


dotenv.config(); //cargando pass de admin de ,mi .env
const prisma = new PrismaClient();

async function main() {
    const saltRounds = 10;
    const adminPlainPassword = process.env.ADMIN_SEED_PASSWORD; 
    if (!adminPlainPassword) {
        throw new Error('ADMIN_SEED_PASSWORD no está definida en el archivo .env');
        }
        const hashedPassword = await bcrypt.hash(adminPlainPassword, saltRounds);

        console.log('DEBUG_SEEDER: Contraseña plana del .env:', adminPlainPassword);
        console.log('DEBUG_SEEDER: Contraseña hasheada generada:', hashedPassword);

    await prisma.plan.createMany({
    data: [
        {
        name: 'Basic',
        price: 9.99,
        type: 'BASIC',
        maxScreens: 1,
        maxProfiles: 1,
        maxVideoQuality: 'SD',
        allowDownloads: false,
        hasAds: true,
        isActive: true,
        resolution: 'SD',
        description: 'Plan básico con anuncios.',
        freeTrialDays: 0,
        },
        {
        name: 'Standard',
        price: 12.99,
        type: 'STANDARD',
        maxScreens: 2,
        maxProfiles: 5,
        maxVideoQuality: 'HD',
        allowDownloads: true,
        hasAds: false,
        isActive: true,
        resolution: 'HD',
        description: 'Plan estándar sin anuncios, con descargas.',
        freeTrialDays: 7,
        },
        {
        name: 'Premium',
        price: 15.99,
        type: 'PREMIUM', //este es el plan que se coneta al adminn
        maxScreens: 4,
        maxProfiles: 10,
        maxVideoQuality: 'UHD',
        allowDownloads: true,
        hasAds: false,
        isActive: true,
        resolution: '4K',
        description: 'Plan premium con la mejor calidad.',
        freeTrialDays: 14,
        },
        ],
        skipDuplicates: true,
    });
    console.log('Seed de planes completado.');

    
    //crear usuarios y admin el usuario admin se crea DESPUÉS de que el plan 'Premium' ya existe
    await prisma.user.create({
        data: {
        email: 'dev.admin@netflixclone.com',
        password: hashedPassword,
        name: 'Admin',
        role: 'ADMIN', 
        plan: { connect: { name: 'Premium' } },
        },
    });
    console.log('Seed de usuario admin completado.');


    // AdminUser

    const adminUser = await prisma.user.findUnique({
        where: { email: 'dev.admin@netflixclone.com' },
        });
        
        if (adminUser) {
            await prisma.profile.createMany({
            data: [
                {
                name: 'Principal',
                avatarUrl: 'https://example.com/avatars/avatar1.png',
                type: 'ADULT', //valor de enum ProfileTypeEnum
                ageRestriction: 'MATURE', //valor de enum AgeRatingEnum
                preferredLanguage: 'es',
                autoPlay: true,
                hasPin: false,
                userId: adminUser.id, //conecta al usuarioadmin
                },
                {
                name: 'Niños',
                avatarUrl: 'https://example.com/avatars/avatar_kid.png',
                type: 'CHILD',
                ageRestriction: 'KIDS',
                preferredLanguage: 'es',
                autoPlay: true,
                hasPin: true,
                pin: '1111',
                userId: adminUser.id,
                },
            ],
            skipDuplicates: true,
            });
            console.log('Seed de perfiles completado.');
        } else {
            console.warn('Usuario admin no encontrado, no se pudieron crear perfiles.');
        }
        
        await prisma.movie.createMany({
        data: [
        {
            title: 'El Viaje del Héroe',
            description: 'Una épica aventura de un joven que descubre su destino.',
            releaseYear: 2023,
            genres: ['ACTION', 'DOCUMENTARY'], 
            videoMetadata: { 
            videoUrl: 'https://example.com/videos/heroe.mp4',
            trailerUrl: 'https://example.com/trailers/heroe_trailer.mp4',
            },
            coverUrl: 'https://example.com/covers/heroe.jpg',
            duration: 150,
        },
        {
            title: 'Comedia en la Ciudad',
            description: 'Un grupo de amigos se mete en situaciones hilarantes en la gran ciudad.',
            releaseYear: 2022,
            genres: ['COMEDY'],
            videoMetadata: {
            videoUrl: 'https://example.com/videos/comedia.mp4',
            trailerUrl: 'https://example.com/trailers/comedia_trailer.mp4',
            },
            coverUrl: 'https://example.com/covers/comedia.jpg',
            duration: 95,
        },
        ],
        skipDuplicates: true,
    });
    console.log('Seed de películas completado.');
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });