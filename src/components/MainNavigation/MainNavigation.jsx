import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <div className={classes.navbar}>
      <div className={classes['nav-container']}>
        <div className={classes['logo-border']}>
          <a href='/' className={classes.logo}>
            LOGO
          </a>
        </div>
        <div className={classes['nav-menu']}>
          <button className={classes['nav-link']}>Login</button>
          <button className={`${classes['nav-link']} ${classes.signup}`}>
            Signup
          </button>
        </div>
      </div>
    </div>
  );
}

export default MainNavigation;
