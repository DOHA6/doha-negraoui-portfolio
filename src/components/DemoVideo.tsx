"use client";

import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";

type DemoVideoProps = {
  src: string;
  title: string;
  label: string;
  closeLabel: string;
  className?: string;
};

export default function DemoVideo({ src, title, label, closeLabel, className = "" }: DemoVideoProps) {
  const dialogRef = useRef<HTMLDialogElement>(null);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;
    if (open) {
      dialog.showModal();
      document.documentElement.style.overflow = "hidden";
    } else if (dialog.open) {
      dialog.close();
    }
    return () => {
      document.documentElement.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={className}>
        <span className="relative flex h-2 w-2">
          <span className="absolute h-full w-full animate-ping rounded-full bg-white/70" />
          <span className="relative h-2 w-2 rounded-full bg-white" />
        </span>
        {label}
      </button>

      <dialog
        ref={dialogRef}
        aria-label={title}
        onClose={() => setOpen(false)}
        onClick={(e) => {
          if (e.target === e.currentTarget) setOpen(false);
        }}
        className="m-auto w-[min(92vw,64rem)] max-w-none overflow-visible bg-transparent p-0 backdrop:bg-brand-950/75 backdrop:backdrop-blur-sm open:animate-[modal-in_0.35s_cubic-bezier(0.22,1,0.36,1)]"
      >
        {open && (
          <div className="overflow-hidden rounded-2xl bg-brand-950 shadow-2xl ring-1 ring-white/10">
            <div className="flex items-center justify-between gap-4 px-4 py-3 sm:px-5">
              <p className="truncate text-sm font-semibold text-brand-100 sm:text-base">{title}</p>
              <button
                type="button"
                onClick={() => setOpen(false)}
                aria-label={closeLabel}
                autoFocus
                className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-white/10 text-brand-100 transition-colors hover:bg-white/20"
              >
                <svg viewBox="0 0 24 24" aria-hidden className="h-5 w-5 fill-none stroke-current stroke-2 [stroke-linecap:round]">
                  <path d="M6 6l12 12M18 6L6 18" />
                </svg>
              </button>
            </div>
            <div className="aspect-video max-h-[75vh] w-full bg-black">
              <ReactPlayer
                src={src}
                playing
                controls
                playsInline
                width="100%"
                height="100%"
              />
            </div>
          </div>
        )}
      </dialog>
    </>
  );
}
