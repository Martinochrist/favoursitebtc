//Testimonial Data
const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      testimonial:
        " investing with BAYYA Investment, we have worked together to get a clear understandable plan for our future which gives us confidence and security knowing what kind of lifestyle we can lead. In addition, we have seen gains in our portfolio in a short space of time which is a reassuring indicator.",
    },
    {
      name: "Katey Topaz",
      job: "investor, TechCrew",
      image: "",
      testimonial:
        "Perfect Trade! Very pleased with his service and will be back!",
    },
    {
      name: "Jae Robin",
      job: "UI Designer, Affinity Agency",
      image: "https://seeklogo.com/images/T/tether-usdt-logo-FA55C7F397-seeklogo.com.png",
      testimonial:
        "Very very nice. Answered all of my questions. First time buyer here. They are very nice. I will definitely be buying again",
    },
    {
      name: "Nicola Blakely",
      job: "CEO,Zeal Wheels",
      image: "",
      testimonial:
        " Investing with BAYYA is one of the great choices i made for my self because i am in so much profit of over 20,000 dollers investing my Usdt",
    },
  ];
  
  //Current Slide
  let i = 0;
  //Total Slides
  let j = testimonials.length;
  
  let testimonialContainer = document.getElementById("testimonial-container");
  let nextBtn = document.getElementById("next");
  let prevBtn = document.getElementById("prev");
  
  nextBtn.addEventListener("click", () => {
    i = (j + i + 1) % j;
    displayTestimonial();
  });
  prevBtn.addEventListener("click", () => {
    i = (j + i - 1) % j;
    displayTestimonial();
  });
  
  let displayTestimonial = () => {
    testimonialContainer.innerHTML = `
      <p>${testimonials[i].testimonial}</p>
      <img src=${testimonials[i].image}>
      <h3>${testimonials[i].name}</h3>
      <h6>${testimonials[i].job}</h6>
    `;
  };
  window.onload = displayTestimonial