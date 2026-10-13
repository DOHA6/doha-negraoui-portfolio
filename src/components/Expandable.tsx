"use client";

import { useId, useRef, useState } from "react";

type ExpandableProps = {
  showLabel: string;
  hideLabel: string;
  children: React.ReactNode;
};

export default function Expandable({ showLabel, hideLabel, children }: ExpandableProps) {
  const [open, setOpen] = useState(false);
  const regionId = useId();
  const buttonRef = useRef<HTMLButtonElement>(null);

  const toggle = () => {
    if (open) buttonRef.current?.scrollIntoView({ behavior: "smooth", block: "center" });
    setOpen(!open);
  };

  return (
    <>
      <div
        id={regionId}
        inert={!open}
        className={`grid transition-[grid-template-rows,opacity] duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        {/* Negative margin + padding leaves room for the cards' hover lift and shadow inside the clipped area. */}
        <div className="-mx-5 min-h-0 overflow-hidden sm:-mx-6">
          <div className="px-5 pb-8 sm:px-6">{children}</div>
        </div>
      </div>

      <div className={`flex justify-center transition-[margin] duration-700 ${open ? "mt-2" : "mt-10 md:mt-12"}`}>
        <button
          ref={buttonRef}
          type="button"
          onClick={toggle}
          aria-expanded={open}
          aria-controls={regionId}
          className="group inline-flex items-center gap-3 rounded-full border-2 border-accent px-7 py-3.5 font-semibold text-accent transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-white hover:shadow-lg hover:shadow-brand-300/60"
        >
          {open ? hideLabel : showLabel}
          <svg
            viewBox="0 0 24 24"
            aria-hidden
            className={`h-5 w-5 fill-none stroke-current stroke-2 transition-transform duration-500 [stroke-linecap:round] [stroke-linejoin:round] ${
              open ? "rotate-180" : "group-hover:translate-y-0.5"
            }`}
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </button>
      </div>
    </>
  );
}
