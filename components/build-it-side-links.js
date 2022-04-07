import { useState, useContext } from "react";
import LinkItem from "./link-item";
import Container from "./container";
import { AppContext } from "../app-context";
import SideLinkContent from "./side-link-content";
import BuildItMobileSideLinks from "./build-it-mobile-side-links";

export default function BuildItSideLinks() {
  const { sideContent, linkClicked, startLinkAnimation } =
    useContext(AppContext);

  return (
    <Container topMargin={0} backgroundColor="bg-black">
      <div className="hidden lg:flex flex-row-reverse w-full text-white">
        <div className="flex w-1/2 flex-col">
          <LinkItem
            defaultClicked={true}
            name="Energy transition"
            content={
              <div>
                <p>
                  We are committed to drive the energy transition past Net Zero
                  targets to meet 1.5 ºC sustainability goals of the Paris
                  Agreement. The transition needs to be accelerated as the world
                  is running our of time.
                </p>
                <p className="mt-6">
                  We create compelling content for companies and foundations
                  that actively address contemporary challenges with
                  breakthrough solutions that contribute to protecting nature
                  and life on Earth.
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
                We are committed to drive the energy transition past Net Zero
                targets to meet 1.5 ºC sustainability goals of the Paris
                Agreement. The transition needs to be accelerated as the world
                is running our of time.
              </p>
              <p className="mt-6">
                We create compelling content for companies and foundations that
                actively address contemporary challenges with breakthrough
                solutions that contribute to protecting nature and life on
                Earth.
              </p>
            </div>
          }
        />
      </div>
      <div className="lg:hidden flex w-full">
        <BuildItMobileSideLinks />
      </div>
    </Container>
  );
}
