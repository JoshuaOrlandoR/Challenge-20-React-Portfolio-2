import React from 'react';
import './css/Testimonials.css';

function Testimonials() {
    const testimonials = [
        {
          name: "Bob Johnson",
          title: "VP of Napping, Siesta Corp",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper eros sit amet varius mattis. Nulla ut est neque. Vestibulum non risus vel elit ultrices bibendum. Praesent maximus tincidunt neque ut gravida. Morbi tristique congue ipsum, id commodo lacus commodo a.",
          clientHeadshot: "https://randomuser.me/api/portraits/men/8.jpg",
        },
        {
          name: "Sally Smith",
          title: "Chief Surfer, Surfer Corp LLC LTD ",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo, turpis vel finibus dapibus, lacus nulla consectetur metus, eget ullamcorper velit metus ac neque. Nam id faucibus mi. Fusce posuere in diam in venenatis. Quisque faucibus consectetur mauris, non commodo elit pretium non.",
          clientHeadshot: "https://randomuser.me/api/portraits/women/10.jpg",
        },
        {
          name: "Joe Schmoe",
          title: "Director of Cheese, Cheddar Co.",
          message: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum sed malesuada enim. Nulla fringilla augue a lorem faucibus, vel bibendum orci aliquam. Duis posuere lorem sit amet mi ultrices, at bibendum orci ultricies. Fusce laoreet ornare enim id fermentum. Sed rutrum quis massa vel gravida.",
          clientHeadshot: "https://randomuser.me/api/portraits/men/3.jpg",
        },
      ];
      

  return (
    <div className="text-center">
      <h1 className="display-4 text-light bg-pink p-2">Testimonials</h1>
      <div className="testimonials-container col-md-6 mx-auto">
        {testimonials.map((testimonial, index) => (
          <div className="testimonial text-white" key={index}>
            <div className="testimonial-content">
              <div className="testimonial-client text-center">
                <img
                  src={testimonial.clientHeadshot}
                  alt={`${testimonial.name}'s headshot`}
                  className="testimonial-client-headshot rounded-circle mx-auto d-block mb-3"
                />
                <h5 className="testimonial-client-name">{testimonial.name}</h5>
                <p className="testimonial-client-title text-info">{testimonial.title}</p>
                <p className="testimonial-message">{testimonial.message}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Testimonials;
