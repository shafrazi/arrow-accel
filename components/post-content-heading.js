export default function PostContentHeading({ fontSize, children }) {
  return <h1 className={`font-bold py-2 lg:py-6 ${fontSize}`}>{children}</h1>;
}
