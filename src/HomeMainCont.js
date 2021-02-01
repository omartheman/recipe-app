import React from 'react';
import './HomeMainCont.scss';
import { ReactComponent as Diet } from './images/diet.svg';

const HomeMainCont = (props) => (
  <main className="container">
    <div className="welcome-text">
      <h2>Welcome to The Recipe Cabinet</h2>
      <p>
        Stash your culinary creations here for later use. Never hunt for a recipe again. Store the memories of that delightful dish.
      </p>
      <Diet className="home-main-cont-food-icon"/>
      <p className="home-intro-text-center">
        Bon Appétit!
      </p>
    </div>
  </main>
);

export default HomeMainCont;