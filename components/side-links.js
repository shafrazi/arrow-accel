import { useState, useContext } from "react";
import LinkItem from "./link-item";
import Container from "./container";
import { AppContext } from "../app-context";
import SideLinkContent from "./side-link-content";

export default function SideLinks() {
  const { sideContent, linkClicked, startLinkAnimation } =
    useContext(AppContext);

  console.log(startLinkAnimation);

  return (
    <Container>
      <div className="flex w-1/2 flex-col">
        <LinkItem
          name="House TMM"
          content="T M M is a design studio which delivers graphic design and visual communication to clients and collaborators who are looking for engaging and strong output that is able to challenge expectations and goals."
        />
        <LinkItem
          name="K-Line media"
          content="K-line achieves objectives through measurable and accountable marketing. They work as an extension of your team by filling the gaps with the right specialists. Our full-service capabilities allow us to provide professional recommendations a;nd solutions across every aspect of your marketing."
        />
        <LinkItem
          name="Neely & daughters"
          content="Neely & Daughters is a think tank, creative incubator, and studio where visionary innovations are born. Neely & Daughters are renegade creatives producing revolutionary content embraced by millions over the world."
        />
      </div>
      <SideLinkContent sideContent={sideContent} />
    </Container>
  );
}
