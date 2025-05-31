import Image from "next/image";
import { motion } from 'framer-motion';

interface HeroAvatarProps {
  name: string;
  avatar: string;
  index: number;
  isLast?: boolean;
  extraText?: string;
}

export default function HeroAvatar({ name, avatar, index, isLast = false, extraText }: HeroAvatarProps) {
  if (isLast) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
        className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/10 bg-white/5 backdrop-blur-sm flex items-center justify-center"
        style={{ minWidth: 40, minHeight: 40 }}
      >
        <span className="text-white text-sm font-medium">{extraText}</span>
      </motion.div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3, delay: index * 0.1 }}
      className="relative w-10 h-10 md:w-12 md:h-12 rounded-full border-2 border-white/10 overflow-hidden bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center"
      style={{ minWidth: 40, minHeight: 40 }}
    >
      <Image
        src={avatar}
        alt={name}
        width={48}
        height={48}
        className="object-cover rounded-full"
        unoptimized
      />
    </motion.div>
  );
} 