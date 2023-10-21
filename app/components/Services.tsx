import Link from "next/link";

export default function Services() {
    return (
        <div className="container">
            <div className="w-4/5 m-auto flex flex-col">



                <div className="pb-12 border-b border-white border-box mt-16">
                    <div className="flex flex-row gap-x-8">
                        <div className="mt-2">
                            01
                        </div>
                        <div>
                        <div className="text-4xl font-bold mb-8">Creative Direction</div>
                        <div className="w-4/5 mb-8">Creative direction is the cornerstone of any visual project&apos;s success. With my unique blend of artistic vision, strategic thinking, and a deep understanding of market trends, I craft captivating visual narratives. Whether you seek brand identity guidance or content creation, I&apos;m here to help you reach your goals.</div>
                        <div className="flex flex-row gap-x-4">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                            </svg>
                            <Link href="/projects">Projects</Link></div>
                        </div>
                    </div>
                </div>



                <div className="pb-12 border-b border-white border-box mt-16">
                    <div className="flex flex-row gap-x-8">
                        <div className="mt-2">
                            02
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-8">Brand & Editorial</div>
                            <div className="w-4/5 mb-8">A strong brand identity is crucial for making a lasting impression. I offer brand design services that encompass logo design, visual style guides, and various marketing collateral. Your brand&apos;s story and values will be woven into every design element, ensuring consistency and a memorable brand experience.</div>
                            <div className="flex flex-row gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                                <Link href="/projects">Projects</Link>
                            </div>
                        </div>
                    </div>
                </div>



                <div className="pb-12 border-box mt-16">
                    <div className="flex flex-row gap-x-8">
                        <div className="mt-2">
                            03
                        </div>
                        <div>
                            <div className="text-4xl font-bold mb-8">Photography</div>
                            <div className="w-4/5 mb-8">Capturing moments and concepts with an artistic and professional touch, encompassing advertising campaigns, portrait photography, product photography and more. I also dedicate my time to photographic projects where I aim to capture the serene beauty of the beach and the unique character of my island, Malta. Through these projects, I strive to delve into the depths of individual stories and expressions through artistic portrait shots.</div>
                            <div className="flex flex-row gap-x-4">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="white" className="w-6 h-6">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                </svg>
                                <Link href="/portfolio">Portfolio</Link>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    )
}