export default function Button({ children, className = "" }) {
  const baseStyles =
    "text-preset-7 px-8 py-2 text-navy-950 hover:text-white bg-red-500 hover:bg-navy-950 uppercase cursor-pointer";

  return <button className={`${baseStyles} ${className}`}>{children}</button>;
}
