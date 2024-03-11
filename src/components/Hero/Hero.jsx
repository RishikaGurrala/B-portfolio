import React from 'react'
import { getImagrUrl } from '../../utils'
import styles from './Hero.module.css'
export const Hero=()=>{
    return (
    <section className={styles.container}>
        <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Bharath</h1>
        <p className={styles.description}>
        Seeking an entry-level opportunity with an esteemed 
        organization where I can utilize my skills and enhance 
        learning in the field of work. Capable of mastering new technologies
        </p>
        <a className={styles.contactBtn} href="mailto:bharathkatkam23@gmail.com"
        >Contact Me</a>
       </div>
       <img className={styles.heroImg} src={getImagrUrl("hero/heroImage.png")} 
        alt="Image of me"/>
       <div className={styles.topBlur}/>
       <div className={styles.bottomBlur}/>

    </section>
    )
}