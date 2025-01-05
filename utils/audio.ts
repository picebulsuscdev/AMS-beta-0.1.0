"use client";

// Define types for better type safety
type AudioPlayer = {
  success: HTMLAudioElement | null;
  error: HTMLAudioElement | null;
  init: () => void;
};

// Create a singleton audio player
export const audioPlayer: AudioPlayer = {
  success: null,
  error: null,
  init: function () {
    if (typeof window !== "undefined" && !this.success && !this.error) {
      this.success = new Audio("/success.mp3");
      this.error = new Audio("/error.mp3");
    }
  },
};

export const playSuccessSound = () => {
  if (audioPlayer.success) {
    audioPlayer.success
      .play()
      .catch((err) => console.error("Error playing success sound:", err));
  }
};

export const playErrorSound = () => {
  if (audioPlayer.error) {
    audioPlayer.error
      .play()
      .catch((err) => console.error("Error playing error sound:", err));
  }
};
