import React, { useEffect } from 'react';

const galleryImages1 = [
    "https://picsum.photos/seed/sup1/600/400",
    "https://picsum.photos/seed/sup2/600/400",
    "https://picsum.photos/seed/sup3/600/400",
    "https://picsum.photos/seed/sup4/600/400",
    "https://picsum.photos/seed/sup5/600/400",
    "https://picsum.photos/seed/sup6/600/400",
    "https://picsum.photos/seed/sup7/600/400",
    "https://picsum.photos/seed/sup8/600/400",
];

const galleryImages2 = [
    "https://picsum.photos/seed/fare1/600/400",
    "https://picsum.photos/seed/fare2/600/400",
    "https://picsum.photos/seed/fare3/600/400",
    "https://picsum.photos/seed/fare4/600/400",
    "https://picsum.photos/seed/fare5/600/400",
    "https://picsum.photos/seed/fare6/600/400",
    "https://picsum.photos/seed/fare7/600/400",
    "https://picsum.photos/seed/fare8/600/400",
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
                        Our <span className="text-gradient">Gallery</span>
                    </h1>
                    <p className="text-lg text-slate-500 dark:text-slate-400 max-w-2xl mx-auto">
                        Capturing unforgettable moments with no boundaries.
                    </p>
                </div>

                {/* Superior University Section */}
                <div className="mb-24 w-full relative">
                    <h2 className="text-4xl md:text-5xl font-bold ml-6 lg:ml-12 mb-8 text-slate-800 dark:text-slate-200">
                        Superior University
                    </h2>

                    <div className="gallery-marquee-container w-full">
                        <div className="gallery-marquee-track">
                            {/* Duplicate images to make it loop seamlessly */}
                            {[...galleryImages1, ...galleryImages1].map((src, index) => (
                                <div key={index} className="gallery-image-wrapper group h-[160px] sm:h-[220px]">
                                    <img
                                        src={src}
                                        alt={`Superior University ${index}`}
                                        className="h-full w-auto object-cover"
                                        style={{ minWidth: '220px' }}
                                    />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Farewell Section */}
                <div className="mb-20 w-full relative">
                    <h2 className="text-4xl md:text-5xl font-bold ml-6 lg:ml-12 mb-8 text-slate-800 dark:text-slate-200">
                        Farewell
                    </h2>

                    {/* Reverse animation direction */}
                    <div className="gallery-marquee-container w-full">
                        <div className="gallery-marquee-track" style={{ animationDirection: 'reverse', animationDuration: '40s' }}>
                            {[...galleryImages2, ...galleryImages2].map((src, index) => (
                                <div key={index} className="gallery-image-wrapper group h-[160px] sm:h-[220px]">
                                    <img
                                        src={src}
                                        alt={`Farewell ${index}`}
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
