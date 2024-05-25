import companyLogoImage from '../../assets/company-logo.svg';
import classes from './TopCompanies.module.css';

const logos = [
  companyLogoImage,
  companyLogoImage,
  companyLogoImage,
  companyLogoImage,
  companyLogoImage,
  companyLogoImage,
];

function TopCompanies() {
  return (
    <section className={classes['top-companies']}>
      <h1 className={classes.heading}>
        Top Companies Hiring{' '}
        <span className={classes['heading-colour']}>Data Scientist</span>
      </h1>
      <div className={classes.logos}>
        <div className={classes['logo-slider']}>
          {logos.map((logo, index) => (
            <img
              className={classes.logo}
              key={index}
              src={logo}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
        <div className={classes['logo-slider']}>
          {logos.map((logo, index) => (
            <img
              src={logo}
              className={classes.logo}
              key={index}
              alt={`Logo ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default TopCompanies;
