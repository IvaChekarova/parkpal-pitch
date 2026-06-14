import { motion } from "framer-motion";

const variants = {
  up: { initial: { opacity: 0, y: 48 }, animate: { opacity: 1, y: 0 } },
  down: { initial: { opacity: 0, y: -48 }, animate: { opacity: 1, y: 0 } },
  left: { initial: { opacity: 0, x: 48 }, animate: { opacity: 1, x: 0 } },
  right: { initial: { opacity: 0, x: -48 }, animate: { opacity: 1, x: 0 } },
  scale: { initial: { opacity: 0, scale: 0.92 }, animate: { opacity: 1, scale: 1 } },
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
};

export default function Reveal({
  children,
  direction = "up",
  delay = 0,
  duration = 0.7,
  className = "",
  once = true,
  amount = 0.25,
}) {
  const v = variants[direction] || variants.up;
  return (
    <motion.div
      className={className}
      initial={v.initial}
      whileInView={v.animate}
      viewport={{ once, amount }}
      transition={{ duration, delay, ease: [0.16, 1, 0.3, 1] }}
    >
      {children}
    </motion.div>
  );
}
