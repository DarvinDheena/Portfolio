import React from 'react';
import styles from './Contacts.module.css'
import { getImageUrl } from '../../utils';

function Contacts() {
  return (
    <footer id="contact" className={styles.container}  >
        <div className="container">
            <div className="row">
                <div className="col">
                    <div className={styles.text}>
                    <h2>Contact</h2>
                    <p>Feel free to reach out!</p>
                </div>
                </div>
                <div className="col">
                <ul className={styles.links}>
                <li className={styles.link}>
                <img src={getImageUrl("contacts/emailIcon.png")} alt="Email icon" />
                <a href="mailto:myemail@email.com">darvindheena98@email.com</a>
                </li>
                <li className={styles.link}>
                <img src={getImageUrl("contacts/githubIcon.png")} alt="Github icon" />
                <a href="https://www.github.com/DarvinDheena">github.com/DarvinDheena</a>
                </li>
            </ul>
                </div>
            </div>
           
            
        </div>
        </footer>
  )
}

export default Contacts;