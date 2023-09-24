import Link from './Link';
import {
  EnvelopeIcon,
  GithubIcon,
  LinkedinIcon,
  MediumIcon,
  LocationIcon,
} from '../icons';

function SocialList() {
  return (
    <div className="flex ml-[-0.75rem]">
      <Link to="mailto:pinky.gtm@outlook.com">
        <EnvelopeIcon />
      </Link>
      <Link to="https://www.linkedin.com/in/pinky-gautam/">
        <LinkedinIcon />
      </Link>
      <Link to="https://github.com/ppkgtmm/">
        <GithubIcon />
      </Link>
      <Link to="https://medium.com/@ppkgtmm">
        <MediumIcon />
      </Link>
      <Link to="https://goo.gl/maps/XvfHavq873BBm7fb9">
        <LocationIcon />
      </Link>
    </div>
  );
}

export default SocialList;
