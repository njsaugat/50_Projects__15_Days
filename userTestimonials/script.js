const testimonialText = document.body.querySelector(".content span");
const line = document.body.querySelector(".line");

const image = document.body.querySelector(".image");
const name = document.body.querySelector(".name");
const position = document.body.querySelector(".position");

const testimonials = [
  {
    name:'Renee Sims',
    imageUrl:'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxjb2xsZWN0aW9uLXBhZ2V8MXw3NjA4Mjc3NHx8ZW58MHx8fHw%3D&w=1000&q=80',
    position:'Receptionist',
    text: "Responsiveness and client service are what keep me coming back to Array. It is great to know that they have our back in times of crisis.",
  },
  {
    name:'John Doe',
    imageUrl:'https://cms-assets.tutsplus.com/uploads/users/810/profiles/19338/profileImage/profile-square-extra-small.png',
    position:'Data entry',
    text: "My firm has been working with Array for over 5 years, we all know every case does not settle but the mediators from Array refuse to accept that. Each of them exhaust every possible avenue, creatively think out of the box, finally, we always get follow-up and are never charged for that extra effort. Service the old fashioned way-EFFORT!",
  },
  {
    name:'Sandrum Bullock',
    imageUrl:'https://play-lh.googleusercontent.com/I-Yd5tJnxw7Ks8FUhUiFr8I4kohd9phv5sRFHG_-nSX9AAD6Rcy570NBZVFJBKpepmc',
    position:'Software Engineer',
    text: "We hired Array to help us on document review for a bankruptcy matter. They jumped into action, immediately engaged our case team and got started on the review in record time. Status updates were provided on a regular basis and any potential issues were quickly escalated. This group knows how to keep document review on the tracks and get it over the finish line.",
  },
  {
    name:'Michael Myles',
    imageUrl:'https://profilemagazine.com/wp-content/uploads/2020/04/Ajmere-Dale-Square-thumbnail.jpg',
    position:'Product Manager',
    text: "I have worked with members of this company for years. They perform quickly while providing accurate and very efficient work product. Array is definitely my preferred e-discovery vendor.",
  },
];

let idx = 0;

setInterval(showTestimonial, 5000);

showTestimonial();

function showTestimonial() {
  let lineLegth = 0;
  if (idx < testimonials.length) {
    testimonialText.innerText = testimonials[idx].text;
    image.style.backgroundImage=`url(${testimonials[idx].imageUrl})`
    name.innerText=testimonials[idx].name
    position.innerText=testimonials[idx].position
    
    // removeWidth(line);
    idx++;
  } else {
    idx = 0;
  }
}

function removeWidth(line) {
  setTimeout(() => {
    line.classList.remove("active");
  }, 3000);
}
