

function checkUser() {
  const data = localStorage.getItem("currUser");
  if (document.querySelector(".page__trend")) {
    if (data == "user") {
      document.querySelector(".page__trend").classList.remove("hidden");
      document.querySelector(".page__our").classList.remove("hidden");
      document.querySelector(".page__customer").classList.add("hidden");
      document.querySelector(".top-header__exits").classList.add("hidden");
      document.querySelector(".top-header__exits2").classList.remove("hidden");
    } else if (data == "admin") {
      document.querySelector(".page__trend").classList.remove("hidden");
      document.querySelector(".page__our").classList.remove("hidden");
      document.querySelector(".page__customer").classList.remove("hidden");
      document.querySelector(".top-header__exits").classList.add("hidden");
      document.querySelector(".top-header__exits2").classList.remove("hidden");
      document.querySelector(".top-header__exits2").classList.remove("hidden");
    } else {
      return;
    }
  }
  if (data == "user") {
  } else if (data == "admin") {
    document.querySelector(".lng-adminmenu").classList.remove("hidden");
  } else {
    return;
  }
}
