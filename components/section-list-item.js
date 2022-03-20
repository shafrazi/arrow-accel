import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function SectionListItem({ text }) {
  return (
    <div className="flex w-full mt-5">
      <div className="flex justify-center items-center">
        <ArrowNarrowRightIcon className="w-10" />
      </div>
      <p className="mx-6 flex justify-center items-center font-bold text-xl">
        {text}
      </p>
    </div>
  );
}
