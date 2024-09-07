import { notFound } from "next/navigation";

export default async function SingleCaseStudyPage ({ params: { slug } }) {

    if (slug === 'tag') notFound();

    return (
        <h1>{slug}</h1>
    )
}