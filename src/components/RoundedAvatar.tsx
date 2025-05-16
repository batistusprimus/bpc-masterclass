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
  "Axelle Guer": "/Axelle Guer .jpeg",
  "Anaïs R.": "/anais-remaoun.webp"
};

export default function RoundedAvatar({ src, alt, size = "md", className = "" }: RoundedAvatarProps) {
  const imageSrc = profileImages[alt as keyof typeof profileImages] || src;
  
  // Affiche un avatar générique si CEO anonyme ou image non trouvée
  if (alt === "CEO anonyme" || !imageSrc) {
    return (
      <div className={`${sizeClasses[size]} rounded-full border-2 border-primary bg-gray-800 flex items-center justify-center text-white font-bold text-lg ${className}`}>
        <svg className="w-6 h-6 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" />
          <path stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" d="M12 14c2.5 0 4-1.5 4-4s-1.5-4-4-4-4 1.5-4 4 1.5 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
        </svg>
      </div>
    );
  }

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