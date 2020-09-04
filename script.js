window.onscroll = function() {
  scrollFunction();
  scrollFunctionAgain();
};

function scrollFunction() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    document
      .querySelector(".navabar-hidden")
      .classList.add("navabar-hidden-hidden");

    document.querySelector(".navabar").classList.add("navbarContent");
  } else {
    document
      .querySelector(".navabar-hidden")
      .classList.remove("navabar-hidden-hidden");

    document.querySelector(".navbar").classList.remove("navbarContent");
  }
}

function scrollFunctionAgain() {
  if (document.body.scrollTop > 10 || document.documentElement.scrollTop > 20) {
    document.querySelector(".navabar").classList.add("navbarContent");
  } else {
    document.querySelector(".navbar").classList.remove("navbarContent");
  }
}
