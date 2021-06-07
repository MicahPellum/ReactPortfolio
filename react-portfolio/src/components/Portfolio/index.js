import React from 'react';

function Portfolio() {

    return (
<section class="work" id="work">
        <div class="row">
          <div class="work__boxes">
  
            <div class="work__box">
              <div class="work__text">
                <h3>SimpliFam</h3>
                <p>
                  Group project. Simplify your family by using a shared calendar, grocery list, and chat feature.
                </p>
                <ul class="work__list">
                  <li>HTML/CSS/JavaScript</li>
                  <li>React</li>
                  <li>Mongoose/MongoDB</li>
                  <li>Node</li>
                  <li>Express</li>
                  <li>GraphQL</li>
                </ul>
  
       </div>
       </div>

       <div class="work__box">
              <div class="work__text">
                <h3>Read Views</h3>
                <p>
                  Group project. Social Media site where you can search for books, leave reviews, and comments. 
                </p>
                <ul class="work__list">
                  <li>HTML/JavaScript</li>
                  <li>Sass CSS Framework</li>
                  <li>Handlebars</li>
                  <li>Node.js</li>
                  <li>Sequelize</li>
                  <li>Express</li>
                </ul>
  
                <div class="work__links">
                  <a href="https://readviews-022021.herokuapp.com/" target="_blank" class="link__text">
                    Visit Site <span>&rarr;</span>
                  </a>
                  {/* <a href="https://github.com/quaylas/readviews" title="View Source Code" target="_blank">
                    <img src={require('https://github.com/quaylas/readviews/blob/main/public/assets/images/screenshot1.JPG?raw=true').default} class="work__code" alt="GitHub" />
                  </a> */}
                </div>
              </div>
              {/* <div class="work__image-box">
                <img src={require("https://github.com/quaylas/readviews/blob/main/public/assets/images/screenshot2.JPG?raw=true").default} class="work__image" alt="Project 5" />
              </div> */}
              </div>


       </div>
       </div>
      </section>
    );
}

export default Portfolio;