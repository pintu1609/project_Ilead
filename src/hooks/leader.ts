// hooks/useBlogsByType.js
import { useState, useEffect } from 'react';
import client  from '../../sanityClient'; // Update the path as per your project structure


interface leadersItem {
    name: string;
    role: string;
    id: string;
    alt: string;
    image: string;
    slug: string;
}
export default function useBlogsByType(selectedType: string) {
    console.log("🚀 ~ useBlogsByType ~ selectedType:", selectedType)
    const [data, setData] = useState(<leadersItem[]>[]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!selectedType) return;

        async function fetchBlogs() {
            setLoading(true);
            setError(null);
            try {
                const query = `
                    *[_type == "leader" && type == "${selectedType}"] | order(id asc) {
                        name,
                        role,
                        id,
                        alt,
                        "image": image.asset->url,
                        "slug": slug.current
                    }
                `;
                const datas = await client.fetch(query);
                setData(datas);
            } catch (err) {
                console.error("Error fetching blogs:", err);
                // setError(err.message || "Failed to fetch leadersdata.");
            } finally {
                setLoading(false);
            }
        }

        fetchBlogs();
    }, [selectedType]);

    return { data, loading, error };
}
