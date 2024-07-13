export default function Display({
  value,
  className,
}: Readonly<{
  value: string;
  className?: string;
}>) {
  return (
    <div
      className={`col-span-4 bg-gray-800 flex items-center justify-end text-white  
        text-4xl p-4 overflow-hidden ${className}`}
    >
      <p className="text-2xl">{value}</p>
    </div>
  );
}
