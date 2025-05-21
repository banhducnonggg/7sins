'use client';

import { useEffect, useState } from 'react';

const BackgroundVideo = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Avoid hydration mismatch

  return (
    <video
      autoPlay
      loop
      muted
      playsInline
      className="absolute top-0 left-0 w-screen h-screen object-cover z-[-1]"
    >
      <source src="/bg.mp4" type="video/mp4" />
    </video>
  );
};

export default BackgroundVideo;
