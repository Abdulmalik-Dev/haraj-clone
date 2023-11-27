const body = document.body;
    modeIcon = document.querySelector("#mode"),
    mode_i_element = document.querySelector("#mode i");

modeIcon.addEventListener("click", (e) => {
  e.preventDefault();

  modeEffect();
});

function modeEffect() {
  let theme = "";

  body.classList.toggle("dark");

  if (body.classList.contains("dark")) {
    mode_i_element.classList.replace("fa-moon", "fa-sun");
    theme = "dark";
  } else {
    mode_i_element.classList.replace("fa-sun", "fa-moon");
    theme = "light";
  }

  localStorage.setItem("theme", theme);
}

window.addEventListener("load", () => {
  let lastTheme = localStorage.getItem("theme");
  if (lastTheme != null || lastTheme != "") {
    if (lastTheme == "dark") {
      body.classList.add("dark");
      mode_i_element.classList.replace("fa-moon", "fa-sun");
      theme = "dark";
    } else {
      body.classList.add("light");
      mode_i_element.classList.replace("fa-sun", "fa-moon");
      theme = "light";
    }
  }
});


document.querySelectorAll("aside .custom-details h3").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.target.parentElement.classList.toggle("show");

    e.target.parentElement.classList.contains("show")
      ? e.target.parentElement.children[0].children[0].classList.replace(
          "fa-plus",
          "fa-minus"
        )
      : e.target.parentElement.children[0].children[0].classList.replace(
          "fa-minus",
          "fa-plus"
        );
  });
});
