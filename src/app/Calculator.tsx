import Button from "./Buttom";

export default function Calculator() {
  return (
    <div className="
    h-80 w-60 rounded-md overflow-hidden bg-red-500 grid
    grid-cols-4 grid-rows-5x48
    ">
      <Button label="AC" />
        <Button label="/" />
        <Button label="7" />
        <Button label="8" />
        <Button label="9" />
        <Button label="*" />
        <Button label="4" />
        <Button label="5" />
        <Button label="6" />
        <Button label="-" />
        <Button label="1" />
        <Button label="2" />
        <Button label="3" />
        <Button label="+" />
        <Button label="0" />
        <Button label="." />
        <Button label="=" />
    </div>
  );
}
