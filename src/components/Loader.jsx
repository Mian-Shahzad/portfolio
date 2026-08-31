import React from 'react';

const Loader = () => {
    return (
        <div id="loader" className="fixed inset-0 z-[10000] bg-lightBg dark:bg-darkBg flex flex-col items-center justify-center transition-colors duration-300">
            <div className="smash-boom-text">FARYAD ALI</div>
        </div>
    );
};

export default Loader;
