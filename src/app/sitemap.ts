import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: "https://1on1.vercel.app",
            lastModified: "2025-08-31",
            changeFrequency: "yearly",
            priority: 1,
        },

        {
            url: "https://1on1.vercel.app/virtues",
            lastModified: "2025-08-31",
            changeFrequency: "monthly",
            priority: .8,
        },
        {
            url: "https://1on1.vercel.app/confess",
            lastModified: "2025-08-31",
            changeFrequency: "monthly",
            priority: .8,
        },

        {
            url: "https://1on1.vercel.app/envy",
            lastModified: "2025-08-31",
            changeFrequency: "weekly",
            priority: .5,
        },
        
        {
            url: "https://1on1.vercel.app/gluttony",
            lastModified: "2025-08-31",
            changeFrequency: "weekly",
            priority: .5,
        },
        
        {
            url: "https://1on1.vercel.app/greed",
            lastModified: "2025-08-31",
            changeFrequency: "weekly",
            priority: .5,
        },
        
        {
            url: "https://1on1.vercel.app/lust",
            lastModified: "2025-08-31",
            changeFrequency: "weekly",
            priority: .5,
        },
        
        {
            url: "https://1on1.vercel.app/pride",
            lastModified: "2025-08-31",
            changeFrequency: "weekly",
            priority: .5,
        },
        
        {
            url: "https://1on1.vercel.app/sloth",
            lastModified: "2025-08-31",
            changeFrequency: "weekly",
            priority: .5,
        },
        
        {
            url: "https://1on1.vercel.app/wrath",
            lastModified: "2025-08-31",
            changeFrequency: "weekly",
            priority: .5,
        },
    ]
}