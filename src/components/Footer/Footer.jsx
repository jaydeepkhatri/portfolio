import { FaCoffee } from 'react-icons/fa';
import { AiFillHeart } from 'react-icons/ai';
import './Footer.scss';

function Footer() {
  return (
    <div className="footer">
      Made with
      <AiFillHeart />
      &amp;
      <FaCoffee />
      by JD.
    </div>
  );
}

export default Footer;
