import classes from './Curriculum.module.css';

import eyeImage from '../../assets/eye.svg';

const COURSES = [
  {
    title: 'C++',
    description: 'Learn C++ for strong programming fundamentals.',
  },
  {
    title: 'MERN Stack',
    description: 'Master the MERN stack for high-demand projects.',
  },
  {
    title: 'Data Structure & Algorithm',
    description:
      'Excel in Data Structures and Algorithms for interview success.',
  },
  {
    title: 'Competitve Programming',
    description:
      'Excel in Data Structures and Algorithms for interview success.',
  },
];

function Curriculum() {
  return (
    <section id='cirriculum' className={classes.curriculum}>
      <div className={classes.container}>
        <div className={classes.heading2}>
          DATA SCIENCE COURSE LEARNING PATH
        </div>
        <h1 className={classes.heading1}>
          <span className={classes.colour}>Data Science</span> Course Curriculum
        </h1>
        <ul className={classes.courses}>
          {COURSES.map(course => (
            <li key={course.title} className={classes.course}>
              <div>
                <h2 className={classes.title}>{course.title}</h2>
                <p className={classes.description}>{course.description}</p>
              </div>
              <button className={classes.button}>
                <img src={eyeImage} />
                View Curriculum
              </button>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Curriculum;
