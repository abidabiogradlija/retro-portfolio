import { motion, AnimatePresence } from "framer-motion";

export default function ScreenFlash({ active }) {
  return (
    <AnimatePresence>
      {active && (
        <motion.div
          className="pointer-events-none fixed inset-0 z-50 bg-pixel-blue"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.55 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.18,
            ease: "easeOut",
          }}
        />
      )}
    </AnimatePresence>
  );
}