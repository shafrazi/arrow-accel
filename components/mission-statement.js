import MissionBanner from "./mission-banner";
import MissionItem from "./mission-item";
import { IoRocket } from "react-icons/io5";
import { FaThumbsUp } from "react-icons/fa";
import { BsLightningFill } from "react-icons/bs";

export default function MissionStatement() {
  return (
    <div className="w-full flex flex-col bg-black pb-12 md:pb-16">
      <MissionBanner />
      <MissionItem
        icon={[<IoRocket key={1} />]}
        title={<h2>We are on a mission</h2>}
        description="
        Our mission is  to create, commercialize, and capture strategic value sustainably as we take interest into humanitarian and philanthropic ventures to address global issues"
      />
      <MissionItem
        icon={[<FaThumbsUp key={2} />]}
        title={<h2>Promoting good ideas</h2>}
        description={
          <div>
            <p>
              We promote products, ideas and companies, that inspire and
              prioritize the best interest of the world and the quality of
              peoples lives.
            </p>
            <p className="mt-4">
              We are set on delivering you the means to identify, inform, engage
              with and activating your target audience. Our aim is to shorten,
              sharpen and refine the trajectory to your brightest goals
            </p>
          </div>
        }
      />
      <MissionItem
        icon={[<BsLightningFill key={3} />]}
        title={<h2>and accelerating progress</h2>}
        description={
          <div>
            <p>
              Our decisions are based on data and research, leaning on our
              extensive experience, working for companies and organizations who
              have their ambitions set beyond the horizon.
            </p>
            <p className="mt-4">
              We connect sharp minds to accelerate extraordinary development
            </p>
          </div>
        }
      />
    </div>
  );
}
