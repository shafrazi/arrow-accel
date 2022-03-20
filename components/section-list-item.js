import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function SectionListItem({ text, path }) {
  return (
    <div className="flex w-full mt-5">
      <div className="flex justify-center items-center">
        <ArrowNarrowRightIcon className="w-10" />
      </div>
      <a href={path} className="mx-6 flex justify-center items-center text-xl">
        {text}
      </a>
    </div>
  );
}
