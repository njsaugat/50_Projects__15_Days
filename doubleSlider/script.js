const down = document.body.querySelector(".down");
const up = document.body.querySelector(".up");
const lefts = document.body.querySelectorAll(".left");
const right = document.body.querySelector(".right");

let index = 0;
// const colors = ["orange", "grey", "steelblue", "red"];

const imagesLinks = [
  "https://images.unsplash.com/photo-1550133730-695473e544be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1514539079130-25950c84af65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1600&q=80",
  "https://images.unsplash.com/photo-1592722182837-52273392552d?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1672&q=80",
  "https://images.unsplash.com/photo-1422205512921-12dac7b3b603?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1660&q=80"  
];

down.addEventListener("click", () => {
  lefts.forEach((left) => left.classList.remove("active"));
  index= (++index) % lefts.length
  const left = lefts[index];
  left.classList.add("active");
//   left.style.backgroundColor = colors[index];

  right.style.backgroundImage=`url(${imagesLinks[index]})`
});

up.addEventListener("click", () => {
  lefts.forEach((left) => left.classList.remove("active"));
  if(index<=0){
      index=lefts.length
    }
  index= (--index) % lefts.length
  const left = lefts[index];
  left.classList.add("active");
//   left.style.backgroundColor = colors[index];

  right.style.backgroundImage=`url(${imagesLinks[index]})`
});
