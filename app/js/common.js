$(function () {
  $(".hamburger").on("click", () => {
    $(".hamburger__inner").toggleClass("active");
    $(".header__nav").toggleClass("active");
  });

  $("#phone").inputmask({
    mask: "(999) 999-99-99",
  });
  $("#phone2").inputmask({
    mask: "(999) 999-99-99",
  });
  $("#phone3").inputmask({
    mask: "(999) 999-99-99",
  });

  const changeLangsUrl = () => {
    const lu = $(".lang-ua").attr("href");
    const lr = $(".lang-ru").attr("href");
    if (
      window.location.search.substring(1) &&
      window.location.search.substring(1).length !== 0
    ) {
      $(".lang-ua").attr(
        "href",
        `${lu}?${window.location.search.substring(1)}`
      );
      $(".lang-ru").attr(
        "href",
        `${lr}?${window.location.search.substring(1)}`
      );
    }
  };

  setTimeout(() => {
    changeLangsUrl();
  }, 200);

  const url = window.location.search.substring(1);

  const lang = document.querySelector("#lang").value;

  const getUtmQueries = () => {
    url.substring(1);
    const getUtms = url.split("&");
    const utmObj = {};
    getUtms.map((str) => {
      const res = str.split("=");
      utmObj[[res[0].toUpperCase()]] = res[1];
    });
    return utmObj;
  };

  console.log(window.location.href.includes("vebinar-fs-intro"));

  const sendDataBitrix = (form, utm) => {
    $.ajax({
      type: "POST",
      url: `https://techmission.bitrix24.ua/rest/1/4v0d3ox2k12tnl5o/crm.lead.add.json`,
      data: {
        fields: {
          WEB: document.location.hostname,
          ...form,
          ...utm,
        },
      },
      success: function (data) {
        if (window.location.href.includes("vebinar-fs-intro")) {
          document.location.href =
            "https://techmission.pro/tnx-vebinar-fs-intro";
        } else {
          document.location.href = "https://techmission.pro/tnx-fs-intro";
        }
      },
    });
  };

  $.validator.setDefaults({
    submitHandler: function (form, event) {
      const btn = $(form).find("button");

      btn.attr("disabled", true);
      btn.addClass("loading");

      const inputs = $(form).find("input");

      const formFields = {};
      Array.from(inputs).map((input) => {
        if (input.name === "phone" || input.name === "email") {
          formFields[input.name.toUpperCase()] = [
            { VALUE: input.value, VALUE_TYPE: "WORK" },
          ];
        } else {
          formFields[input.name.toUpperCase()] = input.value;
        }
      });
      const utm = getUtmQueries();
      if ($(form).parents(".section__form")) {
        window.location.replace(
          `${window.location.href}#${$(form)
            .parents(".section__form")
            .attr("id")}`
        );
      }

      $.ajax({
        type: "POST",
        url: `https://techmission.bitrix24.ua/rest/1/fsrbxwcta0snoh16/crm.lead.add.json`,
        data: {
          fields: {
            WEB: document.location.hostname,
            ...formFields,
            ...utm,
          },
        },
        success: function (data) {
          btn.attr("disabled", false);
          btn.removeClass("loading");
          if (window.location.href.includes("vebinar-fs-intro")) {
            window.location.replace(
              "https://techmission.pro/tnx-vebinar-fs-intro"
            );
          } else {
            window.location.replace("https://techmission.pro/tnx-fs-intro");
          }
        },
      });
    },
  });

  if (lang === "ru") {
    $.validator.addMethod(
      "requiredphone",
      function (value, element) {
        const phone = /(\(0\d{2}\)\s\d{3}-\d{2}-\d{2})/;
        return value.match(phone);
      },

      "  Введите правильный номер (099)999-99-99"
    );

    $(".integration__form").validate({
      rules: {
        phone: {
          requiredphone: true,
        },
        field: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Укажите Имя",
        email: "Введите правильный email",
        phone: "Введите ваш телефон в формате (099)999-99-99",
      },
    });
    $(".integration__form2").validate({
      rules: {
        phone: {
          requiredphone: true,
        },
        field: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Укажите Имя",
        email: "Введите правильный email",
        phone: "Введите ваш телефон в формате (099)999-99-99",
      },
    });
    $(".integration__form3").validate({
      rules: {
        phone: {
          requiredphone: true,
        },
        field: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Укажите Имя",
        email: "Введите правильный email",
        phone: "Введите ваш телефон в формате (099)999-99-99",
      },
    });
  } else {
    $.validator.addMethod(
      "requiredphone",
      function (value, element) {
        const phone = /(\(0\d{2}\)\s\d{3}-\d{2}-\d{2})/;
        return value.match(phone);
      },

      " Введiть правильний номер (099)999-99-99"
    );

    $(".integration__form").validate({
      rules: {
        phone: {
          requiredphone: true,
        },
        field: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Вкажіть Ім'я",
        email: "Введіть правильний email",
        phone: "Введіть ваш телефон в форматi (099)999-99-99",
      },
    });
    $(".integration__form2").validate({
      rules: {
        phone: {
          requiredphone: true,
        },
        field: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Вкажіть Ім'я",
        email: "Введіть правильний email",
        phone: "Введіть ваш телефон в форматi (099)999-99-99",
      },
    });
    $(".integration__form3").validate({
      rules: {
        phone: {
          requiredphone: true,
        },
        field: {
          required: true,
          email: true,
        },
      },
      messages: {
        name: "Вкажіть Ім'я",
        email: "Введіть правильний email",
        phone: "Введіть ваш телефон в форматi (099)999-99-99",
      },
    });
  }

  const links = document.querySelectorAll(".menu a");
  Array.from(links).map((link, index) => {
    if (index !== 0) {
      link.classList.add("scrollToId");
    }
    let url = link.href;
    if (!url.includes("#")) {
      link.classList.remove("scrollToId");
    }
  });

  $(".sub-menu .menu-item .scrollToId").removeClass("scrollToId");

  $(".sub-menu .menu-item a").on("click", function () {
    window.location.replace($(this).attr("href"));
  });

  $(".sub-menu .menu-item .scrollToId").removeClass("scrollToId");

  $(".sub-toggle").on("click", (e) => {
    e.preventDefault();
  });

  $(".scrollToId").on("click", function (e) {
    e.preventDefault();
    $(".hamburger__inner").removeClass("active");
    $(".header__nav").removeClass("active");
    $("html, body").animate(
      {
        scrollTop: $($(this).attr("href")).offset().top,
      },
      500,
      "linear"
    );
  });

  const slider3 = $(".comment__slider").slick({
    slidesToShow: 3,
    arrows: false,
    centerMode: true,
    variableWidth: true,
    speed: 1000,
    infinity: false,
    swipe: false,
    responsive: [
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          variableWidth: false,
          centerMode: false,
        },
      },
    ],
  });

  $(".prev-comment").on("click", (e) => {
    e.preventDefault();
    console.log("click");
    slider3.slick("slickPrev");
  });

  $(".next-comment").on("click", (e) => {
    e.preventDefault();
    console.log("click");
    slider3.slick("slickNext");
  });

  const slider1 = $(".pre_slider").slick({
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".prev-slide").on("click", (e) => {
    e.preventDefault();
    slider1.slick("slickPrev");
  });

  $(".next-slide").on("click", (e) => {
    e.preventDefault();
    slider1.slick("slickNext");
  });

  const slider2 = $(".part_slider").slick({
    slidesToShow: 5,
    arrows: false,
    responsive: [
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 4,
        },
      },
      {
        breakpoint: 850,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 650,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 420,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  });

  $(".prev-part").on("click", (e) => {
    e.preventDefault();
    slider2.slick("slickPrev");
  });

  $(".next-part").on("click", (e) => {
    e.preventDefault();
    slider2.slick("slickNext");
  });

  $(".faq__block").on("click", function () {
    $(this).toggleClass("active");
    $(this).find(".faq-text").slideToggle(400);
    $(this).siblings("faq__block").removeClass("active");
    $(this).siblings("faq__block").find(".faq-text").slideUp(400);
  });

  $(".open-popup").magnificPopup({
    type: "inline",
  });

  const magnificPopup = $.magnificPopup.instance;

  $(".close").on("click", () => {
    magnificPopup.close();
  });

  $(".open-popup").on("click", function () {
    if ($(this).attr("data-subject")) {
      const title = $(this).attr("data-subject");
      $("#popup-type").attr("value", title);
    }
  });

  const togglers = Array.from(document.querySelectorAll(".toggler"));
  const togglerContainer = $(".special__toggler");
  let arr = [];
  togglers.map((item) => {
    arr.push(parseInt(item.offsetHeight));
  });
  const maxHeight = arr.sort((a, b) => a < b);
  togglerContainer.height(maxHeight[0] + 5);

  const handleToggler = (items, index) => {
    if (index > 0) {
      items[index - 1].classList.remove("active");
    } else {
      items[togglers.length - 1].classList.remove("active");
    }

    setTimeout(() => {
      items[index].classList.add("active");
    }, 200);
  };

  let counter = 0;

  setInterval(() => {
    if (counter <= togglers.length - 1) {
      handleToggler(togglers, counter);
      counter++;
    } else {
      counter = 0;
    }
  }, 5000);
  const vw = $(window).width();

  if (vw <= 1100) {
    $(".sub-toggle").on("click", (e) => {
      e.preventDefault();
      $(".sub-menu").slideToggle(300);
    });
  }
});
