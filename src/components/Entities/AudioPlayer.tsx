"use client";

import { useEffect } from "react";
import { Howl, Howler } from "howler";

export default function AudioPlayer() {
  useEffect(() => {
    // Create two separate Howl instances for better control
    const sound1 = new Howl({
      src: ["/sounds/breathing.wav"],
      loop: true,
      autoplay: true,
      volume: 1,
      onplayerror: function() {
        sound1.once('unlock', function() {
          sound1.play();
        });
      }
    });

    const sound2 = new Howl({
      src: ["/sounds/heartbeat.wav"],
      loop: true,
      autoplay: true,
      volume: 1,
      onplayerror: function() {
        sound2.once('unlock', function() {
          sound2.play();
        });
      }
    });

    // Enable auto unlock for both sounds
    Howler.autoUnlock = true;

    // Start playing both sounds
    sound1.play();
    sound2.play();

    // Cleanup function
    return () => {
      sound1.stop();
      sound2.stop();
      sound1.unload();
      sound2.unload();
    };
  }, []);

  return null; // no UI needed
}
