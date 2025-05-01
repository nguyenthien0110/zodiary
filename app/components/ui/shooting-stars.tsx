"use client";

import { cn } from "@/app/lib/utils";
import React, { useEffect, useState, useRef } from "react";

interface ShootingStar {
  id: number;
  x: number;
  y: number;
  angle: number;
  scale: number;
  speed: number;
  distance: number;
}

interface ShootingStarsProps {
  minSpeed?: number;
  maxSpeed?: number;
  minDelay?: number;
  maxDelay?: number;
  starColor?: string;
  trailColor?: string;
  starWidth?: number;
  starHeight?: number;
  starCount?: number;
  className?: string;
}

const getRandomStartPoint = () => {
  if (Math.random() < 0.5) {
    const side = Math.floor(Math.random() * 8);
    const width = window.innerWidth;
    const height = window.innerHeight;
    const offsetX = Math.random() * width;
    const offsetY = Math.random() * height;

    switch (side) {
      case 0:
        return { x: offsetX, y: 0, angle: 45 };
      case 1:
        return { x: width, y: offsetY, angle: 135 };
      case 2:
        return { x: offsetX, y: height, angle: 225 };
      case 3:
        return { x: 0, y: offsetY, angle: 315 };
      case 4:
        return { x: offsetX * 0.5, y: 0, angle: 22.5 };
      case 5:
        return { x: width - offsetX * 0.5, y: 0, angle: 67.5 };
      case 6:
        return { x: offsetX * 0.5, y: height, angle: 202.5 };
      case 7:
        return { x: width - offsetX * 0.5, y: height, angle: 247.5 };
      default:
        return { x: 0, y: 0, angle: 45 };
    }
  } else {
    return {
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      angle: Math.random() * 360,
    };
  }
};

export const ShootingStars: React.FC<ShootingStarsProps> = ({
  minSpeed = 10,
  maxSpeed = 20,
  minDelay = 1000,
  maxDelay = 4000,
  starColor = "#9E00FF",
  trailColor = "#2EB9DF",
  starWidth = 50,
  starHeight = 1,
  starCount = 11,
  className,
}) => {
  const [stars, setStars] = useState<ShootingStar[]>([]);
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const createStar = () => {
      const { x, y, angle } = getRandomStartPoint();
      const newStar: ShootingStar = {
        id: Date.now() + Math.random(),
        x,
        y,
        angle,
        scale: 1,
        speed: Math.random() * (maxSpeed - minSpeed) + minSpeed,
        distance: 0,
      };

      setStars((prevStars) => {
        if (prevStars.length >= starCount) return prevStars;
        return [...prevStars, newStar];
      });

      const randomDelay = Math.random() * (maxDelay - minDelay) + minDelay;
      setTimeout(createStar, randomDelay);
    };

    for (let i = 0; i < starCount; i++) {
      setTimeout(createStar, i * (maxDelay / starCount));
    }

    return () => {};
  }, [minSpeed, maxSpeed, minDelay, maxDelay, starCount]);

  useEffect(() => {
    const moveStars = () => {
      setStars((prevStars) =>
        prevStars
          .map((star) => {
            const newX =
              star.x + star.speed * Math.cos((star.angle * Math.PI) / 180);
            const newY =
              star.y + star.speed * Math.sin((star.angle * Math.PI) / 180);
            const newDistance = star.distance + star.speed;
            const newScale = 1 + newDistance / 100;
            if (
              newX < -20 ||
              newX > window.innerWidth + 20 ||
              newY < -20 ||
              newY > window.innerHeight + 20
            ) {
              return null;
            }

            return {
              ...star,
              x: newX,
              y: newY,
              distance: newDistance,
              scale: newScale,
            };
          })
          .filter((star): star is ShootingStar => star !== null)
      );

      const animationFrame = requestAnimationFrame(moveStars);
      return () => cancelAnimationFrame(animationFrame);
    };

    const animationFrame = requestAnimationFrame(moveStars);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  return (
    <svg
      ref={svgRef}
      className={cn(
        "fixed inset-0 w-full h-full bg-transparent z-[-1]",
        className
      )}
    >
      {stars.map((star) => (
        <rect
          key={star.id}
          x={star.x}
          y={star.y}
          width={starWidth * star.scale}
          height={starHeight}
          fill="url(#gradient)"
          transform={`rotate(${star.angle}, ${
            star.x + (starWidth * star.scale) / 2
          }, ${star.y + starHeight / 2})`}
        />
      ))}
      <defs>
        <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: trailColor, stopOpacity: 0 }} />
          <stop
            offset="100%"
            style={{ stopColor: starColor, stopOpacity: 1 }}
          />
        </linearGradient>
      </defs>
    </svg>
  );
};
