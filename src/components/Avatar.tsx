import Image from "next/image";
import { shared } from "@/data/portfolio";

export default function Avatar({ size = "lg" }: { size?: "md" | "lg" }) {
  const dims = size === "lg" ? "h-56 w-56 sm:h-64 sm:w-64 lg:h-80 lg:w-80" : "h-48 w-48 sm:h-56 sm:w-56 lg:h-64 lg:w-64";
  const initials = shared.name
    .split(" ")
    .map((part) => part[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  return (
    <div className={`relative ${dims}`}>
      <div className="absolute -inset-3 animate-spin-slow rounded-full bg-[conic-gradient(from_0deg,#7a4530,#d9a066,#f3e9dc,#c26a4a,#7a4530)] opacity-80 blur-[2px]" />
      <div className="absolute -inset-1 rounded-full bg-white" />
      <div
        className={`relative h-full w-full overflow-hidden rounded-full shadow-2xl shadow-brand-300/50 ${
          shared.photo ? "bg-white" : "bg-gradient-to-br from-brand-50 to-brand-100"
        }`}
      >
        {shared.photo ? (
          <Image src={shared.photo} alt={shared.name} fill sizes="320px" className="scale-[1.08] object-contain" priority />
        ) : (
          <span className="flex h-full w-full items-center justify-center text-7xl font-extrabold">
            <span className="text-gradient">{initials}</span>
          </span>
        )}
      </div>
    </div>
  );
}
