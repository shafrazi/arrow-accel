import Container from "./container";
import TeamCard from "./team-card";
import TeamDisclosure from "./team-disclosure";
import { motion } from "framer-motion";

export default function TeamMembers() {
  const parentVariant = {
    hidden: {},
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const childVariant = {
    hidden: {
      opacity: 0,
      y: 100,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        stiffness: 100,
        type: "spring",
      },
    },
  };

  return (
    <Container topMargin={10}>
      <div className="w-full flex flex-col">
        <TeamDisclosure title="Strategy">
          <motion.div
            variants={parentVariant}
            animate="visible"
            initial="hidden"
          >
            <TeamCard
              variants={childVariant}
              image="/images/robert.png"
              name="Robert Schaeffer"
              position="Creative Director"
              location="AMSTERDAM, THE NETHERLANDS"
              description="Robert has over two decades of experience in creative management, consultancy, communication, marketing strategy, innovation, and growth."
            />
            <TeamCard
              variants={childVariant}
              image="/images/sander.png"
              name="Sander Epema"
              position="Creative Director"
              location="AMSTERDAM, THE NETHERLANDS"
              description="Sander is a seasoned, creative professional, investment writer, financial advisor, biomimicry and sustainability expert, and art lover. Connect the dots, create synergies, drive the change."
            />
            <TeamCard
              variants={childVariant}
              image="/images/margo.png"
              name="Margo Neely"
              position="Creative Strategist"
              location="NEW york, Usa"
              description="Margo is a thought leader, director, designer, innovator, and creative strategist, specialized in media, film production, and design studio specializing in the creation of original multi-platform streaming digital content for global brands."
            />
            <TeamCard
              variants={childVariant}
              image="/images/keweul.png"
              name="Keweul Hailand"
              position="Creative Strategist"
              location="AMSTERDAM, The Netherlands"
              description="Keweul has been working with online channels since 2013. Reaching a young audience is one of his strengths on an executive, managerial and strategic level. He has proven this at various commercial companies and public organizations. Keweul has a preference for data-driven working, content distribution and video content creation."
            />
          </motion.div>
        </TeamDisclosure>
        <TeamDisclosure title="Creative"></TeamDisclosure>
      </div>
    </Container>
  );
}
