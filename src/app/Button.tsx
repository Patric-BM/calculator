export default function Button({
  label,
 onButtonClick,
  className,
}: Readonly<{
  label: string;
  onButtonClick: (value : string) => void;
  className?: string;
}>) {
  return (
    <button
      className={`px-4 py-2 bg-slate-200 border text-zinc-500 border-zinc-400 outline-none
       active:bg-slate-300 ${className}`}
        onClick={() => onButtonClick(label)}
    >
      {label}
    </button>
  );
}
