// function userScroll() {
//   const navbar = document.querySelector(".navbar");

//   window.addEventListener("scroll", () => {
//     if (window.scrollY > 50) {
//       navbar.classList.add("navbar-sticky");
//     } else {
//       navbar.classList.remove("navbar-sticky");
//     }
//   });
// }

// function scrollToTop() {
//   document.body.scrollTop = 0;
//   document.documentElement.scrollTop = 0;
// }

function incrementStats() {
  const counters = document.querySelectorAll(".counter");

  counters.forEach((counter) => {
    counter.innerText = 0;

    function updateCounter() {
      const dataTarget = Number(counter.getAttribute("data-target"));
      const counterInnerText = Number(counter.innerText);

      const increment = dataTarget / 200;
      console.log(increment);

      if (counterInnerText < dataTarget) {
        counter.innerText = Math.ceil(counterInnerText + increment);
        setTimeout(updateCounter, 1);
      } else {
        counter.innerText = dataTarget;
      }
    }

    updateCounter();
  });
}

// Event Listeners
// document.addEventListener("DOMContentLoaded", userScroll);
document.addEventListener("DOMContentLoaded", incrementStats);
// document.querySelector("#to-top").addEventListener("click", scrollToTop);
