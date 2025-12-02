export default function FeaturedArcticles() {
  return (
    <section className="sm:max-w-88 bg-navy-950 [&_a]:block [&_h3]:text-preset-4 [&_h3:hover]:text-gold-400 [&_p]:text-preset-6 [&_h3]:text-gray-300 [&_p]:text-gray-300 [&_article]:py-8 px-6 py-4">
      <h2 className="text-preset-3 text-gold-400">New</h2>
      <article>
        <a href="/">
          <h3>Hydrogen VS Electric Cars</h3>
          <p>Will hydrogen-fueled cars ever catch up to EVs?</p>
        </a>
      </article>
      <hr className="border-navy-600" />
      <article>
        <a href="/">
          <h3>The Downsides of AI Artistry</h3>
          <p>
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </a>
      </article>
      <hr className="border-navy-600" />
      <article>
        <a href="/">
          <h3>Is VC Funding Drying Up?</h3>
          <p>
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </a>
      </article>
    </section>
  );
}
