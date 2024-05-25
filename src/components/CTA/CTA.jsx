import buttonTagImage from '../../assets/button-tag.svg';
import classes from './CTA.module.css';

function CTA() {
  return (
    <section className={classes.cta}>
      <div className={classes['cta-container']}>
        <div className={classes['cta-content1']}>
          <div className={classes['cta-left1']}>
            <h1>
              Enroll For DataScience Bundle @₹1,499{' '}
              <span className={classes['original-price']}>₹2,600</span>
            </h1>
            <p>
              Become an Expert in the data science field by enrolling into 6
              Extensive courses!
            </p>
            <button className={classes['cta-button1']}>
              <img src={buttonTagImage} />
              Enroll Now
            </button>
          </div>
          <div className={classes['cta-right1']}>
            <p>
              Total number of Courses
              <br />
              <strong>6</strong>
            </p>
            <p>
              Total number of Certificates
              <br />
              <strong>6</strong>
            </p>
            <p>
              Access to Courses
              <br />
              <strong>Lifetime</strong>
            </p>
          </div>
        </div>
        <div className={classes['cta-content2']}>
          <div className={classes['cta-left2']}>
            <h1>
              Enroll For DataScience Bundle @₹1,499{' '}
              <span className={classes['original-price']}>₹2,600</span>
            </h1>
            <p>
              Become an Expert in the data science field by enrolling into 6
              Extensive courses!
            </p>
            <button className={classes['cta-button2']}>
              <img src={buttonTagImage} />
              Enroll Now
            </button>
          </div>
          <div className={classes['cta-right2']}>
            <p>
              Total number of Courses
              <br />
              <strong>6</strong>
            </p>
            <p>
              Total number of Certificates
              <br />
              <strong>6</strong>
            </p>
            <p>
              Access to Courses
              <br />
              <strong>Lifetime</strong>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default CTA;
