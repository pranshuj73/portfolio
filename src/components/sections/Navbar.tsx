import { useState, useEffect, useRef, useMemo } from "react";
import clsx from "clsx";
import { AnimatePresence, motion } from "framer-motion";

type Path = { w: number; offset: number }[];

export default ({activeTab = 0} : {activeTab?: number}) => {
  const [active, setActive] = useState(activeTab);
  const [clipPaths, setClipPaths] = useState<Path>([
    { "w": 67.5875015258789, "offset": 0 },
    { "w": 79.75, "offset": 67.5875015258789 },
    { "w": 60.900001525878906, "offset": 147.33750915527344 },
    { "w": 55.85000228881836, "offset": 208.2375030517578 },
    { "w": 78.7125015258789, "offset": 264.0874938964844 }
  ]);

  const tabRefs = useRef<HTMLAnchorElement[]>([]);

  const tabs = useMemo(
    () => [
      { label: "About", href: "/" },
      { label: "Projects", href: "/projects" },
      { label: "Stack", href: "/stack" },
      { label: "Blog", href: "/blog" },
      { label: "Contact", href: "/contact" }, ],
    [],
  );

  useEffect(() => {
    const newClipPaths = tabs.map((_, i) => {
      const rect = tabRefs.current[i].getBoundingClientRect();
      return {
        w: rect.width,
        offset: rect.left - tabRefs.current[0].getBoundingClientRect().left,
      };
    });
    setClipPaths(newClipPaths);
  }, [tabs]);

  const getClipPath = (i: number) => {
    if (clipPaths.length === 0) return "";
    const { offset, w } = clipPaths[i];
    return `inset(0px calc(100% - (${offset}px + ${w}px)) calc(100% - (0px + 32px)) ${offset}px round calc(var(--radius) - 4px))`;
  };

  return (
    <AnimatePresence>
      <nav className="relative overflow-hidden w-full items-center justify-center mb-4" >
      <div
        className={clsx("relative flex w-fit items-center justify-center", )}
      >
        {tabs.map((item, i) => (
          <a
            key={i}
            ref={(el) => {
              tabRefs.current[i] = el!;
            }}
            href={item.href}
            className={clsx(
              "z-10 rounded-md px-3 py-1 transition-colors hover:text-accent-foreground/75",
            )}
            onClick={() => setActive(i)}
          >
            {item.label}
          </a>
        ))}
      </div>
      <motion.div
        style={{ clipPath: getClipPath(active) }}
        animate={{ clipPath: getClipPath(active) }}
        transition={{
          type: "spring",
          stiffness: 300,
          damping: 29,
          duration: 0.1,
        }}
        className={clsx(
          "absolute left-0 top-1/2 -translate-y-1/2 [will-change: clip-path] pointer-events-none z-20 h-full flex w-fit items-center justify-center bg-accent",
        )}
        aria-hidden
      >
        {tabs.map((item, i) => (
          <span
            key={i}
            className={clsx(
              "z-20 rounded-md px-3 py-1 transition-colors text-accent-foreground",
            )}
            aria-hidden
          >
            {item.label}
          </span>
        ))}
      </motion.div>
    </nav>
    </AnimatePresence>
  );
};