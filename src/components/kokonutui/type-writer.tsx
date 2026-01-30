"use client";

/**
 * @author: @dorianbaffier
 * @description: Typewriter
 * @version: 1.0.0
 * @date: 2025-06-26
 * @license: MIT
 * @website: https://kokonutui.com
 * @github: https://github.com/kokonut-labs/kokonutui
 */

import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

type TypewriterSequence = {
  text: string;
  deleteAfter?: boolean;
  pauseAfter?: number;
};

type TypewriterTitleProps = {
  sequences?: TypewriterSequence[];
  typingSpeed?: number;
  startDelay?: number;
  autoLoop?: boolean;
  loopDelay?: number;
  deleteSpeed?: number;
  pauseBeforeDelete?: number;
  naturalVariance?: boolean;

  /** Optional className so you can style from parent if needed */
  className?: string;
};

const DEFAULT_SEQUENCES: TypewriterSequence[] = [
  { text: "Typewriter", deleteAfter: true },
  { text: "Multiple Words", deleteAfter: true },
  { text: "Auto Loop", deleteAfter: false },
];

export default function TypewriterTitle({
  sequences = DEFAULT_SEQUENCES,
  typingSpeed = 50,
  startDelay = 200,
  autoLoop = true,
  loopDelay = 1000,
  deleteSpeed = 30,
  pauseBeforeDelete = 1000,
  naturalVariance = true,
  className,
}: TypewriterTitleProps) {
  const [displayText, setDisplayText] = useState("");
  const sequenceIndexRef = useRef(0);
  const charIndexRef = useRef(0);
  const isDeletingRef = useRef(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Keep latest sequences without restarting animation unnecessarily
  const sequencesRef = useRef(sequences);
  useEffect(() => {
    sequencesRef.current = sequences;
  }, [sequences]);

  useEffect(() => {
    const getTypingDelay = () => {
      if (!naturalVariance) return typingSpeed;

      const random = Math.random();

      if (random < 0.1) return typingSpeed * 2; // hesitation
      if (random > 0.9) return typingSpeed * 0.5; // burst

      const variance = 0.4;
      const min = typingSpeed * (1 - variance);
      const max = typingSpeed * (1 + variance);
      return Math.random() * (max - min) + min;
    };

    const runTypewriter = () => {
      const currentSequence = sequencesRef.current[sequenceIndexRef.current];
      if (!currentSequence) return;

      if (isDeletingRef.current) {
        if (charIndexRef.current > 0) {
          charIndexRef.current -= 1;
          setDisplayText(currentSequence.text.slice(0, charIndexRef.current));
          timeoutRef.current = setTimeout(runTypewriter, deleteSpeed);
        } else {
          isDeletingRef.current = false;

          const isLastSequence =
            sequenceIndexRef.current === sequencesRef.current.length - 1;

          if (isLastSequence && autoLoop) {
            timeoutRef.current = setTimeout(() => {
              sequenceIndexRef.current = 0;
              runTypewriter();
            }, loopDelay);
          } else if (!isLastSequence) {
            timeoutRef.current = setTimeout(() => {
              sequenceIndexRef.current += 1;
              runTypewriter();
            }, 100);
          }
        }
        return;
      }

      // typing
      if (charIndexRef.current < currentSequence.text.length) {
        charIndexRef.current += 1;
        setDisplayText(currentSequence.text.slice(0, charIndexRef.current));
        timeoutRef.current = setTimeout(runTypewriter, getTypingDelay());
        return;
      }

      // end of word
      const pauseDuration = currentSequence.pauseAfter ?? pauseBeforeDelete;

      if (currentSequence.deleteAfter) {
        timeoutRef.current = setTimeout(() => {
          isDeletingRef.current = true;
          runTypewriter();
        }, pauseDuration);
        return;
      }

      // no delete: move next / loop
      const isLastSequence =
        sequenceIndexRef.current === sequencesRef.current.length - 1;

      if (isLastSequence && autoLoop) {
        timeoutRef.current = setTimeout(() => {
          sequenceIndexRef.current = 0;
          charIndexRef.current = 0;
          setDisplayText("");
          runTypewriter();
        }, loopDelay);
      } else if (!isLastSequence) {
        timeoutRef.current = setTimeout(() => {
          sequenceIndexRef.current += 1;
          charIndexRef.current = 0;
          setDisplayText("");
          runTypewriter();
        }, pauseDuration);
      }
    };

    timeoutRef.current = setTimeout(runTypewriter, startDelay);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [
    typingSpeed,
    deleteSpeed,
    pauseBeforeDelete,
    autoLoop,
    loopDelay,
    startDelay,
    naturalVariance,
  ]);

  return (
    <div className={`relative mx-auto w-full max-w-4xl py-2 ${className ?? ""}`}>
      <div className="relative z-10 flex flex-col items-center justify-center text-center">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="
            flex items-center gap-1
            font-mono tracking-tight
            text-4xl md:text-6xl
            text-foreground
          "
        >
          {/* typed text */}
          <span
            className="
              inline-block min-h-[1.2em] min-w-[0.5em]
              text-foreground
              drop-shadow-[0_1px_0_rgba(0,0,0,0.08)]
              dark:drop-shadow-none
            "
          >
            {displayText}
          </span>

          {/* cursor */}
          <motion.span
            animate={{ opacity: [1, 1, 0, 0] }}
            transition={{
              duration: 1,
              repeat: Number.POSITIVE_INFINITY,
              repeatType: "loop",
              ease: "linear",
            }}
            className="
              inline-block h-[1em] w-[3px]
              bg-foreground
              rounded-sm
              opacity-90
            "
          />
        </motion.div>
      </div>
    </div>
  );
}
