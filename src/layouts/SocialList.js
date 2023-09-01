import Link from "./Link";
import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  LocationIcon,
} from "../icons";

function SocialList() {
  return (
    <div className="flex ml-[-0.75rem]">
      <Link url="mailto:pinky.gtm@outlook.com">
        <EnvelopeIcon />
      </Link>
      <Link url="https://www.linkedin.com/in/pinky-gautam/">
        <LinkedinIcon />
      </Link>
      <Link url="https://github.com/ppkgtmm/">
        <GithubIcon />
      </Link>
      <Link url="https://medium.com/@ppkgtmm">
        <MediumIcon />
      </Link>
      <Link url="https://goo.gl/maps/XvfHavq873BBm7fb9">
        <LocationIcon />
      </Link>
    </div>
  );
}

export default SocialList;
