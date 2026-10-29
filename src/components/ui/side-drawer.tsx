"use client";

import React, { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";

type SideDrawerProps = {
  isOpen: boolean;
  onClose: () => void;
  title: React.ReactNode;
  titleId: string;
  side?: "left" | "right";
  /** Right-side panels can expand to fill the screen. */
  allowMaximise?: boolean;
  children: (state: { maximised: boolean }) => React.ReactNode;
  footer?: (state: { maximised: boolean }) => React.ReactNode;
};

const iconButton =
  "w-10 h-10 inline-flex items-center justify-center rounded-full text-[var(--color-text)] hover:bg-[var(--vybe-peach)]/60 transition-colors cursor-pointer focus-visible:outline-2 focus-visible:outline-[var(--vybe-mauve-ink)]";

export function SideDrawer({
  isOpen,
  onClose,
  title,
  titleId,
  side = "right",
  allowMaximise = false,
  children,
  footer,
}: SideDrawerProps) {
  const [maximised, setMaximised] = useState(false);
  const pathname = usePathname();
  const onCloseRef = useRef(onClose);
  useEffect(() => {
    onCloseRef.current = onClose;
  }, [onClose]);

  // Following a link inside the panel (e.g. a product) closes it
  useEffect(() => {
    onCloseRef.current();
  }, [pathname]);

  // Escape closes the panel; the page behind stays still while it is open
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, onClose]);

  const offscreen = side === "right" ? "100%" : "-100%";

  return (
    <AnimatePresence onExitComplete={() => setMaximised(false)}>
      {isOpen && (
        <div className="fixed inset-0 z-50" role="dialog" aria-modal="true" aria-labelledby={titleId}>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={onClose}
            className="absolute inset-0 bg-[var(--color-text)]/35 backdrop-blur-[2px]"
            aria-hidden="true"
          />

          <motion.div
            initial={{ x: offscreen }}
            animate={{ x: 0 }}
            exit={{ x: offscreen }}
            transition={{ type: "tween", duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            className={`absolute inset-y-0 ${side === "right" ? "right-0" : "left-0"} flex flex-col bg-[var(--color-bg)] shadow-2xl transition-[width,max-width] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] ${
              maximised ? "w-full max-w-full" : "w-[92%] max-w-md"
            }`}
          >
            <div className="shrink-0 px-5 sm:px-6 h-16 sm:h-[4.5rem] border-b border-[var(--color-border)] flex items-center justify-between gap-3">
              <h2 id={titleId} className="font-headline text-2xl text-[var(--color-text)] truncate font-semibold">
                {title}
              </h2>
              <div className="flex items-center -mr-2">
                {allowMaximise && (
                  <button
                    type="button"
                    onClick={() => setMaximised((m) => !m)}
                    aria-label={maximised ? "Shrink panel" : "Expand panel to full screen"}
                    aria-pressed={maximised}
                    className={`${iconButton} hidden sm:inline-flex`}
                  >
                    {maximised ? (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M9 9V4.5M9 9H4.5M9 9L3.75 3.75M9 15v4.5M9 15H4.5M9 15l-5.25 5.25M15 9h4.5M15 9V4.5M15 9l5.25-5.25M15 15h4.5M15 15v4.5m0-4.5l5.25 5.25" />
                      </svg>
                    ) : (
                      <svg xmlns="http://www.w3.org/2000/svg" className="w-[18px] h-[18px]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 3.75v4.5m0-4.5h4.5m-4.5 0L9 9M3.75 20.25v-4.5m0 4.5h4.5m-4.5 0L9 15M20.25 3.75h-4.5m4.5 0v4.5m0-4.5L15 9m5.25 11.25h-4.5m4.5 0v-4.5m0 4.5L15 15" />
                      </svg>
                    )}
                  </button>
                )}
                <button type="button" onClick={onClose} aria-label="Close panel" className={iconButton}>
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>

            <div className="flex-1 min-h-0 overflow-y-auto">{children({ maximised })}</div>

            {footer && <div className="shrink-0">{footer({ maximised })}</div>}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
