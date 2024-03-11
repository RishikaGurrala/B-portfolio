import React from 'react'
import { getImagrUrl } from '../../utils'
import styles from './Contact.module.css'
export const Contact =()=>{
    return (
        <footer className={styles.container} id="contact" >
            <div className={styles.text}>
                <h2>Contact</h2>
                <p>Feel free to reach out</p>
            </div>
            <ul className={styles.links}>
               <li className={styles.link}>
                <img src={getImagrUrl("contact/emailIcon.png")} alt="Email Icon"/>
                <a href="mailto:bharathkatkam23@email.com">bharathkatam23@email.com</a>
               </li>
               <li className={styles.link}>
                <img src={getImagrUrl("contact/linkedinIcon.png")} alt="LinkedIn Icon"/>
                <a href="https://www.linkedin.com/in/rishikagurrala">linkedin.com/in/katkam-bharathchandra-0747801b6</a>
               </li>
               <li className={styles.link}>
                <img src={getImagrUrl("contact/githubIcon.png")} alt="GithubIcon Icon"/>
                <a href="https://www.github.com/RishikaGurrala">github.com/BharathKatkam</a>
               </li>
            </ul>
        </footer>
    )
}