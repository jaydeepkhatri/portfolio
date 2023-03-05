import { FaCoffee } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import './Footer.scss';

function Footer() {
  return (
    <footer className="footer">
      Made with
      <AiFillHeart />
      &amp;
      <FaCoffee />
      by JD.
    </footer>
  );
}

export default Footer;
