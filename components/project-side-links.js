import { useState, useContext } from "react";
import LinkItem from "./link-item";
import Container from "./container";
import { AppContext } from "../app-context";
import SideLinkContent from "./side-link-content";
import ProjectMobileSideLinks from "./project-mobile-side-links";

export default function ProjectSideLinks() {
  const { sideContent, linkClicked, startLinkAnimation } =
    useContext(AppContext);

  return (
    <Container topMargin={0} backgroundColor="bg-black">
      <div className="hidden lg:flex flex-row-reverse w-full text-white">
        <div className="flex w-1/2 flex-col">
          <LinkItem
            defaultClicked={true}
            name="AFFIRM RESEARCH"
            content={
              <div>
                <p>
                  We promote products, ideas and companies, that inspire and
                  prioritize the best interest of the world and the quality of
                  peoples lives. We promote products, ideas and companies, that
                  inspire and prioritize the best interest of the world and the
                  quality of peoples lives.
                </p>
                <p className="mt-6">
                  We promote products, ideas and companies, that inspire and
                  prioritize the best interest of the world and the quality of
                  peoples lives. We promote products, ideas and companies, that
                  inspire and prioritize the best interest of the world and the
                  quality of peoples lives.
                </p>
              </div>
            }
          />
          <LinkItem
            name="FLOES / FINANCIAL HEALTH"
            content="K-line achieves objectives through measurable and accountable marketing. They work as an extension of your team by filling the gaps with the right specialists. Our full-service capabilities allow us to provide professional recommendations and solutions across every aspect of your marketing."
          />
          <LinkItem
            name="LASER 3.14"
            content="Neely & Daughters is a think tank, creative incubator, and studio where visionary innovations are born. Neely & Daughters are renegade creatives producing revolutionary content embraced by millions over the world."
          />
          <LinkItem
            name="METAVERSE"
            content="Neely & Daughters is a think tank, creative incubator, and studio where visionary innovations are born. Neely & Daughters are renegade creatives producing revolutionary content embraced by millions over the world."
          />
        </div>
        <SideLinkContent
          centerItems={false}
          showLinkName={false}
          defaultContent={
            <div>
              <p>
                We promote products, ideas and companies, that inspire and
                prioritize the best interest of the world and the quality of
                peoples lives. We promote products, ideas and companies, that
                inspire and prioritize the best interest of the world and the
                quality of peoples lives.
              </p>
              <p className="mt-6">
                We promote products, ideas and companies, that inspire and
                prioritize the best interest of the world and the quality of
                peoples lives. We promote products, ideas and companies, that
                inspire and prioritize the best interest of the world and the
                quality of peoples lives.
              </p>
            </div>
          }
        />
      </div>
      <div className="lg:hidden flex w-full">
        <ProjectMobileSideLinks />
      </div>
    </Container>
  );
}
