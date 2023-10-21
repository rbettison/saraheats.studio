import Link from "next/link";

export default function Services() {
    return (
        <div className="container mt-8">
            <div className="w-1/2 m-auto flex flex-col">
                <div>
                    <div>Creative Direction</div>
                    <div>Creative direction is the cornerstone of any visual project&apos;s success. With my unique blend of artistic vision, strategic thinking, and a deep understanding of market trends, I craft captivating visual narratives. Whether you seek brand identity guidance or content creation, I&apos;m here to help you reach your goals.</div>
                    <div><Link href="/projects">Projects</Link></div>
                </div>
                <div>
                    <div>Creative Direction</div>
                    <div>Creative direction is the cornerstone of any visual project&apos;s success. With my unique blend of artistic vision, strategic thinking, and a deep understanding of market trends, I craft captivating visual narratives. Whether you seek brand identity guidance or content creation, I&apos;m here to help you reach your goals.</div>
                    <div><Link href="/projects">Projects</Link></div>
                </div>
                <div>
                    <div>Photography</div>
                    <div>Capturing moments and concepts with an artistic and professional touch, encompassing advertising campaigns, portrait photography, product photography and more. I also dedicate my time to photographic projects where I aim to capture the serene beauty of the beach and the unique character of my island, Malta. Through these projects, I strive to delve into the depths of individual stories and expressions through artistic portrait shots.</div>
                    <div><Link href="/portfolio">Portfolio</Link></div>
                </div>
            </div>

        </div>
    )
}