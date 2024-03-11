import React from 'react'
import { getImagrUrl } from '../../utils'
import styles from "./About.module.css"
export const About = () =>{
    return (
        <section className={styles.container} id="about">
        <h2 className={styles.title}>About</h2>
        <div className={styles.content}>
        <img className={styles.aboutImage}
        src={getImagrUrl("about/aboutImage.png")} 
        alt="Me sitting with a laptop"/>
        <ul className={styles.aboutItems}>
            <li className={styles.aboutItem}><img 
            src={getImagrUrl("about/graduate.png")}
            alt="Graduation Icon"/>
            <div className={styles.aboutItemText}>
                <h3>B.Tech-Civil Engineering - 82.2%</h3>
                <p>National Institute of Technology Agartala<br></br>
                   2018 - 2022</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img 
            src={getImagrUrl("about/high-school.png")}
            alt="high-school Icon"/>
            <div className={styles.aboutItemText}>
                <h3>Class XII - 98.7%</h3>
                <p>Trinity junior college <br></br>
                 2016 - 2018</p>
            </div>
            </li>
            <li className={styles.aboutItem}><img 
            src={getImagrUrl("about/backpack.png")}
            alt="Bag Icon"/>
            <div className={styles.aboutItemText}>
                <h3>Class X - 98%</h3>
                <p>Sri suryodaya high school<br></br>
                 2015 - 2016</p>
            </div>
            </li>
            
        </ul>
        </div>
        </section>
    )
}
