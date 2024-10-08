import LinkItem from "./link-item";
import Container from "./container";
import SideLinkContent from "./side-link-content";
import MobileSideLinks from "./mobile-side-links";

export default function SideLinks() {
  return (
    <Container topMargin={16}>
      <div className="hidden lg:flex w-full">
        <div className="flex w-1/2 flex-col">
          <LinkItem
            defaultClicked={true}
            name="House TMM"
            link="https://housetmm.com"
            borderColor="black"
            fontSize="text-2xl"
            content="T M M is a design studio which delivers graphic design and visual communication to clients and collaborators who are looking for engaging and strong output that is able to challenge expectations and goals."
          />
          <LinkItem
            name="K-Line media"
            link={false}
            borderColor="black"
            fontSize="text-2xl"
            content="K-line achieves objectives through measurable and accountable marketing. They work as an extension of your team by filling the gaps with the right specialists. Our full-service capabilities allow us to provide professional recommendations and solutions across every aspect of your marketing."
          />
          <LinkItem
            name="Neely & daughters"
            link="https://neelyanddaughters.com"
            borderColor="black"
            fontSize="text-2xl"
            content="Neely & Daughters is a think tank, creative incubator, and studio where visionary innovations are born. Neely & Daughters are renegade creatives producing revolutionary content embraced by millions over the world."
          />
        </div>
        <SideLinkContent
          centerItems={true}
          showLinkName={true}
          defaultTargetLink="https://housetmm.com"
          defaultLinkName="House TMM"
          defaultContent="T M M is a design studio which delivers graphic design and visual communication to clients and collaborators who are looking for engaging and strong output that is able to challenge expectations and goals."
        />
      </div>
      <div className="lg:hidden flex w-full">
        <MobileSideLinks />
      </div>
    </Container>
  );
}
