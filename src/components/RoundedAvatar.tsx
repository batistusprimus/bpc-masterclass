import Image from "next/image";

interface RoundedAvatarProps {
  src: string;
  alt: string;
  size?: "sm" | "md" | "lg";
  className?: string;
}

const sizeClasses = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-16 h-16"
};

const profileImages = {
  "Yann Grosjean": "/Yann Grosjean.jpeg",
  "Thierry Lorfils": "/Thierry Lorfils .jpg",
  "Samantha Piat": "/Samantha Piat.jpeg",
  "Joris Genty": "/Joris Genty.jpeg",
  "Jean Michel Ly": "/jean_michel_ly_v2.png",
  "Giacomo Genna": "/Giacomo Genna.jpeg",
  "Floriane Bobée": "/Floriane Bobée.jpeg",
  "Caroline Rousset": "/Caroline rousset.jpg",
  "Axelle Guer": "/Axelle Guer .jpeg"
};

export default function RoundedAvatar({ src, alt, size = "md", className = "" }: RoundedAvatarProps) {
  const imageSrc = profileImages[alt as keyof typeof profileImages] || src;
  
  return (
    <div className={`${sizeClasses[size]} rounded-full border-2 border-primary overflow-hidden relative ${className}`}>
      <Image
        src={imageSrc}
        alt={alt}
        fill
        className="object-cover object-[50%_35%]"
      />
    </div>
  );
} 