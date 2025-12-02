import imageMobile from "../assets/image-web-3-mobile.jpg";
import imageDesktop from "../assets/image-web-3-desktop.jpg";
import Button from "./Button";

export default function Hero() {
  return (
    <section className="flex flex-col gap-6">
      <picture>
        <source srcSet={imageDesktop} media="(min-width: 40rem)" />
        <img src={imageMobile} alt="Colorful wooden bricks and sticks" />
      </picture>
      <h1
        className="text-preset-2 sm:text-preset-1"
        style={{ fontSize: "clamp(2.5rem, 4vw + 1rem, 3.5rem)" }}
      >
        The Bright Future of Web 3.0?
      </h1>
      <p className="text-preset-6">
        We dive into the next evolution of the web that claims to put the power
        of the platforms back into the hands of the people. But is it really
        fulfilling its promise?
      </p>
      <Button className="self-start">Read more</Button>
    </section>
  );
}
