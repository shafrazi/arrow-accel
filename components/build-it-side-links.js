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
            name="Art & entertainment"
            content={
              <div>
                <p>
                  As a brand, collective or independent artist, in order to
                  succeed you must master both the creative and the strategic
                  side of your business.
                </p>
                <p className="mt-6">
                  We work for and with artists, and creative entrepreneurs to
                  create and promote commercially viable new business, products
                  and projects, using keen strategic and marketing insight and
                  powerful design.
                </p>
              </div>
            }
          />
          <LinkItem
            name="Future technologies"
            content={
              <div>
                <p>
                  The world around us is rapidly changing and a clear view of
                  what the future holds, is diluted by every deeper avenue that
                  technological advance takes us into. It can be hard to keep
                  up, let alone to stay ahead. We are ahead of the tech curve.
                </p>
                <p className="mt-6">
                  Our background in innovative media and fintech spans two
                  decades. Our knowledge pool covers banks, consultants,
                  insurers, cybersecurity, digital asset trading, biomimetic
                  development and fintech companies.
                </p>
              </div>
            }
          />
          <LinkItem
            name="Transformational technology"
            content={
              <div>
                <p>
                  Digital transformation is a key word in marketing toolbox
                  nowadays. To us, it's more than just a phrase.
                </p>
                <p className="mt-6">
                  We are digital transformation leaders, able to tokenize
                  real-world and digital assets. Our AR/VR/Metaverse and blended
                  experiences make your projects come to life.
                </p>
              </div>
            }
          />
          <LinkItem
            name="Investment readiness"
            content={
              <div>
                <p>
                  Through our global network we are able to make introductions
                  to capital sources for project of any size and strategy,
                  growth equity, funds and philantropy for sustainable
                  investment solutions.
                </p>
                <p className="mt-6">
                  With the right marketing & sales collateral we work on
                  sharpening your aim to shoot for the moon.
                </p>
              </div>
            }
          />
        </div>
        <SideLinkContent
          centerItems={false}
          showLinkName={true}
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
