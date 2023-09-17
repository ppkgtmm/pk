import SocialList from "./SocialList";

function Footer() {
  return (
    <footer className="bg-black">
      <div className="mx-4 md:mx-12 lg:mx-[20vw] xl:mx-[25vw] px-4 py-10 lg:px-8 lg:py-16 flex justify-end md:justify-between">
        <div className="hidden md:block md:visible">
          <SocialList />
        </div>
        <p className="font-light text-white py-[11px]">© 2023 Pinky Gautam</p>
      </div>
    </footer>
  );
}

export default Footer;
