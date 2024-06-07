import Footer from "./footer";
import About from "./AboutMe";
import Project from "./Project";
import Passion from "./Passion";

import hono from "./../assets/hono.gif";
import anim1 from "./../assets/anim1.gif";
import anim2 from "./../assets/anim2.gif";

export default function Main() {
  return (
    <main>
      {/* <!-- gif --> */}
      <div className="fireAnime   w-24 h-24 md:top-[17rem] lg:top-[23rem] fixed md:inline-block hidden">
        <Anim />
        <img
          className="animDialog scale-0 w-8 h-8 absolute -left-5 transition ease-in duration-500"
          alt=""
          loading="lazy"
        />
        <img src={hono} loading="lazy" />
      </div>

      {/* <!-- main body --> */}
      <div className="w-full md:w-[24rem] lg:w-[36rem] mx-auto px-10 md:px-0 text-md tracking-widest leading-7">
        {/* <!-- about me section --> */}
        <About />
        {/* <!-- skill and project section --> */}
        <Project />
        {/* <!-- passion section --> */}
        <Passion />
        {/* <!-- footer --> */}
        <Footer />
      </div>
    </main>
  );
}

const Anim = () => {
  let count = 0;
  setInterval(() => {
    const img = document.querySelector(".animDialog");
    count = count + 1;
    if (count > 2) {
      img.setAttribute("src", anim1);
      img.classList.add("transitionAnim");
    }
    if (count == 20) img.classList.remove("transitionAnim");
    if (count > 20) {
      img.setAttribute("src", anim2);
      img.classList.add("transitionAnim");
    }
    if (count == 30) {
      img.classList.remove("transitionAnim");
      count = 0;
    }
  }, 1000);
};
