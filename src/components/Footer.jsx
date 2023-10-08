import Social from "./social";

function Footer() {
  return (
    <footer className="w-full bg-black">
      <div className="component py-10 lg:py-16 flex justify-end md:justify-between">
        <div className="hidden md:block md:visible">
          <Social />
        </div>
        <p className="font-light text-white text-lg py-[11px]">© 2023 Pinky Gautam</p>
      </div>
    </footer>
  );
}

export default Footer;
