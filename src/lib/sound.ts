import { useSyncExternalStore } from "react";

// Browsers only allow audible playback after the visitor has interacted with
// the page (a click or key press; hovering and scrolling don't count). We track
// that plus a site-wide mute toggle so hover previews can play with sound.

let soundOn = true;
let activated = false;
const listeners = new Set<() => void>();
const emit = () => listeners.forEach((l) => l());

if (typeof window !== "undefined") {
  const markActive = () => {
    if (!activated) {
      activated = true;
      emit();
    }
  };
  window.addEventListener("pointerdown", markActive, { capture: true });
  window.addEventListener("keydown", markActive, { capture: true });
}

export function canPlayWithSound() {
  const nav = navigator as Navigator & { userActivation?: { hasBeenActive: boolean } };
  return soundOn && (activated || nav.userActivation?.hasBeenActive === true);
}

export function setSound(on: boolean) {
  soundOn = on;
  emit();
}

function subscribe(l: () => void) {
  listeners.add(l);
  return () => listeners.delete(l);
}

export function useSound() {
  const on = useSyncExternalStore(subscribe, () => soundOn);
  const ready = useSyncExternalStore(subscribe, () => activated);
  return { on, ready, toggle: () => setSound(!soundOn) };
}

/** Play a video, preferring sound, falling back to muted if the browser refuses. */
export async function playPreview(video: HTMLVideoElement) {
  video.muted = !canPlayWithSound();
  try {
    await video.play();
  } catch {
    if (!video.muted) {
      video.muted = true;
      try {
        await video.play();
      } catch {
        /* autoplay fully blocked; poster stays visible */
      }
    }
  }
}
