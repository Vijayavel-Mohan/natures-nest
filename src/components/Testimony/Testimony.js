import React, { Component } from "react";
import './Testimony.css';



const testimonials = [
  {
    name: "Sarah Drucker",
    text:
      "Working with John Doe was a real pleasure, he helps me extending my business online.",
    avatar: "https://shorturl.at/eqyGW"
  },
  {
    name: "Nicolas Jaylen",
    text:
      "My business was broken, then i start working with John Doe, and now everything works fine.",
    avatar: "https://shorturl.at/ptC58"
  },
  {
    name: "Awa Fall",
    text:
      "John Doe helps me a lot from designing my website to make it live in just 5 weeks.",
    avatar: "https://shorturl.at/lwBY1"
  },
  {
    name: "Aziz Kamara",
    text:
      "Collaborate with John Doe was the best decision i ever made. He is great and professional.",
    avatar: "https://shorturl.at/gjxN5"
  }
];

var counter = 0;

export default class Testimony extends Component {

handleFirstTestimonial = () => {
  this.testimonialContainer.children[1].children[0].src = testimonials[0].avatar;
  this.testimonialContainer.children[1].children[1].innerHTML = testimonials[0].name;
  this.testimonialContainer.children[1].children[2].innerHTML = `
  <i class="fas fa-quote-left"></i>
  ${testimonials[0].text}
  <i class="fas fa-quote-right"></i>
  `;
};

 activeTestimonial = () => {
    this.testimonialContainer.classList.add("testimonial-active-animated");
    this.testimonialContainer.children[1].children[0].src =
    testimonials[counter].avatar;
    this.testimonialContainer.children[1].children[1].innerHTML =
    testimonials[counter].name;
    this.testimonialContainer.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[counter].text}
  <i class="fas fa-quote-right"></i>`;
  setTimeout(() => {
    this.testimonialContainer.classList.remove("testimonial-active-animated");
  }, 1400);
};

 inactiveTestimonial = () => {
    this.testimonialGhost.classList.add("testimonial-inactive-animated");
  let newCounter = counter;
  if (newCounter === 0) {
    newCounter = testimonials.length;
  }
  this.testimonialGhost.children[1].children[0].src =testimonials[newCounter - 1].avatar;
  this.testimonialGhost.children[1].children[1].innerHTML = testimonials[newCounter - 1].name;
  this.testimonialGhost.children[1].children[2].innerHTML = `<i class="fas fa-quote-left"></i>
  ${testimonials[newCounter - 1].text}
  <i class="fas fa-quote-right"></i>`;
  setTimeout(() => {
    this.testimonialGhost.classList.remove("testimonial-inactive-animated");
  }, 1400);
};

nextBtnClick = () => {
  if (counter === testimonials.length - 1) {
    counter = 0;
    this.inactiveTestimonial();
    this.activeTestimonial();
  } else {
    counter++;
    this.inactiveTestimonial();
    this.activeTestimonial();
  }
};

    componentDidMount(){
        this.testimonialContainer = document.querySelector(".testimonial-container");
        this.testimonialGhost = document.querySelector(".testimonial-ghost-container");
        this.handleFirstTestimonial();
        setInterval(this.nextBtnClick, 5000);
    }

    render() {
        return (
            <div className='main-container' style={{}}>
                <div className="testimonial-container testimonial-active">
        <div className="testimonial-header"></div>
        <div className="testimonial-body">
          <img alt="Avatar" src="" className="testimonial-avatar" />
          <h1></h1>
          <p></p>
        </div>
        <div className="testimonial-footer">
          <div>
            <button id="next" onClick={this.nextBtnClick}>
              <i className="fa fa-3x fa-chevron-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
      <div className="testimonial-ghost-container">
        <div className="testimonial-ghost-header"></div>
        <div className="testimonial-ghost-body">
          <img alt="Avatar" src="" />
          <h1></h1>
          <p></p>
        </div>
        <div className="testimonial-ghost-footer">
          <div>
            <button id="ghost-next" onClick={this.nextBtnClick}>
              <i className="fa fa-3x fa-chevron-circle-right"></i>
            </button>
          </div>
        </div>
      </div>
            </div>);
    }
}