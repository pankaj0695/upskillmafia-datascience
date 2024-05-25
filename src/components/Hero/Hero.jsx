import { HashLink } from 'react-router-hash-link';

import hatImage from '../../assets/graduation-hat.svg';
import awardStarImage from '../../assets/award-star.svg';
import planeImage from '../../assets/paper-plane.svg';
import interrogationImage from '../../assets/interrogation.svg';
import completeImage from '../../assets/complete.svg';
import graduatedImage from '../../assets/graduated.svg';
import onlineLearningImage from '../../assets/online-learning.svg';
import questionMarkImage from '../../assets/question-mark.svg';

import classes from './Hero.module.css';

function Hero() {
  return (
    <div id='overview'>
      <div className={classes.navbar}>
        <div className={classes['nav-container']}>
          <HashLink smooth to='/#overview' className={classes['nav-link']}>
            Overview
          </HashLink>
          <HashLink smooth to='/#cirriculum' className={classes['nav-link']}>
            Cirriculum
          </HashLink>
          <HashLink smooth to='/#refund' className={classes['nav-link']}>
            Refund
          </HashLink>
          <HashLink smooth to='/#testimonials' className={classes['nav-link']}>
            Testimonials
          </HashLink>
        </div>
      </div>
      <div className={classes.hero}>
        <div className={classes['hero-container']}>
          <div className={classes['iit-delhi']}>
            <img src={hatImage} className={classes.hat} />
            An <span className={classes.bold}>IIT Delhi</span> Alumni Initiative
          </div>
          <h1 className={classes.heading1}>
            Become an Expert in the field of{' '}
            <span className={classes.purple}>Data Science with 6 courses</span>
          </h1>
          <p className={classes.heading2}>
            A specially crafted Tech Kickstarter, with{' '}
            <span className={classes.medium}>5+ extensive online courses.</span>
          </p>
          <ul className={classes.tags}>
            {[
              'Personal Mentorship',
              'Internship Assistance',
              'Industry Certified Courses',
            ].map(tag => (
              <li key={tag} className={classes.tag}>
                <img src={awardStarImage} className={classes.awardStar} />
                {tag}
              </li>
            ))}
          </ul>
          <div className={classes['button-wrapper']}>
            <button className={classes.button1}>
              Enroll Now <img src={planeImage} />
            </button>
            <button className={classes.button2}>
              Know More <img src={interrogationImage} />
            </button>
          </div>
          <ul className={classes.features}>
            <li className={classes.feature}>
              <img src={graduatedImage} />
              <div>
                <h2 className={classes.number}>24</h2>
                <p className={classes.title}>Courses</p>
              </div>
            </li>
            <div className={classes.vl} />
            <li className={classes.feature}>
              <img src={onlineLearningImage} />
              <div>
                <h2 className={classes.number}>30k+</h2>
                <p className={classes.title}>Learners</p>
              </div>
            </li>
            <div className={classes.vl} />
            <li className={classes.feature}>
              <img src={questionMarkImage} />
              <div>
                <h2 className={classes.number}>100k+</h2>
                <p className={classes.title}>Doubts Solved</p>
              </div>
            </li>
            <div className={classes.vl} />
            <li className={classes.feature}>
              <img src={completeImage} />
              <div>
                <h2 className={classes.number}>10k+</h2>
                <p className={classes.title}>Student Projects</p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Hero;
