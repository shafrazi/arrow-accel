import { ArrowNarrowRightIcon } from "@heroicons/react/solid";

export default function Services() {
  return (
    <div className="flex flex-col items-center w-full tracking-wide bg-white mb-6 md:mb-10 lg:mb-12 py-6 md:py-10 lg:py-16 px-4 md:px-10 lg:px-0">
      <div className="flex flex-col w-full lg:w-11/12">
        <h2 className="font-bold text-lg md:text-2xl lg:text-3xl">
          Our services
        </h2>
        <div className="w-full grid grid-cols-2 lg:grid-cols-3 mt-4 md:mt-6 lg:mt-12 text-base md:text-lg lg:text-xl">
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>financial advisory</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>web design</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>digital transformation</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>investor readiness</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>marketing campaigns</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>tokenization of assets</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>capital sourcing</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>creative strategy</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>business development</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>publishing</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>concept to content</p>
          </div>
          <div className="flex items-center space-x-6 md:space-x-8 mt-4">
            <ArrowNarrowRightIcon className="w-6 lg:w-12" />
            <p>brand activation</p>
          </div>
        </div>
      </div>
    </div>
  );
}
