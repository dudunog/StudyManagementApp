//Abre e fecha modal
const Modals = {
  openAndCloseModalTheme() {
    Utils.pickColor();
    document.querySelector(".modal-theme").classList.toggle("is-active");
    document.querySelector(".html").classList.toggle("is-clipped");
  },
  openAndCloseModalStudy() {
    document.querySelector(".modal-study").classList.toggle("is-active");
    document.querySelector(".html").classList.toggle("is-clipped");
  },
  openAndCloseModalSubjects() {
    Utils.pickColor();
    document.querySelector(".modal-subjects").classList.toggle("is-active");
    document.querySelector(".html").classList.toggle("is-clipped");
  },
};

//JS do input color
$(document).ready(function () {
  var pickers = ["color-subjects", "color-theme"];
  $(pickers).each(function () {
    $("#" + this).minicolors({
      control: "hue",
      letterCase: "uppercase",
      opacity: "false",
      change: function (value, opacity) {
        if (!value) return;
        if (opacity) value += ", " + opacity;
      },
      theme: "bootstrap",
    });
  });
});

//Método utilitários
const Utils = {
  pickColor() {
    var color =
      `#` + (((1 << 24) * Math.random()) | 0).toString(16).toUpperCase();

    while (color.length != 7) {
      color =
        `#` + (((1 << 24) * Math.random()) | 0).toString(16).toUpperCase();
    }

    $(document).ready(function () {
      var pickers = ["color-subjects", "color-theme"];
      $(pickers).each(function () {
        $("#" + this).minicolors("value", {
          color: color,
        });
      });
    });
  },
};
