type IconBadgeProps = {
  type: "sparkle" | "shield" | "tag" | "heart";
};

export function IconBadge({ type }: IconBadgeProps) {
  return (
    <span className="icon-badge" aria-hidden="true">
      {type === "sparkle" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3Z" />
        </svg>
      )}
      {type === "shield" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 3l7 3v5c0 4.6-2.8 8.9-7 10-4.2-1.1-7-5.4-7-10V6l7-3Z" />
          <path d="m9.5 11.5 1.7 1.7 3.7-4" />
        </svg>
      )}
      {type === "tag" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M20 13 11 22l-9-9V4h9l9 9Z" />
          <path d="M7 8h.01" />
        </svg>
      )}
      {type === "heart" && (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M12 20.7S4 15.5 4 9.8C4 7 6 5 8.7 5c1.7 0 2.9.8 3.3 1.7.4-.9 1.6-1.7 3.3-1.7C18 5 20 7 20 9.8c0 5.7-8 10.9-8 10.9Z" />
        </svg>
      )}
    </span>
  );
}
