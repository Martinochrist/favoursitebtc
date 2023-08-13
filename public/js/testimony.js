//Testimonial Data
const testimonials = [
    {
      name: "Eva Sawyer",
      job: "CEO, Fashworks",
      image: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png",
      testimonial:
        " investing with BAYYA Investment, we have worked together to get a clear understandable plan for our future which gives us confidence and security knowing what kind of lifestyle we can lead. In addition, we have seen gains in our portfolio in a short space of time which is a reassuring indicator. Our meetings are consultative and personal with all decisions made after full discussion and clear explanation.",
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
        "We have been with BAYYA Investment now for three years. His small team have made an effort to get to know us and so the service we receive feels very personal. Jeremy has helped us to focus on what we want out of life and is helping us realise our plans. The peace of mind we have from knowing our finances are being so well managed is priceless. BAYYA Investment provides an excellent service, be it on a business or on a personal level. I have found the company's advice regarding investment opportunities particularly helpful - everything is explained fully, no matter how complex the subject. I am pleased to see the results in comparison to the experiences one reads or hears about in the media. I get the feeling that Brett Investment are ahead of the game",
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