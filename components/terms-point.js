export default function TermPoint({ point, children }) {
  return (
    <>
      <li className="mt-3 font-bold">{point}</li>
      <ol className="list-decimal list-outside">{children}</ol>
    </>
  );
}
