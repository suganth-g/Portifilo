import { useEffect } from 'react';

const useScrollReveal = () => {
    useEffect(() => {
        const reveals = document.querySelectorAll('.reveal');
        const revealOptions = {
            threshold: 0.15,
            rootMargin: "0px 0px -50px 0px"
        };

        const revealObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (!entry.isIntersecting) return;
                entry.target.classList.add('active');
            });
        }, revealOptions);

        reveals.forEach(reveal => {
            revealObserver.observe(reveal);
        });

        return () => {
            reveals.forEach(reveal => {
                revealObserver.unobserve(reveal);
            });
        };
    }, []);
};

export default useScrollReveal;
