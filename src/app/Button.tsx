export default function Button({
  label,
 onButtonClick,
  classNameStyle,
}: Readonly<{
  label: string;
  onButtonClick: (value : string) => void;
  classNameStyle?: string;
}>) {
  return (
    <button
      className={`px-4 py-2 border border-zinc-400 outline-none
        ${classNameStyle ?? " bg-slate-200 text-zinc-500 active:bg-slate-300"}`}
        onClick={() => onButtonClick(label)}
    >
      {label}
    </button>
  );
}
