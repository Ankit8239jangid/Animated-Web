import { useEffect, useRef, useState } from "react";
import canvas_img from "./canvas_img";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Canvas({ details }) {
  const { startIndex, numImages, duration, size, top, left, zIndex } = details;

  const [index, setIndex] = useState({ value: startIndex });
  const canvasRef = useRef(null);
  const imageCache = useRef(new Map());

  // Preload and cache all images
  useEffect(() => {
    const loadAndCacheImage = async (src) => {
      if (!imageCache.current.has(src)) {
        const img = new Image();
        const loadPromise = new Promise((resolve) => {
          img.onload = () => resolve(img);
        });
        img.src = src;
        const loadedImg = await loadPromise;
        imageCache.current.set(src, loadedImg);
      }
    };

    // Load all images needed for the animation
    for (let i = startIndex; i < startIndex + numImages; i++) {
      loadAndCacheImage(canvas_img[i]);
    }
  }, [startIndex, numImages]);

  useGSAP(() => {
    gsap.to(index, {
      value: startIndex + numImages - 1,
      duration: duration,
      repeat: -1,
      ease: "linear",
      onUpdate: () => {
        setIndex({ value: Math.round(index.value) });
      },
    });

    gsap.from(canvasRef.current, {
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
    });
  });

  useEffect(() => {
    const scale = window.devicePixelRatio;
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const currentImgSrc = canvas_img[index.value];

    // Use cached image if available, otherwise load and cache it
    if (imageCache.current.has(currentImgSrc)) {
      const img = imageCache.current.get(currentImgSrc);
      canvas.width = canvas.offsetWidth * scale;
      canvas.height = canvas.offsetHeight * scale;
      canvas.style.width = canvas.offsetWidth + "px";
      canvas.style.height = canvas.offsetHeight + "px";

      ctx.scale(scale, scale);
      ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
    } else {
      const img = new Image();
      img.src = currentImgSrc;
      img.onload = () => {
        imageCache.current.set(currentImgSrc, img);
        canvas.width = canvas.offsetWidth * scale;
        canvas.height = canvas.offsetHeight * scale;
        canvas.style.width = canvas.offsetWidth + "px";
        canvas.style.height = canvas.offsetHeight + "px";

        ctx.scale(scale, scale);
        ctx.drawImage(img, 0, 0, canvas.offsetWidth, canvas.offsetHeight);
      };
    }
  }, [index]);

  return (
    <canvas
      data-scroll
      data-scroll-speed={Math.random().toFixed(1)}
      ref={canvasRef}
      className="absolute"
      style={{
        width: `${size * 1.3}px`,
        height: `${size * 1.3}px`,
        top: `${top}%`,
        left: `${left}%`,
        zIndex: `${zIndex}`,
      }}
      id="canvas"
    ></canvas>
  );
}

export default Canvas;