import Container from "./container";
import ProjectItem from "./project-item";

export default function ProjectItems({ posts }) {
  console.log(posts);
  return (
    <Container>
      {posts ? (
        <div className="w-full flex flex-col">
          {posts.map((post, index) => {
            return (
              <ProjectItem
                title={post.title}
                image={post.thumbnail.fields.file.url}
                logo={post.thumbnailLogo.fields.file.url}
                type={post.type}
                link={`/projects/${post.slug}`}
                key={index}
              />
            );
          })}
        </div>
      ) : (
        ""
      )}
    </Container>
  );
}
