type LogoProps = {
  className?: string;
  size?: number;
};

export function Logo({ className = "", size = 40 }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="15.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="8.5" stroke="currentColor" strokeWidth="1" />
      <circle cx="20" cy="20" r="2.25" fill="currentColor" />
      <path
        d="M20 4.5V11.5M20 28.5V35.5M4.5 20H11.5M28.5 20H35.5"
        stroke="currentColor"
        strokeWidth="1"
        strokeLinecap="round"
      />
    </svg>
  );
}
