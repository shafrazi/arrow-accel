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
                  Margo Neely and Robert Schaeffer teamed up to provide business
                  development, communication strategy, leadership coaching, and
                  a full suite of brand identity for AFFIRM: The American
                  Foundation for Firearm Injury Reduction in Medicine.
                </p>
                <button className="w-2/3 text-[13px] md:text-base md:w-2/3 self-start md:ml-0 md:self-start border-white border-solid border-2 mt-12 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
                  read more
                </button>
              </div>
            }
          />
          <LinkItem name="FLOES / FINANCIAL HEALTH" content="" />
          <LinkItem name="LASER 3.14" content="" />
          <LinkItem name="METAVERSE" content="" />
        </div>
        <SideLinkContent
          centerItems={false}
          showLinkName={false}
          defaultContent={
            <div>
              <p>
                Margo Neely and Robert Schaeffer teamed up to provide business
                development, communication strategy, leadership coaching, and a
                full suite of brand identity for AFFIRM: The American Foundation
                for Firearm Injury Reduction in Medicine.
              </p>
              <button className="w-2/3 text-[13px] md:text-base md:w-2/3 self-start md:ml-0 md:self-start border-white border-solid border-2 mt-12 text-white uppercase px-2 py-1 md:py-2 rounded tracking-wide">
                read more
              </button>
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
