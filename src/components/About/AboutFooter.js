import { Link } from 'react-router-dom';
import './AboutFooter.css';


const AboutFooter=()=> {
  return <footer className="about-footer">
    <h2>The Generics</h2>
    <div className="contact-info">
      <Link to='#'><img src='https://tse3.mm.bing.net/th?id=OIP.vSi-idUzziuTxCbCHeetKAHaFL&pid=Api&P=0&h=180' alt="not found" /></Link>
      <Link to='#'><img src='https://tse1.mm.bing.net/th?id=OIP.C86kYL4m3KcpcRSrnhhLtQHaHa&pid=Api&rs=1&c=1&qlt=95&w=110&h=110' alt="not found" /></Link>
      <Link to='#'><img src='https://tse1.mm.bing.net/th?id=OIP.55DCXbXlKDgEBoZhKxpzLAHaHa&pid=Api&rs=1&c=1&qlt=95&w=119&h=119' alt="not found" /></Link>
    </div>
  </footer>
};

export default AboutFooter;