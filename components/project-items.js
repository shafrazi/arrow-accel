import Container from "./container";
import ProjectItem from "./project-item";

export default function ProjectItems() {
  return (
    <Container>
      <div className="w-full flex flex-col">
        <ProjectItem
          title="Promoting research to end the struggle of gun violence in the US"
          image="/images/affirm-project.png"
          logo="/images/affirm-projects-logo.png"
          type="Case"
          link="/projects/#"
        />
        <ProjectItem
          title="Raising awareness for Financial Health"
          image="/images/floes-project.png"
          logo="/images/floes-projects-logo.png"
          type="Project"
          link="/projects/#"
        />
        <ProjectItem
          title="Talking about NFT's and asset tokenization"
          image="/images/laser-project.png"
          logo="/images/laser-projects-logo.png"
          type="Case"
          link="/projects/#"
        />
      </div>
    </Container>
  );
}
