import { useState, useEffect, useRef, useCallback } from "react";

export function useFullPageScroll(
  totalSections: number,
  disabled: boolean = false,
) {
  const [currentSection, setCurrentSection] = useState(0);
  const isAnimating = useRef(false);
  const lastScrollTime = useRef(0);
  const animationDuration = 900; // ms — matches CSS transition duration

  const goTo = useCallback(
    (index: number) => {
      if (disabled) return;
      if (isAnimating.current) return;
      if (index < 0 || index >= totalSections) return;

      isAnimating.current = true;
      setCurrentSection(index);
      setTimeout(() => {
        isAnimating.current = false;
      }, animationDuration);
    },
    [totalSections, disabled],
  );

  const goNext = useCallback(
    () => goTo(currentSection + 1),
    [currentSection, goTo],
  );
  const goPrev = useCallback(
    () => goTo(currentSection - 1),
    [currentSection, goTo],
  );

  useEffect(() => {
    // ── Wheel handler ──
    const handleWheel = (e: WheelEvent) => {
      if (disabled) return;
      e.preventDefault();

      const now = Date.now();
      if (now - lastScrollTime.current < 1200) return;

      if (e.deltaY > 0) {
        lastScrollTime.current = now;
        goNext();
      } else if (e.deltaY < 0) {
        lastScrollTime.current = now;
        goPrev();
      }
    };

    // ── Touch handler ──
    let touchStartY = 0;
    const handleTouchStart = (e: TouchEvent) => {
      if (disabled) return;
      touchStartY = e.touches[0].clientY;
    };
    const handleTouchMove = (e: TouchEvent) => {
      if (disabled) return;
      e.preventDefault(); // Prevent native scroll/bounce
    };
    const handleTouchEnd = (e: TouchEvent) => {
      if (disabled) return;
      const delta = touchStartY - e.changedTouches[0].clientY;
      if (Math.abs(delta) < 50) return; // ignore small swipes

      const now = Date.now();
      if (now - lastScrollTime.current < 1200) return;
      lastScrollTime.current = now;

      if (delta > 0) goNext();
      else goPrev();
    };

    // ── Keyboard handler ──
    const handleKey = (e: KeyboardEvent) => {
      if (disabled) return;

      if (["ArrowDown", "PageDown", "ArrowUp", "PageUp"].includes(e.key)) {
        const now = Date.now();
        if (now - lastScrollTime.current < 1200) return;
        lastScrollTime.current = now;

        if (e.key === "ArrowDown" || e.key === "PageDown") goNext();
        if (e.key === "ArrowUp" || e.key === "PageUp") goPrev();
      }
    };

    window.addEventListener("wheel", handleWheel, { passive: false });
    window.addEventListener("touchstart", handleTouchStart, { passive: true });
    window.addEventListener("touchmove", handleTouchMove, { passive: false });
    window.addEventListener("touchend", handleTouchEnd, { passive: true });
    window.addEventListener("keydown", handleKey);

    return () => {
      window.removeEventListener("wheel", handleWheel);
      window.removeEventListener("touchstart", handleTouchStart);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleTouchEnd);
      window.removeEventListener("keydown", handleKey);
    };
  }, [goNext, goPrev, disabled]);

  return { currentSection, goTo, goNext, goPrev };
}
