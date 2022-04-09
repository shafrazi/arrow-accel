import ProjectSideLinks from "./project-side-links";
import ProjectsTopSection from "./projects-top-section";
import { Element as ScrollElement } from "react-scroll";

export default function Projects() {
  return (
    <ScrollElement name="projects">
      <ProjectsTopSection />
      <ProjectSideLinks />
    </ScrollElement>
  );
}
