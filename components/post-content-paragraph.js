export default function PostContentParagraph({ fontSize, children }) {
  return (
    <p
      className={`${fontSize ? fontSize : "text-base lg:text-lg"} py-2 lg:py-6`}
    >
      {children}
    </p>
  );
}
