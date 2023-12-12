import Contact from "./Contact";

const Footer = () => {
  return (
    <footer className="footer items-center p-5 bg-slate-800 text-white flex-col-reverse">
        <nav className="">
    <Contact></Contact>
  </nav>
  <nav>
    <header className="footer-title">Services</header> 
    <a className="link link-hover">Branding</a>
    <a className="link link-hover">Design</a>
    <a className="link link-hover">Marketing</a>
    <a className="link link-hover">Advertisement</a>
  </nav> 
  <nav>
    <header className="footer-title">Company</header> 
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Jobs</a>
    <a className="link link-hover">Press kit</a>
  </nav> 
</footer>
  );
};

export default Footer;
