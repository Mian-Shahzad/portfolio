import React, { useEffect } from 'react';

const Cursor = () => {
    useEffect(() => {
        const cursorDot = document.querySelector("[data-cursor-dot]");
        const cursorOutline = document.querySelector("[data-cursor-outline]");

        const moveCursor = (e) => {
            const posX = e.clientX;
            const posY = e.clientY;

            if (cursorDot) {
                cursorDot.style.left = `${posX}px`;
                cursorDot.style.top = `${posY}px`;
            }

            if (cursorOutline) {
                cursorOutline.animate({
                    left: `${posX}px`,
                    top: `${posY}px`
                }, { duration: 50, fill: "forwards" });
            }
        };

        const handleMouseOver = (e) => {
            const isInteractive = e.target.closest('a, button, input, textarea, .interactive');
            if (isInteractive) {
                cursorOutline?.classList.add("cursor-hover");
            } else {
                cursorOutline?.classList.remove("cursor-hover");
            }
        };

        window.addEventListener("mousemove", moveCursor);
        window.addEventListener("mouseover", handleMouseOver);

        return () => {
            window.removeEventListener("mousemove", moveCursor);
            window.removeEventListener("mouseover", handleMouseOver);
        };
    }, []);

    return (
        <>
            <div className="cursor-dot" data-cursor-dot></div>
            <div className="cursor-outline" data-cursor-outline></div>
        </>
    );
};

export default Cursor;
