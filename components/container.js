export default function Container({ children, backgroundColor }) {
  return (
    <div
      className={`${backgroundColor} flex w-full justify-center items-center mt-16`}
    >
      <div className="flex w-10/12 py-4 md:py-8 lg:py-12 px-4 md:px-10 lg:px-0">
        {children}
      </div>
    </div>
  );
}
