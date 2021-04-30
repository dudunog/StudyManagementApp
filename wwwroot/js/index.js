document.addEventListener("DOMContentLoaded", function () {
  var calendarEl = document.getElementById("calendar");

  //Calendário
  var calendar = new FullCalendar.Calendar(calendarEl, {
    locale: "pt-br",
    initialView: "dayGridMonth",
    editable: false,
    displayEventTime: false,
    navLinks: true,
    headerToolbar: {
      left: "prev,next",
      center: "title",
      right: "timeGridDay,timeGridWeek,dayGridMonth",
    },
    titleRangeSeparator: " à ",
    events: [
      {
        id: "a",
        title: "meu primeiro evento",
        start: "2021-03-01",
      },
    ],
    eventColor: "#378006",
    //eventClick:
  });
  calendar.setOption("locale", "pt-br");
  calendar.render();
});

//Abre e fecha modal
const Modal = {
  openAndCloseModal() {
    Utils.pickColor();
    document.querySelector(".modal").classList.toggle("is-active");
    document.querySelector(".html").classList.toggle("is-clipped");
  },
};

//JS do input color
$(document).ready(function () {
  $("#color").minicolors({
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

//Método utilitário
const Utils = {
  pickColor() {
    const color =
      `#` + (((1 << 24) * Math.random()) | 0).toString(16).toUpperCase();
    while (color.length != 7) {
      color =
        `#` + (((1 << 24) * Math.random()) | 0).toString(16).toUpperCase();
    }
    $(document).ready(function () {
      $("#color").minicolors("value", { color: color });
    });
  },
};
