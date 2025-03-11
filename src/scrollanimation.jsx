import { useEffect } from "react";

function useScrollAnimation() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-animation");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");

            // ✅ Remove class after some time to allow re-trigger
            setTimeout(() => {
              entry.target.classList.remove("visible");
            }, 1000); // Adjust timing based on animation duration
          }
        });
      },
      { threshold: 0.2 } // Jab 20% element viewport me aaye tab trigger ho
    );

    elements.forEach((el) => observer.observe(el));

    return () => elements.forEach((el) => observer.unobserve(el));
  }, []);
}

export default useScrollAnimation;
