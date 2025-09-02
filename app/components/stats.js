"use client";
import { useEffect, useRef, useState } from "react";

function useCountUp(target, duration = 2000, startWhenVisible = false) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!startWhenVisible || started.current) return;
    started.current = true;

    let start = null;

    const step = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(Math.floor(progress * target));
      if (progress < 1) {
        requestAnimationFrame(step);
      }
    };

    requestAnimationFrame(step);
  }, [target, duration, startWhenVisible]);

  return count;
}

export default function Stats() {
  const stats = [
    { value: 1000, label: "Templates", suffix: "+" },
    { value: 1000, label: "Portfolios created", suffix: "+" },
    { value: 1000, label: "5-star testimonials", suffix: "+" },
    { value: 1000, label: "Showcased projects and experiences", suffix: "+" },
  ];

  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="py-16 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
        {stats.map((stat, index) => {
          const count = useCountUp(stat.value, 2000, visible);
          return (
            <div key={index} className="flex flex-col items-center">
              <h2 className="text-4xl font-bold">
                {count}
                {count === stat.value ? stat.suffix : ""}
              </h2>
              <p className="mt-2 text-lg text-gray-700">{stat.label}</p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
