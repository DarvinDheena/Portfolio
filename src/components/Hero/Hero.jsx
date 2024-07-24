import React from 'react';
import styles from './Hero.module.css'
import { getImageUrl } from '../../utils';

function Hero() {
  return (
    <section className={ styles.container}>
        <div className={ styles.content }>
            <h1 className={ styles.title }>Hi, I'm Darvin</h1>
            <p className={ styles.description }> I'm a full-stack developer certified by  Guvi-IITM Research  Park . Reach out if you'd like to learn more!</p>
            <a href='mailto:darvindheena98@gmail.com' 
               className={ styles.contactBtn }>Contact Me
            </a>
        </div>
        <img 
            src={ getImageUrl('about/image-resume.png')}
            alt='Image of me'
            className={ styles.heroImg}
        />
        <div className={ styles.topBlur}/>
        {/* <div className={ styles.bottomBlur}/> */}
    </section>
  )
}

export default Hero;