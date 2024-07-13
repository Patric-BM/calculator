export default function Button({
  label,
  // onClick,
  className,
}: Readonly<{
  label: string;
  // onClick: () => void;
  className?: string;
}>) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-blue-500 text-white border-none outline-none ${className}`}
      // onClick={onClick}
    >
      {label}
    </button>
  );
}
