export default function Container({ children, backgroundColor }) {
  return (
    <div
      className={`${backgroundColor} flex w-full justify-center items-center my-16`}
    >
      <div className="w-full flex lg:w-10/12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
        {children}
      </div>
    </div>
  );
}
