import testimonial1Image from '../../assets/testimonial1.svg';
import testimonial2Image from '../../assets/testimonial2.svg';
import awardStarImage from '../../assets/award-star2.svg';
import classes from './Testimonials.module.css';

function Testimonials() {
  return (
    <section className={classes.testimonials} id='testimonials'>
      <div className={classes.container}>
        <h1 className={classes.heading1}>
          Unlock <span className={classes.purple}>6 Certificates</span> &{' '}
          <span className={classes.purple}>Internship Opportunities!</span>
        </h1>
        <div className={classes['testimonial-container']}>
          <div className={classes.testimonial1}>
            <h2>Get 6 Industry Recognized Certificates!</h2>
            <img
              src={testimonial1Image}
              className={classes['testimonial1-img']}
            />
            <div className={classes.tags}>
              <div className={classes.tag}>
                <img src={awardStarImage} />
                Official and Verified
              </div>
              <div className={classes.tag}>
                <img src={awardStarImage} />
                Enhances Credibility
              </div>
            </div>
          </div>
          <div className={classes.testimonial2}>
            <h2>Bag Internship Opportunities!</h2>
            <p>
              With every course, we make you not only industry-ready but also
              help you crack your first internship.
            </p>
            <img src={testimonial2Image} />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
