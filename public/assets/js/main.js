$(window).on("load", function () {
  new WOW().init();

  // Slick
  $(function () {
    $(".statistics").slick({
      autoplay: true,
      dots: true,
      arrows: true,
      prevArrow: $(".card-prev"),
      nextArrow: $(".card-next "),
      centerMode: false,
      pauseOnFocus: true,
    });
  });

  //filtering gross profit

  $(".bookinnBreakdown").on("click", function () {
    $("#all-bookinns").addClass("d-none");
    $("#bookinnBreakdown").removeClass("d-none");
  });

  $(".allbookinn").on("click", function () {
    $("#all-bookinns").removeClass("d-none");
    $("#bookinnBreakdown").addClass("d-none");
  });

  //-------------------------------------------------------
  //data representation functions
  //-------------------------------------------------------

  //collection trends
  var diff = $(".trend h4").text();
  //		diff=diff.replace(',', '');
  var count = (diff.match(/,/g) || []).length;

  var i;
  count = count + 1;
  for (i = 0; i < count; i++) {
    diff = diff.replace(",", "");
  }

  diff = parseInt(diff);

  if (diff > 0) {
    $(".trend h4").addClass("text-success");
    $(".trend i").addClass(" zmdi-trending-up");
  }

  if (diff < 0) {
    $(".trend h4").addClass("text-danger");
    $(".trend i").addClass("zmdi-trending-down");
  }

  if (diff == 0) {
    $(".trend h4").addClass("text-info");
    $(".trend i").addClass("zmdi-dot-circle");
  }

  //	for the months

  var mon_diff = $(".month-trend h4").text();
  //		diff=diff.replace(',', '');
  var count = (mon_diff.match(/,/g) || []).length;

  var i;
  count = count + 1;
  for (i = 0; i < count; i++) {
    mon_diff = mon_diff.replace(",", "");
  }

  mon_diff = parseInt(mon_diff);

  if (mon_diff > 0) {
    $(".month-trend h4").addClass("text-success");
    $(".month-trend i").addClass(" zmdi-trending-up");
  }

  if (mon_diff < 0) {
    $(".month-trend h4").addClass("text-danger");
    $(".month-trend i").addClass("zmdi-trending-down");
  }

  if (mon_diff == 0) {
    $(".month-trend h4").addClass("text-info");
    $(".month-trend i").addClass("zmdi-dot-circle");
  }

  //changing graph
  $("#select-graph").on("change", function () {
    var selected = $(this).val();
    //		alert(selected);
    if (selected == "Detailed") {
      $("#revenuestream-annual").removeClass("d-none");
      $("#substreams").addClass("d-none");
    } else {
      $("#revenuestream-annual").addClass("d-none");
      $("#substreams").removeClass("d-none");
    }
  });

  //	for the months

  //collection trends

  //-------------------------------------------------------
  //data representation functions
  //-------------------------------------------------------

  //=======================================================
  /*the streams progress bars*/
  //=======================================================
  stream_calc();

  function stream_calc() {
    var stream_total;

    var today_stream_total = $(".today-collections h4").text();
    var count = (today_stream_total.match(/,/g) || []).length;

    var i;
    count = count + 1;
    for (i = 0; i < count; i++) {
      today_stream_total = today_stream_total.replace(",", "");
    }

    $(".the-streams .form-group").each(function (index) {
      var stream_collection = $(this)
        .children("label")
        .children("span")
        .eq(1)
        .text();
      var stream_name = $(this).children("label").children("span").eq(0).text();
      //			alert(stream_name);
      var count = (stream_collection.match(/,/g) || []).length;
      //			alert(count);
      var i;
      count = count;
      for (i = 0; i < count; i++) {
        stream_collection = stream_collection.replace(",", "");
      }
      stream_collection = parseInt(stream_collection);

      stream_total = stream_total + stream_collection;

      var percentage = parseInt((stream_collection * 100) / today_stream_total);
      //			alert(percentage);
      var progress_value = percentage + "%";
      $(this).attr(
        "data-original-title",
        progress_value +
          " (Click to view " +
          stream_name +
          " Collection summary)"
      );

      var the_bar = $(this).children(".progress").children(".progress-bar");
      the_bar.addClass("added");

      the_bar.css("width", progress_value);

      //			progress color controller

      if (percentage > 0) {
        if (percentage < 15) {
          the_bar.addClass("progress-bar-dangger");
        }
      }

      if (percentage > 14) {
        if (percentage < 40) {
          the_bar.addClass("progress-bar-warning");
        }
      }

      if (percentage > 39) {
        if (percentage < 75) {
          the_bar.addClass("progress-bar-info");
        }
      }

      if (percentage > 74) {
        if (percentage < 101) {
          the_bar.addClass("progress-bar-success");
        }
      }

      //			progress color controller
    });
    //		alert(today_stream_total);
  }

  //=======================================================
  /*the streams progress bars*/
  //=======================================================

  var to_day = moment().format("ddd, MMMM Do YYYY");
  $(".date-range-text").text(to_day);

  $(".today").text(moment().format("MMM Do YY"));

  $(".year-abr").text(moment().format("YY"));
  $(".this-year").text(moment().format("YYYY"));
  $(".this-month").text(moment().format("MMMM"));
  $(".month-abr").text(moment().format("MMM"));
  //	alert(moment().format('YY'));

  $(function () {
    var start = moment();
    var end = moment();

    function cb(start, end) {
      // $('#today').html(start.format('MMMM D, YYYY'));

      if (end.format("MMMM D, YYYY") === start.format("MMMM D, YYYY")) {
        $("#reportrange span").html(start.format("MMMM D, YYYY"));
        $("#today").html(start.format("MMMM D, YYYY"));

        if (moment().format("MMMM D, YYYY") === start.format("MMMM D, YYYY")) {
          // if todays date is today
          $("#date-reset").addClass("d-none");
        } else {
          $("#date-reset").removeClass("d-none");
        }
      } else {
        $("#reportrange span").html(
          start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
        );
        $("#today").html(
          start.format("MMMM D, YYYY") + " - " + end.format("MMMM D, YYYY")
        );
        $("#date-reset").removeClass("d-none");
      }
    }

    $("#reportrange").daterangepicker(
      {
        startDate: start,
        endDate: end,
        ranges: {
          Today: [moment(), moment()],
          "Next 7 Days": [moment().add(6, "days"), moment()],
          "Next 30 Days": [moment().add(29, "days"), moment()],
          "This Month": [moment().startOf("month"), moment().endOf("month")],
          "Next Month": [
            moment().add(1, "month").startOf("month"),
            moment().add(1, "month").endOf("month"),
          ],
        },
      },
      cb
    );

    cb(start, end);
  });

  function reset_date() {
    $("#reportrange span").html(moment().format("MMMM D, YYYY"));
    // $('#today').html(moment().format('MMMM D, YYYY'));
    $("#date-reset").addClass("d-none");
  }

  //	custom day time picker
  $("#daily_date").on("change", function () {
    var dated = $(this).val();
    var dated = moment(dated).format("LL");
    $(".the_day").text(dated);
    //		alert(moment(dated).format('LL'));
  });
  $(".table-ranger").on("change", function () {});
  //	increase wigdth when value changes
  function Expand(obj) {
    if (!obj.savesize) obj.savesize = obj.size;
    obj.size = Math.max(obj.savesize, obj.value.length);
  }

  //	date ranger functions

  $(".date-range")[0] &&
    $(".date-range").flatpickr({
      enableTime: !1,
      altInput: true,
      mode: "range",
      altFormat: "j-F, Y",
      dateFormat: "Y-m-d",
      maxDate: "today",
      minDate: "06-10-2020",

      nextArrow: '<i class="zmdi zmdi-long-arrow-right" />',
      prevArrow: '<i class="zmdi zmdi-long-arrow-left" />',

      //		write a function here when making changes in regards to date ranger

      onClose: function (selectedDates, dateStr, instance) {
        var therange = $("#date_ranger").val();

        //selected date range
        var dates = therange.split(" to ");

        //date in the format 2020-mm-dd
        var date1 = dates[0];
        var date2 = dates[1];

        // date in the format March 19, 2020
        var date1read = moment(date1).format("ddd, MMMM Do YYYY");
        var date2read = moment(date2).format("ddd, MMMM Do YYYY");

        //======= write custom functions bellow once a change has been made to the date range=======

        //function to update text output with new date range
        if (date1read == date2read) {
          $(".date-range-text").text(date1read);
        } else {
          $(".date-range-text").text(date1read + " To " + date2read);
        }
      },
    });
  //	full screen table

  $("body").on("click", "[data-table-action]", function (a) {
    a.preventDefault();
    var b = $(this).data("table-action");
    if (
      ("print" === b &&
        $(this)
          .closest(".dataTables_wrapper")
          .find(".buttons-print")
          .trigger("click"),
      "fullscreen" === b)
    ) {
      var c = $(this)
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent()
        .parent();
      c.hasClass("card--fullscreen")
        ? (c.removeClass("card--fullscreen"),
          $("body").removeClass("data-table-toggled"))
        : (c.addClass("card--fullscreen"),
          $("body").addClass("data-table-toggled"));
    }
  });
  //full screen controller

  //	datatable navigation styling
  $(".nav-link").on("click", function () {
    event.preventDefault();
    $(this)
      .addClass("active")
      .parent()
      .siblings()
      .children(".nav-link")
      .removeClass("active");
  });

  // $('td').eq(0).on('click', function(){
  // 	$('.modal-body-header').children('span').html("nothing");

  // 	var html_data=$('this').siblings().index(6).text();
  // 	alert(html_data);
  // });

  $(".show-all").on("click", function () {
    $(".table-all").removeClass("d-none").siblings().addClass("d-none");
  });

  $(".show-compliant").on("click", function () {
    $(".table-compliant").removeClass("d-none").siblings().addClass("d-none");
  });

  $(".show-uncompliant").on("click", function () {
    $(".table-uncompliant").removeClass("d-none").siblings().addClass("d-none");
  });

  $(".show-penalty").on("click", function () {
    $(".table-penalty").removeClass("d-none").siblings().addClass("d-none");
  });
});

//department and agencies
$("input[name='memberType']").on("change", function () {
  var userType = $(this).val();

  if (userType == "department") {
    $(".departmentInputs")
      .removeClass("d-none")
      .siblings(".agencyInputs")
      .addClass("d-none");
  }
  if (userType == "agent") {
    $(".agencyInputs")
      .removeClass("d-none")
      .siblings(".departmentInputs")
      .addClass("d-none");
  }
});

//owl initializer
$(document).ready(function () {
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 15000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 1,
      },
      992: {
        items: 2,
      },
      1200: {
        items: 3,
      },
      1440: {
        items: 4,
      },
    },
  });
});

function checkin_payment() {
  if (document.getElementById("check_card").checked) {
    $(".cash-card-container").addClass("d-none");
    $(".credit-card-container").removeClass("d-none");
    $(".mpesa-card-container").addClass("d-none");
    document.getElementById("check_cash").checked = false;
  } else if (document.getElementById("check_cash").checked) {
    $(".cash-card-container").removeClass("d-none");
    $(".credit-card-container").addClass("d-none");
    $(".mpesa-card-container").addClass("d-none");
    document.getElementById("check_card").checked = false;
  } else if (document.getElementById("check_mpesa").checked) {
    $(".credit-card-container").addClass("d-none");
    $(".mpesa-card-container").removeClass("d-none");
    $(".cash-card-container").addClass("d-none");
    document.getElementById("check_card").checked = false;
  }
}

function checkin_booking_type() {
  if (document.getElementById("check_organisation").checked) {
    $(".designation_input").removeClass("d-none");
    $(".company_input").removeClass("d-none");
    document.getElementById("check_individual").checked = false;
  } else if (document.getElementById("check_individual").checked) {
    $(".designation_input").addClass("d-none");
    $(".company_input").addClass("d-none");
    document.getElementById("check_organisation").checked = false;
  }
}

$(".front-desk-link").on("click", function () {
  $(".front-desk-link").addClass("active");
  $(".form-gen-information").removeClass("d-none");
  $(".online-link").removeClass("active");
  $(".bulk-link").removeClass("active");
  $(".form-online").addClass("d-none");
});

$(".online-link").on("click", function () {
  $(".online-link").addClass("active");
  $(".form-gen-information").addClass("d-none");
  $(".front-desk-link").removeClass("active");
  $(".bulk-link").removeClass("active");
  $(".form-online").removeClass("d-none");
});

$("body").on("click", ".add_person", function (e) {
  e.preventDefault();
  // $(this).addClass('d-none');
  var the_form = $(this).parent().parent().parent().parent().parent();
  var theIndex = the_form.index();
  AddPerson(theIndex);
  $(this).addClass("d-none");
  //alert(theIndex);
});

//Group Checkin duplicate form
function AddPerson(theIndex) {
  var cln = document.getElementById("group_form").cloneNode(true);
  //$('.group_form').children('form').trigger("reset");
  document.getElementsByClassName("group-checkin")[0].appendChild(cln);

  var new_index = theIndex + 1;
  $(".group_form")
    .eq(new_index)
    .find("input:text, input:password, input:file, input, select, textarea")
    .val("");
  $(".group_form")
    .eq(new_index)
    .find("input:radio, input:checkbox")
    .removeAttr("checked")
    .removeAttr("selected");
  $(".group_form").eq(new_index).find(".add_person").removeClass("d-none");
  $(".group_form")
    .eq(new_index)
    .find("#bulk_child_check")
    .attr("id", "bulk_child_check" + new_index);
  // alert(this.attr("id"));
}

// Laundry Stain JS
$(".stain input").on("click", function () {
  var stain_id = $(this).attr("id");
  if (this.checked) {
    $("#" + stain_id)
      .siblings(".stain-cost")
      .removeClass("d-none");
  } else {
    $("#" + stain_id)
      .siblings(".stain-cost")
      .addClass("d-none");
    document.getElementById(stain_id).checked = false;
  }
});

$("#child_check").on("click", function () {
  if (document.getElementById("child_check").checked) {
    $(".child-form").removeClass("d-none");
    $(".adult-form").addClass("d-none");
  } else {
    $(".child-form").addClass("d-none");
    $(".adult-form").removeClass("d-none");
  }
});

function show_booking_details() {
  document.getElementById("search_booking_results").classList.remove("d-none");
  document.getElementById("before_search_booking_img").classList.add("d-none");
}

$("#nat-id").on("change", function () {
  var file = $(this).val();
  var fullPath = $(this).val();

  var startIndex =
    fullPath.indexOf("\\") >= 0
      ? fullPath.lastIndexOf("\\")
      : fullPath.lastIndexOf("/");
  var filename = fullPath.substring(startIndex);
  if (filename.indexOf("\\") === 0 || filename.indexOf("/") === 0) {
    filename = filename.substring(1);
  }

  if (file == "") {
    alert("No files selected");
    $(".id-container").removeClass("activated");
    $(".id-container small strong").text("No file selected");
    $(".id-container small")
      .addClass("text-danger")
      .removeClass("text-success");
  } else {
    $(".id-container").addClass("activated");
    $(".id-container small strong").text("File (" + filename + ") Selected");
    $(".id-container small")
      .addClass("text-success")
      .removeClass("text-danger");
  }
  //id-container
});

$("#card_no").mask("9999 9999 9999 9999");

function checkout_details() {
  $(".checkout-search").addClass("d-none");
  $(".checkout_content").removeClass("d-none");
}

//Discount JS
function discount_type() {
  if (document.getElementById("non_fixed").checked) {
    $(".unfixed-amount").removeClass("d-none");
    $(".fixed-amount").addClass("d-none");
    document.getElementById("fixed").checked = false;
  } else if (document.getElementById("fixed").checked) {
    $(".fixed-amount").removeClass("d-none");
    $(".unfixed-amount").addClass("d-none");
    document.getElementById("non_fixed").checked = false;
  }
}

// Send Card Link destintion
$("#card_email").on("change", function () {
  if (document.getElementById("card_email").checked) {
    $(".card-phone").addClass("d-none");
    $(".card-email").removeClass("d-none");
    $("#card_phone").checked = false;
  } else {
    $(".card-phone").removeClass("d-none");
    $(".card-email").addClass("d-none");
  }
});

$("#card_phone").on("change", function () {
  if (document.getElementById("card_phone").checked) {
    $(".card-phone").removeClass("d-none");
    $(".card-email").addClass("d-none");
    $("#card_email").checked = false;
  } else {
    $(".card-phone").addClass("d-none");
    $(".card-email").removeClass("d-none");
  }
});

//Laundry JS
function laundry_type() {
  if (document.getElementById("non_fixed_laundry").checked) {
    $(".unfixed-amount-laundry").removeClass("d-none");
    $(".fixed-amount-laundry").addClass("d-none");
    document.getElementById("fixed_laundry").checked = false;
  } else if (document.getElementById("fixed_laundry").checked) {
    $(".fixed-amount-laundry").removeClass("d-none");
    $(".unfixed-amount-laundry").addClass("d-none");
    document.getElementById("non_fixed_laundry").checked = false;
  }
}

var percent_id;

$(".test-div .percent").on("change", function () {
  if (this.checked) {
    $("#percent-modal").modal("show");
  }
  percent_id = $(this).attr("id");
});

function change_percentage() {
  var input_value = $("#percent-modal").find("input").val();
  // alert(id);
  $("#" + percent_id)
    .next()
    .text(input_value + "%");
  $("#percent-modal").modal("hide");
  $("#percent-modal").find("input").val("");
}

var amount_id;

$(".test-div .amount").on("change", function () {
  if (this.checked) {
    $("#amount-modal").modal("show");
  }
  amount_id = $(this).attr("id");
});

function change_amount() {
  var input_value = $("#amount-modal").find("input").val();
  // alert(id);
  $("#" + amount_id)
    .next()
    .text("KES" + input_value);
  $("#amount-modal").modal("hide");
  $("#amount-modal").find("input").val("");
}

$(".room-package").removeClass("d-none");
$(".grounds-package").addClass("d-none");
$(".conference-package").addClass("d-none");
$("select.accomodation_type").val("Rooms");

$("select.accomodation_type").change(function () {
  var accomodation_type = $(this).children("option:selected").val();
  if (accomodation_type === "Grounds") {
    $(".room-package").addClass("d-none");
    $(".grounds-package").removeClass("d-none");
    $(".conference-package").addClass("d-none");
  } else if (accomodation_type === "Conference") {
    $(".room-package").addClass("d-none");
    $(".grounds-package").addClass("d-none");
    $(".conference-package").removeClass("d-none");
  } else if (accomodation_type === "Rooms") {
    $(".room-package").removeClass("d-none");
    $(".grounds-package").addClass("d-none");
    $(".conference-package").addClass("d-none");
  } else {
    $(".room-package").removeClass("d-none");
    $(".grounds-package").addClass("d-none");
    $(".conference-package").addClass("d-none");
  }
});

var room_counts;

$(".room-type input").on("click", function () {
  if (this.checked) {
    $("#room_count").modal("show");
  }
  room_counts = $(this).attr("id");
});

function change_room_count() {
  var input_value = $("#room_count").find("input").val();
  // alert(id);
  var rooms_text = $("#" + room_counts)
    .next()
    .text();
  $("#" + room_counts)
    .next()
    .text(rooms_text + " (" + input_value + ")");
  $("#room_count").modal("hide");
  $("#room_count").find("input").val("");
}
