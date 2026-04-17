import Image from "next/image";
import logoImage from "@/public/brilho-da-ana-logo.png";

type LogoMarkProps = {
  muted?: boolean;
};

export function LogoMark({ muted = false }: LogoMarkProps) {
  return (
    <div className={`logo-mark${muted ? " logo-mark--muted" : ""}`}>
      <Image
        src={logoImage}
        alt="Brilho da Ana"
        className="logo-mark__image"
        sizes="(max-width: 719px) 84px, 116px"
        priority={!muted}
      />
    </div>
  );
}
