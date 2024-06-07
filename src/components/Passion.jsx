// poster
import drift from "./../assets/drift.jpg";
import iHope from "./../assets/iHope.jpg";
import project1 from "./../assets/project1.jpg";
import whoLaughs from "./../assets/whoLaughs.jpg";

export default function Passion() {
  return (
    <div className="passion">
      <p className="mb-4">
        besides that, I also have a passion for graphic design, sometimes I like
        to make posters and get jobs because of that. check out my work at
        <a
          href="https://www.instagram.com/disctar.studio/"
          target="_blank"
          className="underline text-accent hover:italic">
          @disctar.studio
        </a>
      </p>
      <p className="mb-4">some of the poster designs I made :</p>
      <div className="carousel carousel-center w-full space-x-4 rounded-box p-3 z-0">
        <Image src={iHope} />
        <Image src={drift} />
        <Image src={whoLaughs} />
        <Image src={project1} />
      </div>
    </div>
  );
}

const Image = ({ src }) => {
  return (
    <div className="carousel-item shadowPixelCarousel">
      <img src={src} className="imgCarousel" loading="lazy" />
    </div>
  );
};
