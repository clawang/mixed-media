document
  .getElementById("louis-the-child-pic")
  .addEventListener("mouseenter", (event) => {
    document.getElementById("louis-the-child-gif").classList.add("show");
    event.target.classList.remove("show");
  });

document
  .getElementById("louis-the-child-gif")
  .addEventListener("mouseleave", (event) => {
    document.getElementById("louis-the-child-pic").classList.add("show");
    event.target.classList.remove("show");
  });

document
  .getElementById("louis-the-child-pic")
  .addEventListener("touchstart", (event) => {
    document.getElementById("louis-the-child-gif").classList.add("show");
    event.target.classList.remove("show");
  });

document
  .getElementById("louis-the-child-gif")
  .addEventListener("touchend", (event) => {
    document.getElementById("louis-the-child-pic").classList.add("show");
    event.target.classList.remove("show");
  });

document
  .getElementById("tierra-whack-pic")
  .addEventListener("mouseenter", (event) => {
    document.getElementById("tierra-whack-gif").classList.add("show");
    event.target.classList.remove("show");
  });

document
  .getElementById("tierra-whack-gif")
  .addEventListener("mouseleave", (event) => {
    document.getElementById("tierra-whack-pic").classList.add("show");
    event.target.classList.remove("show");
  });

document
  .getElementById("tierra-whack-pic")
  .addEventListener("touchstart", (event) => {
    document.getElementById("tierra-whack-gif").classList.add("show");
    event.target.classList.remove("show");
  });

document
  .getElementById("tierra-whack-gif")
  .addEventListener("touchend", (event) => {
    document.getElementById("tierra-whack-pic").classList.add("show");
    event.target.classList.remove("show");
  });
