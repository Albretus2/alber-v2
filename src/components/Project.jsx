// img of tasty food
import TfDashboardImg from "./../assets/tastyfood/dashboard.png";
import TfLoginImg from "./../assets/tastyfood/login.png";
import TfLandingPageImg from "./../assets/tastyfood/landingpage.png";

// img of mjs
import mjs1 from "./../assets/mjs/mjs1.png";
import mjs2 from "./../assets/mjs/mjs2.png";
import mjs3 from "./../assets/mjs/mjs3.png";

export default function Project() {
  const TfImage = [TfDashboardImg, TfLandingPageImg, TfLoginImg];
  const MjsImage = [mjs1, mjs2, mjs3];

  return (
    <div className="myWork mb-12">
      <p className="mb-4 opacity-50 text-sm">what I can do -</p>
      <p className="mb-4">
        quite familiar with laravel, because most of the projects that I create
        use laravel and for the database using mysql. here are skills i have
      </p>
      <div className="p-4 mb-4 bg-primary text-sm shadowPixel mx-1 text-dark leading-6">
        <Code />
      </div>
      <p className="mb-4">Here &apos;s some work I made recently :</p>
      <div className="flex flex-wrap gap-4 text-center text-dark  mb-4">
        {/* open drawer  */}
        <Drawer
          id="drawer-1"
          title="Mega Jasa Surya"
          img={MjsImage}
          github="https://github.com/Albretus2/MegaJasaSurya"
          linkOpen="https://mega-jasa-surya.vercel.app/"
        />
        <Drawer
          id="drawer-2"
          title="Tasty Food"
          img={TfImage}
          github="https://github.com/Albretus2/TastyFood"
        />
        {/* triger drawer */}
        <label
          htmlFor="drawer-1"
          className="work bg-primary py-8 shadowPixel grow inline-block font-pixel">
          MJS
        </label>
        <label
          htmlFor="drawer-2"
          className="work bg-accent py-8 shadowPixel2 grow inline-block font-pixel">
          Tasty Food
        </label>
      </div>
    </div>
  );
}

const Code = () => {
  return (
    <code>
      const skills = &#123; <br />
      &ensp; framework:&#91; <br />
      &emsp;&emsp; &apos;Laravel&apos;, &apos;React&apos;,
      &apos;Tailwindcss&apos;, &apos;Bootstrap&apos; <br />
      &ensp; &#93;,
      <br />
      &ensp; Database:&#91;&apos;mysql&apos;&#93;, <br />
      &ensp; Tools:&#91;&apos;Photoshop&apos;, &apos;Figma&apos;&#93; <br />
      &#125;
    </code>
  );
};

const Drawer = ({ id, title, img, github, linkOpen }) => {
  const checkOpenLink = () => {
    if (id != "drawer-2") {
      return (
        <a href={linkOpen} className="hover:animate-blink" target="_blank">
          <svg
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="w-8">
            {" "}
            <path
              d="M3 21V3h18v18H3zM19 5H5v14h14V5zM7 13v-2h6V9h2v2h2v2h-2v2h-2v-2H7zm4 2h2v2h-2v-2zm0-8v2h2V7h-2z"
              fill="currentColor"
            />{" "}
          </svg>
        </a>
      );
    }
  };

  return (
    <div className="drawer drawer-end z-10">
      <input id={id} type="checkbox" className="drawer-toggle" />
      <div className="drawer-content"></div>
      <div className="drawer-side">
        <label
          htmlFor={id}
          aria-label="close sidebar"
          className="drawer-overlay"></label>
        <div className="menu p-8 w-[15rem] lg:w-[30rem] min-h-full bg-primary text-dark ">
          {/* Sidebar content here */}
          <h1 className="tex-3xl font-pixel mb-8">{title}</h1>
          {img?.map((img) => (
            <img
              key={Math.random()}
              src={img}
              className="shadowForDrawer"
              loading="lazy"
            />
          ))}
          <div className="linkGroup flex flex-wrap justify-center gap-5">
            <a href={github} className="hover:animate-blink" target="_blank">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                className="w-8">
                {" "}
                <path
                  fill="currentColor"
                  d="M5 2h4v2H7v2H5V2Zm0 10H3V6h2v6Zm2 2H5v-2h2v2Zm2 2v-2H7v2H3v-2H1v2h2v2h4v4h2v-4h2v-2H9Zm0 0v2H7v-2h2Zm6-12v2H9V4h6Zm4 2h-2V4h-2V2h4v4Zm0 6V6h2v6h-2Zm-2 2v-2h2v2h-2Zm-2 2v-2h2v2h-2Zm0 2h-2v-2h2v2Zm0 0h2v4h-2v-4Z"
                />{" "}
              </svg>
            </a>
            {checkOpenLink()}
          </div>
        </div>
      </div>
    </div>
  );
};
