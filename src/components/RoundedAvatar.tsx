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

export default function RoundedAvatar({ src, alt, size = "md", className = "" }: RoundedAvatarProps) {
  return (
    <div className={`${sizeClasses[size]} rounded-full border-2 border-primary overflow-hidden relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover object-[50%_35%]"
      />
    </div>
  );
} 