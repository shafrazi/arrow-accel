import { useState, useContext } from "react";
import LinkItem from "./link-item";
import Container from "./container";
import { AppContext } from "../app-context";

export default function SideLinks({ links }) {
  const { sideContent } = useContext(AppContext);

  console.log(sideContent);
  return (
    <Container>
      <LinkItem
        name="House TMM"
        content="T M M is a design studio which delivers graphic design and visual communication to clients and collaborators who are looking for engaging and strong output that is able to challenge expectations and goals."
      />
      <LinkItem
        name="K-Line media"
        content="K-line achieves objectives through measurable and accountable marketing. They work as an extension of your team by filling the gaps with the right specialists. Our full-service capabilities allow us to provide professional recommendations a;nd solutions across every aspect of your marketing."
      />
    </Container>
  );
}
