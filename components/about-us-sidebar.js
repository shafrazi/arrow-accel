import SectionListItem from "./section-list-item";

export default function AboutUsSideBar() {
  return (
    <div className="w-1/3 flex flex-col" style={{ fontFamily: "OpenSauceOne" }}>
      <h1 className="font-bold text-4xl mb-14">About us</h1>
      <SectionListItem text="foundation" path="/about-us/foundation" />
      <SectionListItem text="philosophy" path="/about-us/philosophy" />
      <SectionListItem text="what we do" />
      <SectionListItem text="partners" />
    </div>
  );
}
