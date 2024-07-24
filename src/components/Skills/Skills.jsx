import React from 'react'
import styles from './Skills.module.css';
import skills from '../../data/skills.json';
import history from '../../data/history.json';
import { getImageUrl } from '../../utils';

function Skills() {
  return (
    <section className={`${styles.container} container`} id="experience">
      <h2 className={styles.title}>Technical proficiency</h2>
      <div className={styles.content}>
        <div className={`${styles.skills} col-4`}>
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
        <ul className={`${styles.history} col-8`}>
        <img src="assets/certificates/FSD-Overall.png"  alt="hello" />        </ul>
      </div>
    </section>  
  )
}


export default Skills