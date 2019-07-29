import React, {Component, Fragment} from 'react';
import {Route} from 'react-router-dom';
import Portfolio from '../Containers/Portfolio/Portfolio';
import ProjectAbout from '../Components/ProjectAbout/ProjectAbout'
import img1 from "../Assets/Images/responsive1.png";
import img2 from "../Assets/Images/responsive2.png";
import img3 from "../Assets/Images/responsive3.png";
import img4 from "../Assets/Images/responsive4.png";
import img5 from "../Assets/Images/responsive5.png";
import img6 from "../Assets/Images/responsive6.png";

class Data extends Component{
 
 state = {
 projects:[
  {
   id : 1,
   project : "coolMovies",
   img: img6,
   title: "CoolMovies App",
   desc : "CoolMoviesBB is a responsive React-Redux app that allows the user to search Movies and TvShows. This project is fetching data from The Movie Database MovieDB",
   previewUrl: "https://msmatki.github.io/React-Redux-Movies/#/",
   githubURL : "https://github.com/MsMatki/React-Redux-Movies",
   technologies : ["React", "Redux", "JavaScript"]
  },
  {
   id : 2,
   project : "neighborhoodMap",
   img: img5,
   title: "Neighbourhood Map App",
   desc : "This single page app uses the Google maps API and the location-based service Foursquare API to list some coffee Locations in the Waterloo, Ontario. The project was built for the Udacity Front End Nanodegree Program. The purpose of the project is to demonstrate a good understanding of: reactJS, javascript, API usage, HTML, CSS, responsive design, and front-end web development overall.",
   previewUrl: "https://msmatki.github.io/React-Redux-Movies/#/",
   githubURL : "https://github.com/MsMatki/React-Redux-Movies",
   technologies : ["React", "Redux", "JavaScript"]
  },
  {
   id : 3,
   project : "myReads",
   img: img4,
   title: "MyReads React App",
   desc : "MyReads is a bookshelf app that allows the user to select and categorize books they have read, are currently reading, or want to read. This project emphasizes the use of React with a given API server. I was able to build the React components to populate the main page and search page with books. The main page shows a control that allows you to move books between shelves. The search page allows users to search for new books to add to their shelves.",
   previewUrl: "https://msmatki.github.io/React-Redux-Movies/#/",
   githubURL : "https://github.com/MsMatki/React-Redux-Movies",
   technologies : ["React", "Redux", "JavaScript"]
  },
  {
   id : 4,
   project : "restaurantReviews",
   img: img1,
   title: "Restaurant Reviews App",
   desc : "This app is created as part of the Udacity Nanodegree. The webiste retrieves data about restaurants from a server. The restaurants data contain rating information about restaurants. I Converted the provided site to use a responsive design with grid-based layout using Css and Implemented accessibility features in the site Html. I added a Service Worker script to cache requests to all of the site's assets so that any page that has been visited by a user will be accessible when the user is offline. This app functions on any device or screen size",
   previewUrl: "https://msmatki.github.io/React-Redux-Movies/#/",
   githubURL : "https://github.com/MsMatki/React-Redux-Movies",
   technologies : ["React", "Redux", "JavaScript"]
  },
  {
   id : 5,
   project : "frogger",
   img: img2,
   title: "Classic Arcade Game",
   desc : "This is the project from Udacity Nanodegree Front End Developer. The project was provided with pre-existing game engine. I had to add functionality to the game using JavaScript. The main purpose of this project was to learn Object Oriented Programming. In this game you have a Player and Enemies. The goal of the player is to reach the water, without colliding into any one of the enemies. Use arrow keys to move the player left, right, up and down.",
   previewUrl: "https://msmatki.github.io/React-Redux-Movies/#/",
   githubURL : "https://github.com/MsMatki/React-Redux-Movies",
   technologies : ["React", "Redux", "JavaScript"]
  },
  {
   id : 6,
   project : "memoryGame",
   img: img3,
   title: "Memory Game",
   desc : "This game was built as a Udacity Nanodegree project. The purpose of the project is to demonstrate mastery of Html, Css, and JavaScript. In this project, I had to create a memory game with 16 cards of 8 different symbols. The goal of the game was to match two equal cards, have them stay open, change color and to continue this way until all cards have been matched together. Click on a card, remember its icon and spot in the grid, then continue clicking other cards until you find its match. The game ends once all pairs are matched.",
   previewUrl: "https://msmatki.github.io/React-Redux-Movies/#/",
   githubURL : "https://github.com/MsMatki/React-Redux-Movies",
   technologies : ["React", "Redux", "JavaScript"]
  },
 
 ]
}


render(){
 return(
  <Fragment>
   <Route exact path="/" render={() =>  <Portfolio items={this.state.projects}/>}/>
   <Route exact path="/project" render={() =>  <ProjectAbout items={this.state.projects}/>}/>
  </Fragment>
 );
}
}
export default Data;