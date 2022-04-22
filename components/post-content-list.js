export default function PostContentList({ children }) {
  return (
    <ul className={`mx-4 py-2 lg:py-6 list-disc list-outside`}>
      {children.map((item) => (
        <li key={item.key}>{item.props.children[0].props.children[0]}</li>
      ))}
    </ul>
  );
}
