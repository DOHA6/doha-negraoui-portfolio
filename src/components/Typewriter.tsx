"use client";

import { useEffect, useState } from "react";

export default function Typewriter({ words }: { words: string[] }) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const word = words[wordIndex % words.length];
    const doneTyping = !deleting && text === word;
    const doneDeleting = deleting && text === "";

    const timeout = setTimeout(
      () => {
        if (doneTyping) {
          setDeleting(true);
        } else if (doneDeleting) {
          setDeleting(false);
          setWordIndex((i) => i + 1);
        } else {
          setText(word.slice(0, text.length + (deleting ? -1 : 1)));
        }
      },
      doneTyping ? 1800 : deleting ? 45 : 90,
    );
    return () => clearTimeout(timeout);
  }, [text, deleting, wordIndex, words]);

  return (
    <span className="text-gradient">
      {text}
      <span className="ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.1em] animate-blink bg-accent align-baseline" />
    </span>
  );
}
