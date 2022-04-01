export default function Container({ children }) {
  return (
    <div className="flex w-full justify-center items-center">
      <div className="w-full flex flex-col lg:w-10/12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
        {children}
      </div>
    </div>
  );
}
