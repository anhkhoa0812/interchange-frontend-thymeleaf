$(function () {
  // =====================================
  // Doanh thu tháng
  // =====================================

  var options = {

    series: [],

    chart: {
      type: "bar",
      height: 345,
      width: 680,
      offsetX: -15,
      toolbar: { show: false },
      foreColor: "#adb0bb",
      fontFamily: "inherit",
      sparkline: { enabled: false },
    },

    colors: ["#04364A"],

    plotOptions: {
      bar: {
        horizontal: false,
        columnWidth: "40%",
        borderRadius: [0],
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    markers: { size: 0 },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },

    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },

    xaxis: {
      type: "category",
      categories: [
        "1",
        "2",
        "3",
        "4",
        "5",
        "6",
        "7",
        "8",
        "9",
        "10",
        "11",
        "12",
        "Month",
      ],
      labels: {
        style: { cssClass: "grey--text lighten-2--text fill-color" },
      },
    },

    yaxis: {
      show: true,
      min: 0,
      max: 125,
      tickAmount: 5,
      labels: {
        style: {
          cssClass: "grey--text lighten-2--text fill-color",
        },
        formatter: function (value) {
          return value + "tr vnd";
        },
      },
    },
    stroke: {
      show: true,
      width: 3,
      lineCap: "butt",
      colors: ["transparent"],
    },

    tooltip: { theme: "light" },
    responsive: [
      {
        breakpoint: 600,
        options: {
          plotOptions: {
            bar: {
              borderRadius: 3,
            },
          },
        },
      },
    ],
  };
  var chart = new ApexCharts(document.querySelector("#chart"), options);
  chart.render();

  $('#year-select').change(function() {
    var selectedYear = $(this).val();
    var url = "http://localhost:8080/api/project/total-cost/" + selectedYear;
    $.getJSON(url, function(response) {
      if(Array.isArray(response)) {

        chart.updateSeries([{
          name: 'Doanh thu tháng',
          data: response
        }]);
      } else {
        console.log("Invalid response format");
      }
    })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log("AJAX request failed: " + errorThrown);
        });
  });




    // =====================================
  // Breakup
  // =====================================
  var breakup1 = {
    color: "#adb5bd",
    series: [],
    labels: ["Đang chờ phê duyệt", "Đang xử lý yêu cầu", "Đã hoàn thành", "Đã hủy"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#04364A", "#176B87", "rgba(236, 242, 255,1)", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 200,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };

  var chart1 = new ApexCharts(document.querySelector("#breakup1"), breakup1);
  chart1.render();

  $(document).ready(function() {
    var url = "http://localhost:8080/api/quotation/countQuotationByStatus";
    $.getJSON(url, function(response) {
        if(Array.isArray(response)) {
            chart1.updateSeries(response);
        } else {
            console.log("Invalid response format");
        }
    })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log("AJAX request failed: " + errorThrown);
        });
  });


  var breakup2 = {
    color: "#adb5bd",
    series: [],
    labels: ["An Cường", "Thanh Thủy", "Mộc Phát"],
    chart: {
      width: 180,
      type: "donut",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          size: "75%",
        },
      },
    },
    stroke: {
      show: false,
    },

    dataLabels: {
      enabled: false,
    },

    legend: {
      show: false,
    },
    colors: ["#04364A", "#176B87", "#F9F9FD"],

    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 150,
          },
        },
      },
    ],
    tooltip: {
      theme: "dark",
      fillSeriesColor: false,
    },
  };
  var chart2 = new ApexCharts(document.querySelector("#breakup2"), breakup2);
  chart2.render();
  $(document).ready(function() {
    var url = "http://localhost:8080/api/supplier/countProductBySupplier";
    $.getJSON(url, function(response) {
      if(Array.isArray(response)) {
        chart2.updateSeries(response);
      } else {
        console.log("Invalid response format");
      }
    })
        .fail(function(jqXHR, textStatus, errorThrown) {
          console.log("AJAX request failed: " + errorThrown);
        });
  });

  // =====================================
  // Earning
  // =====================================
  var earning = {
    chart: {
      id: "sparkline3",
      type: "area",
      height: 60,
      sparkline: {
        enabled: true,
      },
      group: "sparklines",
      fontFamily: "Plus Jakarta Sans', sans-serif",
      foreColor: "#adb0bb",
    },
    series: [
      {
        name: "Earnings",
        color: "#04364A",
        data: [25, 66, 20, 40, 12, 58, 20],
      },
    ],
    stroke: {
      curve: "smooth",
      width: 2,
    },
    fill: {
      colors: ["#f3feff"],
      type: "solid",
      opacity: 0.05,
    },

    markers: {
      size: 0,
    },
    tooltip: {
      theme: "dark",
      fixed: {
        enabled: true,
        position: "right",
      },
      x: {
        show: false,
      },
    },
  };
  new ApexCharts(document.querySelector("#earning"), earning).render();
});