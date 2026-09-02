import React from 'react';

const AmbientBackground = () => {
    return (
        <>
            <div className="glow-blob bg-primary w-96 h-96 top-[-10%] left-[-10%]"></div>
            <div className="glow-blob bg-secondary w-[30rem] h-[30rem] top-[40%] right-[-10%]"></div>
            <div className="glow-blob bg-primary w-96 h-96 bottom-[-10%] left-[20%]"></div>
        </>
    );
};

export default AmbientBackground;
