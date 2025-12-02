export default function Button({ children, className = "" }) {
  const baseStyles =
    "text-preset-7 px-8 py-2 text-navy-950 bg-red-500 uppercase cursor-pointer";

  return <button className={`${baseStyles} ${className}`}>{children}</button>;
}
