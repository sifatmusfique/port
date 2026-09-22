import React from 'react';
import { projects } from '@/data/projects';
import Link from 'next/link';
import ProjectDetailInteractive from '@/components/ProjectDetailInteractive';

export function generateStaticParams() {
    return projects.map((project) => ({
        id: project.id,
    }));
}

export async function generateMetadata({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return {
            title: 'Project Not Found',
        };
    }

    return {
        title: `${project.title} | Sifat Musfique`,
        description: project.description,
        alternates: {
            canonical: `https://sifatmusfique.dev/project/${id}`,
        },
        openGraph: {
            title: `${project.title} - Sifat Musfique`,
            description: project.description,
            images: [project.image],
        },
    };
}

export default async function ProjectDetails({ params }) {
    const { id } = await params;
    const project = projects.find((p) => p.id === id);

    if (!project) {
        return (
            <div className="min-h-screen flex flex-col items-center justify-center text-center p-6">
                <h1 className="text-3xl font-bold text-gray-200 mb-4">Project Not Found</h1>
                <Link href="/#portfolio" className="px-6 py-2.5 bg-cyan-500 rounded-full text-white hover:bg-cyan-600 transition-colors font-medium">
                    Return to Projects
                </Link>
            </div>
        );
    }

    return (
        <>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{
                    __html: JSON.stringify({
                        "@context": "https://schema.org",
                        "@graph": [
                            {
                                "@type": "SoftwareApplication",
                                "name": project.title,
                                "description": project.description,
                                "applicationCategory": "DeveloperApplication",
                                "operatingSystem": "Any",
                                "author": {
                                    "@type": "Person",
                                    "name": "Sifat Musfique",
                                    "url": "https://sifatmusfique.dev"
                                },
                                "image": project.image,
                                "sameAs": [project.links.live, project.links.github]
                            },
                            {
                                "@type": "BreadcrumbList",
                                "itemListElement": [
                                    {
                                        "@type": "ListItem",
                                        "position": 1,
                                        "name": "Home",
                                        "item": "https://sifatmusfique.dev"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 2,
                                        "name": "Projects",
                                        "item": "https://sifatmusfique.dev/#portfolio"
                                    },
                                    {
                                        "@type": "ListItem",
                                        "position": 3,
                                        "name": project.title,
                                        "item": `https://sifatmusfique.dev/project/${project.id}`
                                    }
                                ]
                            }
                        ]
                    })
                }}
            />
            <ProjectDetailInteractive project={project} />
        </>
    );
}
