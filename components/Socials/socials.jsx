import Image from 'next/image';
import styles from './socials.module.scss';
import { SOCIAL_MEDIA_HANDLES } from "./socials-data"

export const Socials = () => (
    <ul className={styles.socialsList}>
        {
          SOCIAL_MEDIA_HANDLES.map((social, index) => (
            <li key={index} title={social.title}>
                <a href={social.link} rel="noreferrer" target="_blank">
                    <Image src={social.src} width={30} height={30}/>
                </a>
            </li>
          ))  
        }
    </ul>
)