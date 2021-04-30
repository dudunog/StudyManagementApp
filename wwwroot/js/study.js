const Tabs = {
  toggleCrono() {
    document.querySelector(".crono").classList.toggle("is-active");
    document.querySelector(".manual").classList.toggle("is-active");

    document.getElementById("elementManual").hidden = true;
    document.getElementById("elementTimer").hidden = false;

    document.getElementById("button-play").hidden = false;
    document.getElementById("button-stop").hidden = false;
  },
  toggleManual() {
    document.querySelector(".manual").classList.toggle("is-active");
    document.querySelector(".crono").classList.toggle("is-active");

    document.getElementById("elementTimer").hidden = true;
    document.getElementById("elementManual").hidden = false;

    document.getElementById("button-play").hidden = true;
    document.getElementById("button-stop").hidden = true;
  },
};
