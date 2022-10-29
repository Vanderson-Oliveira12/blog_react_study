import style from './style.module.scss';
import Logo from '../../svg/HotCoffee.svg';
import instagramIco from '../../svg/INSTAGRAM.svg';
import twitterIco from '../../svg/TWITTER.svg';
import linkedinIco from '../../svg/LINKEDIN.svg';
import Search from '../../svg/search.svg';

export default function Nav() {
  return (
    <nav className={style.nav}>
      <img src={Logo} alt="Logo HotCoffe"></img>
      <div className={style.nav_search}>
        <label htmlFor="search">
          <img src={Search} alt="Pesquisar"></img>
        </label>
        <input type="search" id="search" name="search" placeholder="Pesquisar..."></input>
      </div>
      <ul className={style.nav_links}>
        <li>
          <a href="/" title="Inicio">
            Inicio
          </a>
        </li>
        <li>
          <a href="/" title="Artigos">
            Artigos
          </a>
        </li>
        <li>
          <a href="/" title="Instagram">
            <img alt="Instagram" src={instagramIco}></img>
          </a>
        </li>
        <li>
          <a href="/" title="Twitter">
            <img alt="Twitter" src={twitterIco}></img>
          </a>
        </li>
        <li>
          <a href="/" title="Linkedin">
            <img src={linkedinIco} alt="Linkedin"></img>
          </a>
        </li>
      </ul>
    </nav>
  )
};