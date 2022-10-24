import './style.css';
import instagramIco from '../../svg/INSTAGRAM.svg';
import twitterIco from '../../svg/TWITTER.svg';
import linkedinIco from '../../svg/LINKEDIN.svg';

export default function Nav() {
    return (
        <nav className="nav">
            <div>
                Logo
            </div>
            <div className='nav-search'>
                <label for="search">
                    Lupa
                </label>
                <input type="search" id="search" name="search" placeholder="Pesquisar..."></input>
            </div>
            <ul className='nav-links'>
                <li>
                  <a href="">
                    Inicio
                  </a>
                </li>
                <li>
                  <a href="">
                    Artigos
                  </a>
                </li>
                <li>
                  <a href="">
                  <img src={instagramIco}></img>
                  </a>
                </li>
                <li>
                  <a href="">
                  <img src={twitterIco}></img>
                  </a>
                </li>
                <li>
                  <a href="">
                    <img src={linkedinIco}></img>
                  </a>
                </li>
            </ul>
        </nav>
    )
};