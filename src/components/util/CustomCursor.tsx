import { useEffect, useRef, useState } from 'react';

interface CircleElement extends HTMLDivElement {
    x: number;
    y: number;
}

const CustomCursor: React.FC = () => {
    const coordsRef = useRef({ x: 0, y: 0 });
    const circlesRef = useRef<(CircleElement | null)[]>([]);
    const [isMobile, setIsMobile] = useState(false);
    
    const colors = [
        "#a7f3d0", "#86efac", "#6ee7b7", "#5eead4",
        "#4ade80", "#34d399", "#2dd4bf", "#22c55e",
        "#14b8a6", "#10b981", "#0d9488", "#059669",
        "#0891b2", "#0e7490", "#0284c7", "#0369a1",
        "#075985", "#0c4a6e", "#1e3a8a", "#1e40af",
        "#1d4ed8", "#2563eb"
    ];

    useEffect(() => {
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 1024 || 'ontouchstart' in window);
        };
        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    useEffect(() => {
        if (isMobile) return;

        const circles = circlesRef.current;
        let animationFrameId: number;
        
        // Initialize circle positions
        circles.forEach((circle) => {
            if (circle) {
                circle.x = 0;
                circle.y = 0;
            }
        });

        const handleMouseMove = (e: MouseEvent) => {
            coordsRef.current.x = e.clientX;
            coordsRef.current.y = e.clientY;
        };

        const animateCircles = () => {
            let x = coordsRef.current.x;
            let y = coordsRef.current.y;

            circles.forEach((circle, index) => {
                if (circle) {
                    circle.style.left = x - 12 + "px";
                    circle.style.top = y - 12 + "px";
                    circle.style.transform = `scale(${(circles.length - index) / circles.length})`;

                    circle.x = x;
                    circle.y = y;

                    const nextCircle = circles[index + 1] || circles[0];
                    if (nextCircle) {
                        x += (nextCircle.x - x) * 0.3;
                        y += (nextCircle.y - y) * 0.3;
                    }
                }
            });

            animationFrameId = requestAnimationFrame(animateCircles);
        };

        window.addEventListener('mousemove', handleMouseMove);
        animateCircles();

        return () => {
            window.removeEventListener('mousemove', handleMouseMove);
            if (animationFrameId) {
                cancelAnimationFrame(animationFrameId);
            }
        };
    }, [isMobile]);

    if (isMobile) return null;

    return (
        <>
            {colors.map((color, index) => (
                <div
                    key={index}
                    ref={(el) => { circlesRef.current[index] = el as CircleElement | null; }}
                    className="fixed w-6 h-6 rounded-full pointer-events-none z-[9998]"
                    style={{
                        backgroundColor: color,
                        left: 0,
                        top: 0,
                    }}
                />
            ))}
        </>
    );
};

export default CustomCursor;
