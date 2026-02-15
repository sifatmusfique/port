import { projects } from '@/data/projects';

export default function sitemap() {
    const baseUrl = 'https://sifatmusfique.dev';

    // Get all project routes
    const projectRoutes = projects.map((project) => ({
        url: `${baseUrl}/project/${project.id}`,
        lastModified: new Date(),
        changeFrequency: 'monthly',
        priority: 0.8,
    }));

    // Define static routes
    const routes = [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
            images: [
                'https://sifatmusfique.dev/photos/Sifat_Musfique.png',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_chess.png',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_election.jpg',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_hoodie.jpg',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_live.jpg',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_night.jpg',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_pic.jpg',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_punjabi.jpg',
                'https://sifatmusfique.dev/photos/Sifat_Musfique_stand.jpg',
            ],
        },
        {
            url: `${baseUrl}/about`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/portfolio`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        {
            url: `${baseUrl}/contact`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5,
        },
    ];

    return [...routes, ...projectRoutes];
}
