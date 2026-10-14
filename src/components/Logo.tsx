
import Image from "next/image";
import Link from "next/link";

export default function Logo({ light = false }: { light?: boolean }) {
  return (
    <Link
      href="/"
      aria-label="Ethixweb India home"
      className="inline-flex items-center"
    >
      <Image
        src="/logo.webp"
        alt="Ethixweb India"
        width={180}
        height={60}
        priority
        className={`h-auto w-[150px] sm:w-[180px] ${
          light ? "brightness-0 invert" : "brightness-0"
        }`}
      />
    </Link>
  );
}
