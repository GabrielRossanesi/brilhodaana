type LogoMarkProps = {
  muted?: boolean;
};

export function LogoMark({ muted = false }: LogoMarkProps) {
  return (
    <div className={`logo-mark${muted ? " logo-mark--muted" : ""}`}>
      <div className="logo-mark__sparkle" aria-hidden="true">
        ✦
      </div>
      <div className="logo-mark__text">
        <span className="logo-mark__brand">BRILHO</span>
        <span className="logo-mark__signature">da Ana</span>
      </div>
    </div>
  );
}
