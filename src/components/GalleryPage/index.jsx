import React, { useEffect } from 'react';

const galleryImages1 = [
    "https://picsum.photos/seed/emb1/600/400",
    "https://picsum.photos/seed/emb2/600/400",
    "https://picsum.photos/seed/emb3/600/400",
    "https://picsum.photos/seed/emb4/600/400",
    "https://picsum.photos/seed/emb5/600/400",
    "https://picsum.photos/seed/emb6/600/400",
    "https://picsum.photos/seed/emb7/600/400",
    "https://picsum.photos/seed/emb8/600/400",
];

const galleryImages2 = [
    "https://picsum.photos/seed/floor1/600/400",
    "https://picsum.photos/seed/floor2/600/400",
    "https://picsum.photos/seed/floor3/600/400",
    "https://picsum.photos/seed/floor4/600/400",
    "https://picsum.photos/seed/floor5/600/400",
    "https://picsum.photos/seed/floor6/600/400",
    "https://picsum.photos/seed/floor7/600/400",
    "https://picsum.photos/seed/floor8/600/400",
];

const GalleryPage = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="pt-32 pb-20 min-h-screen relative z-10 overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-[100px] -z-10" />

            <div className="w-full">
                <div className="text-center mb-16 px-6" data-aos="fade-up">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-6 tracking-tight">
                        Work <span className="text-gradient">Gallery</span>
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        A look at embroidery designs, samples and the production floor.
                    </p>
                </div>

                {/* Embroidery Designs Section */}
                <div className="mb-24 w-full relative">
                    <h2 className="text-4xl md:text-5xl font-bold ml-6 lg:ml-12 mb-8 text-slate-800 dark:text-slate-200">
                        Embroidery Designs
                    </h2>

                    <div className="gallery-marquee-container w-full">
                        <div className="gallery-marquee-track">
                            {/* Duplicate images to make it loop seamlessly */}
                            {[...galleryImages1, ...galleryImages1].map((src, index) => (
                                <div key={index} className="gallery-image-wrapper group h-[160px] sm:h-[220px]">
                                    <img
                                        src={src}
                                        alt={`Embroidery Design ${index}`}
                                        className="h-full w-auto object-cover"
                                        style={{ minWidth: '220px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Production Floor Section */}
                <div className="mb-20 w-full relative">
                    <h2 className="text-4xl md:text-5xl font-bold ml-6 lg:ml-12 mb-8 text-slate-800 dark:text-slate-200">
                        Production Floor
                    </h2>

                    {/* Reverse animation direction */}
                    <div className="gallery-marquee-container w-full">
                        <div className="gallery-marquee-track" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
                            {[...galleryImages2, ...galleryImages2].map((src, index) => (
                                <div key={index} className="gallery-image-wrapper group h-[160px] sm:h-[220px]">
                                    <img
                                        src={src}
                                        alt={`Production Floor ${index}`}
                                        className="h-full w-auto object-cover"
                                        style={{ minWidth: '220px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default GalleryPage;
