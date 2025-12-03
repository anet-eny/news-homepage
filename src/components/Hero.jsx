import imageMobile from "../assets/image-web-3-mobile.jpg";
import imageDesktop from "../assets/image-web-3-desktop.jpg";
import Button from "./Button";
import FeaturedArcticles from "./FeaturedArticles";

export default function Hero() {
  return (
    <section className="sm:grid sm:gap-x-8 sm:[grid-template-areas:'picture_picture_articles'_'heading_main-content_articles'] sm:grid-cols-[1fr_1fr_1fr] sm:[grid-rows:1fr_1fr]">
      <picture className="sm:[grid-area:picture]">
        <source srcSet={imageDesktop} media="(min-width: 55rem)" />
        <img src={imageMobile} alt="Colorful wooden bricks and sticks" />
      </picture>
      <h1
        className="text-preset-2 sm:text-preset-1 py-6 sm:py-0 sm:[grid-area:heading]"
        style={{ fontSize: "clamp(2.5rem, 4vw + 1rem, 3.5rem)" }}
      >
        The Bright Future of Web 3.0?
      </h1>
      <div className="pb-10 sm:pb-0 sm:[grid-area:main-content]">
        <p className="text-preset-6 pb-6">
          We dive into the next evolution of the web that claims to put the
          power of the platforms back into the hands of the people. But is it
          really fulfilling its promise?
        </p>
        <Button className="self-start">Read more</Button>
      </div>
      <FeaturedArcticles className="sm:[grid-area:articles]" />
    </section>
  );
}
