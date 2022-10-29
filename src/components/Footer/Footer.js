import style from './style.module.scss';
import instagramIco from '../../svg/INSTAGRAM.svg';
import twitterIco from '../../svg/TWITTER.svg';
import linkedinIco from '../../svg/LINKEDIN.svg';

const dateToday = new Date().getFullYear();

export default function Footer() {
    return (
        <footer className={style.footer}>
            <p className={style.footer_content}>
                <strong>hotcoffe </strong>
                {dateToday} todos os direitos reservados
            </p>
            <ul className={style.footer_link}>
                <li>
                    <a href="#">
                        <img alt="Acompanhe as nossas redes sociais" src={instagramIco}></img>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img alt="Acompanhe as nossas redes sociais" src={twitterIco}></img>
                    </a>
                </li>
                <li>
                    <a href="#">
                        <img alt="Acompanhe as nossas redes sociais" src={linkedinIco}></img>
                    </a>
                </li>
            </ul>
        </footer>
    )
}
