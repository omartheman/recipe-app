import React from 'react';
import './HomeMainCont.scss';
import { ReactComponent as Diet } from './images/salad-opt.svg';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const HomeMainCont = (props) => (
  <main className="container">
    <div className="welcome-text">
      <h2>Welcome to The Recipe Cabinet</h2>
      <p>
        Stash your culinary creations here for later use. Never hunt for a recipe again. Store the memories of that delightful dish.
      </p>
      <div className="home-main-cont-food-icon-container">
        <Diet className="home-main-cont-food-icon"/>
        <div className="home-main-cont-go-to-all-recipes-span-wrapper">
            <Button
              as={Link}
              to="/recipeapp/all-recipes"
              className="home-main-cont-go-to-all-recipes-span"
              variant="success"
            >
              Go to All Recipes
            </Button>
        </div>
      </div>
      <p className="home-intro-text-center">
        Bon Appétit!
      </p>
    </div>
  </main>
);

export default HomeMainCont;