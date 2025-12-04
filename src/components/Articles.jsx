import retroPcs from "../assets/image-retro-pcs.jpg";
import gamingGrowth from "../assets/image-gaming-growth.jpg";
import topLaptops from "../assets/image-top-laptops.jpg";

export default function Articles() {
  return (
    <section className="flex flex-col gap-8 mt-12 sm:grid sm:grid-cols-[1fr_1fr_1fr] [&_a]:flex [&_a]:gap-6 [&_h4]:text-preset-5 [&_h4]:text-navy-950 [&_p]:text-preset-6 [&_p]:text-navy-600 [&_img]:max-w-[100px] [&_img]:object-cover [&_img]:h-full">
      <article>
        <a href="/">
          <img
            src={retroPcs}
            alt="Miniature retro computers with neon lighting and joystick"
          />
          <div>
            <h2 className="text-preset-3 text-red-500">01</h2>
            <h4>Reviving Retro PCs</h4>
            <p>What happens when old PCs are given modern upgrades?</p>
          </div>
        </a>
      </article>
      <article>
        <a href="/">
          <img
            src={topLaptops}
            alt="Gaming controller buttons with red backlighting"
          />
          <div>
            <h2 className="text-preset-3 text-red-500">02</h2>
            <h4>Top 10 Laptops of 2022</h4>
            <p>Our best picks for various needs and budgets.</p>
          </div>
        </a>
      </article>
      <article>
        <a href="/">
          <img
            src={gamingGrowth}
            alt="White PlayStation controller floating above hand"
          />
          <div>
            <h2 className="text-preset-3 text-red-500">03</h2>
            <h4>The Growth of Gaming</h4>
            <p>How the pandemic has sparked fresh opportunities.</p>
          </div>
        </a>
      </article>
    </section>
  );
}
