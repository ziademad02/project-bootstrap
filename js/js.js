let slider = document.getElementById("slider");
function moveSlide(direction){
  const card = document.querySelector(".card-box");
  const cardWidth = card.offsetWidth;
  slider.style.transition = "0.5s";
  slider.style.transform = `translateX(${direction * -cardWidth}px)`;
  setTimeout(() => {
    slider.style.transition = "none";
    if(direction === 1){
      slider.appendChild(slider.firstElementChild);
    } else {
      slider.prepend(slider.lastElementChild);
    }
    slider.style.transform = "translateX(0)";
  }, 500);
}

let blogSlider = document.getElementById("blogSlider");
function moveBlog(direction){
  const card = document.querySelector(".blog-card");
  const width = card.offsetWidth + 20;
  blogSlider.style.transition = "0.5s";
  blogSlider.style.transform = `translateX(${direction * -width}px)`;
  setTimeout(() => {
    blogSlider.style.transition = "none";
    if(direction === 1){
      blogSlider.appendChild(blogSlider.firstElementChild);
    } else {
      blogSlider.prepend(blogSlider.lastElementChild);
    }
    blogSlider.style.transform = "translateX(0)";
  }, 500);
}

const thumbs = document.querySelectorAll(".thumb");

function changeImage(element,image){

    document.getElementById("mainImage").src = image;

    thumbs.forEach((thumb)=>{
        thumb.classList.remove("active");
    });

    element.classList.add("active");

}


const images = [
    "image/dd1.png",
    "image/dd1 (3).png",
    "image/dd1 (1).png",
    "image/dd1 (2).png"
];
let index = 0;
setInterval(()=>{
    index++;
    if(index >= images.length){
        index = 0;
    }
    document.getElementById("mainImage").src = images[index];
    thumbs.forEach((thumb)=>{
        thumb.classList.remove("active");
    });
    thumbs[index].classList.add("active");
},3000);

AOS.init({
    duration: 1000,
    once: false
});