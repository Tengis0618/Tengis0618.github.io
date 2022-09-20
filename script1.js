const accordionBtns = document.querySelectorAll(".accordion");

accordionBtns.forEach((accordion)=>{
  accordion.onclick = function () {
    this.classList.toggle("is-open");

    let content = this.nextElementSibling;
    console.log(content);

    if (content.style.maxHeight) {
      //if accordion is open
      content.style.maxHeight = null;
    } else {
      //if the accordion is closed
      content.style.maxHeight = content.scrollHeight + "px";
      console.log(content.style.maxHeight);
    }
  };
});
