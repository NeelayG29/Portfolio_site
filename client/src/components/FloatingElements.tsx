import { motion } from "framer-motion";
import { Server, Cloud, Database, Code, Cpu, Network } from "lucide-react";

export default function FloatingElements() {
  const icons = [
    { Icon: Server, delay: 0, duration: 20, x: "10%", y: "20%" },
    { Icon: Cloud, delay: 2, duration: 25, x: "80%", y: "15%" },
    { Icon: Database, delay: 4, duration: 22, x: "15%", y: "70%" },
    { Icon: Code, delay: 1, duration: 24, x: "85%", y: "75%" },
    { Icon: Cpu, delay: 3, duration: 23, x: "50%", y: "40%" },
    { Icon: Network, delay: 5, duration: 21, x: "70%", y: "50%" },
  ];

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      {icons.map(({ Icon, delay, duration, x, y }, index) => (
        <motion.div
          key={index}
          className="absolute"
          style={{ left: x, top: y }}
          initial={{ opacity: 0, scale: 0 }}
          animate={{
            opacity: [0.3, 0.6, 0.3],
            scale: [1, 1.2, 1],
            y: [0, -20, 0],
          }}
          transition={{
            duration,
            delay,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <Icon className="w-8 h-8 md:w-12 md:h-12 text-primary" />
        </motion.div>
      ))}
    </div>
  );
}
