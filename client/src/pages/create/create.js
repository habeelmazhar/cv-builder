import React, { Component } from 'react';
import StepWizard from 'react-step-wizard';

import Step1 from './wizard-steps/step1';
import Step2 from './wizard-steps/step2';
import Step3 from './wizard-steps/step3';
import Step4 from './wizard-steps/step4';

import ejs from '../../../node_modules/ejs/ejs'

import renderHTML from 'react-render-html';
// CSS
import './create.css';

class CreateCV extends Component {
  constructor(props) {
    super(props);

    this.onStepChange = this.onStepChange.bind(this);
  }

  onStepChange(e) {
    console.log('e: ', e);

  }
  createMarkup() {
    return `<!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title><%= title %></title>
            </head>
          <body>
            
            <header>
              <hgroup>
                <h1> <%= title %> </h1>
                <h2> A Simple HTML5 WITHOUT CSS</h2>
              </hgroup>
              <nav>
                <ul>
                  <a href="">Home</a>
                    <a href="">Advance features</a>
                  <a href=""> About</a>
                  <a href=""> contact </a>
                  <a href=""> Sign in </a>
                  <a href=""> Sign up </a>
                  </ul>
                </nav>
            </header>
            
            <section>
              <h2>A Simple HTML5 Page</h2>
              <p>
                This is an example of a simple HTML5 webpage using some of it's basic elements.
                </p>
              </section>
            
            <section>
              <h2> CSS3 for Styling</h2>
              <p>
                To make this webpage visually appealing we'll use some of the basic CSS3 code in another example. CSS Makes styling of the page more easy and convinient.
                </p>
              </section>
            
            <section>
              <h2> Progress bar </h2>
               <p>
                Progress you'll make<br>
                When you undertand HTML5 code<progress max="100" value=50></progress><br>
                When you understand CSS3 Code <progress max="100" value=50></progress><br>
                When you understand HTML5+CSS3 Code<progress max=100 value=100></progress>
              </p>
            </section>
          
          <section>
            <mark> For more understandibility how css works this page doesn't inlude any CSS3 code.</mark>
          </section>
            
            
            <footer>
              <p>
                This is the modified example of the code taught by Colleen van Lent in her Introduction to CSS3 course on coursera.</p>
              </footer
            </body>
          </html>
              
              ` ;
  }
  render() {
    return (
      <div>
        <h2>Create CV</h2>

        <div className="row">
          <div className="col-12 col-md-5">
            <StepWizard onStepChange={this.onStepChange}>
              <Step1 />
              <Step2 />
              <Step3 />
              <Step4 onFinish={() => { this.props.history.push('/home') }} />
            </StepWizard>
          </div>
          <div className="col-12 col-md-5">
            {renderHTML(ejs ? ejs.render(this.createMarkup(), { title: 'CV builder' }) : 'not working')}
          </div>
        </div>
      </div>
    );
  }
}

export default CreateCV