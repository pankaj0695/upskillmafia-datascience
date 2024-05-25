import React, { useState, useEffect } from 'react';

import clockImg from '../../assets/clock.svg';
import enrollCourseImage from '../../assets/enroll-course.svg';
import classes from './Refund.module.css';

const Refund = () => {
  const [timeLeft, setTimeLeft] = useState(600);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prevTime => (prevTime > 0 ? prevTime - 1 : 0));
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const formatTime = seconds => {
    const minutes = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const progress = (600 - timeLeft) / 6;

  return (
    <section className={classes.refund} id='refund'>
      <div className={classes.container}>
        <h1 className={classes.header}>
          Don't miss out on this{' '}
          <span className={classes.purple}>limited-time opportunity</span> to
          learn for <span className={classes.purple}>Free!</span>
        </h1>
        <div className={classes.offerBox}>
          <h2 className={classes.offerHeader}>100% Refund Offer 😎</h2>
          <p className={classes.seats}>20 Seats Left</p>
          <div className={classes['progress-bar-container']}>
            <div className={classes['progress-bar']}>
              <div
                className={classes['progress-bar-fill']}
                style={{ width: `${progress}%` }}
              ></div>
              <div
                className={classes['progress-bar-handle']}
                style={{ left: `calc(${progress}% - 10px)` }}
              ></div>
            </div>
          </div>
          <p className={classes.time}>
            <img src={clockImg} />
            Offer ends in {formatTime(timeLeft)}Mins
          </p>
        </div>
        <h2 className={classes.heading2}>How does it work?</h2>
        <div className={classes['step-container']}>
          <div className={classes.line} />
          <div className={classes.steps}>
            <div className={classes.step}>
              <h3 className={classes.stepNo}>
                <span>Step</span> 1
              </h3>
              <div className={classes.stepBody}>
                <p className={classes.stepHeader}>
                  Step1: Enroll into your favorite course for only ₹1,499
                </p>
                <img src={enrollCourseImage} />
                <p className={classes.p}>
                  Start Learning with <b>Lifetime Course Access.</b>
                </p>
              </div>
            </div>
            <div className={classes.step}>
              <h3 className={classes.stepNo}>
                <span>Step</span> 2
              </h3>
              <div className={classes.stepBody}>
                <p className={classes.stepHeader}>
                  Step2: Complete Course & Assignments within 2 Years!
                </p>
                <div className={classes.stepFeature}>
                  <p className={classes.num}>2</p>
                  <p className={classes.text}>
                    years time from the date of enrollment
                  </p>
                </div>
                <p className={classes.p}>
                  Finish the course within <b>2 Years</b> to Qualify for Refund.
                </p>
              </div>
            </div>
            <div className={classes.step}>
              <h3 className={classes.stepNo}>
                <span>Step</span> 3
              </h3>
              <div className={classes.stepBody}>
                <p className={classes.stepHeader}>
                  Step3: Receive 100% Refund upon completion
                </p>
                <div className={classes.stepFeature}>
                  <p className={classes.num}>100%</p>
                  <p className={classes.text}>Enrollment Fee is refunded</p>
                </div>
                <p className={classes.p}>
                  Upon Course Completion within <b>2 Years</b>, Get Your{' '}
                  <b>₹1,499 Back.</b>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Refund;
