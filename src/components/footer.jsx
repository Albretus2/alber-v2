// icon get in touch
import email from "./../assets/icons/email.svg";
import instagram from "./../assets/icons/instagram.svg";
import linkedin from "./../assets/icons/linkedin.svg";
import twiter from "./../assets/icons/twiter.svg";

export default function Footer() {
  return (
    <footer className="mt-8">
      <p className="mb-8">
        Hi guys, thanks for visiting and enjoying my website, if interested in
        working with me or getting to know more about me
      </p>
      <p className="mb-16">here are some ways to get in touch.</p>

      <div className="getInTouch flex flex-wrap px-3 justify-between items-center">
        <Link href="mailto:aichvan22@gmail.com" src={email} />
        <Link href="https://www.instagram.com/alberrrr_r/" src={instagram} />
        <Link
          href="https://www.linkedin.com/in/a-ichvanius-giharta-5011a0308/"
          src={linkedin}
        />
        <Link href="https://x.com/Stanleyy_r" src={twiter} />
      </div>
    </footer>
  );
}

const Link = ({ href, src }) => {
  return (
    <a href={href} target="_blank">
      <img src={src} alt="" className="get-in-touch-link" />
    </a>
  );
};
