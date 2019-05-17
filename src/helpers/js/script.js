var e = $("#back-to-top");
$(window).scroll(function () {
    300 < $(window).scrollTop() ? e.addClass("show") : e.removeClass("show")
}), e.on("click", function (e) {
    e.preventDefault(), $("html, body").animate({
        scrollTop: 0
    }, "300")
});
$(document).ready(function () {

    for (var s = document.getElementById("my-navbar-js").getElementsByClassName("nav-item"), a = 0; a < s.length; a++) s[a].addEventListener("click", function () {
        var e = document.getElementsByClassName("active");
        e[0].className = e[0].className.replace(" active", ""), this.className += " active"
    });
    var slickopts = {
        slidesToShow: 4,
        centerMode: true, 
        rows: 2, // Removes the linear order. Would expect card 5 to be on next row, not stacked in groups.
        responsive: [
          { breakpoint: 992,
            settings: {
              slidesToShow: 3
            }
          },
          { breakpoint: 776,
            settings: {
              slidesToShow: 1,
              rows: 1 // This doesn't appear to work in responsive (Mac/Chrome)
            }
          }]
      };
      
      $('.carousel').slick(slickopts);


});