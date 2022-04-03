import Container from "./container";
import MobileLinkItem from "./mobile-link-item";

export default function MobileSideLinks() {
  return (
    <div className="flex flex-col w-full">
      <MobileLinkItem title="House TMM">
        T M M is a design studio which delivers graphic design and visual
        communication to clients and collaborators who are looking for engaging
        and strong output that is able to challenge expectations and goals.
      </MobileLinkItem>
      <MobileLinkItem title="K-Line media">
        K-line achieves objectives through measurable and accountable marketing.
        They work as an extension of your team by filling the gaps with the
        right specialists. Our full-service capabilities allow us to provide
        professional recommendations and solutions across every aspect of your
        marketing.
      </MobileLinkItem>
      <MobileLinkItem title="Neely & daughters">
        Neely & Daughters is a think tank, creative incubator, and studio where
        visionary innovations are born. Neely & Daughters are renegade creatives
        producing revolutionary content embraced by millions over the world.
      </MobileLinkItem>
    </div>
  );
}
