var triangleTracker = function(side1, side2, side3) {
  if (side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) {
    if (side1 === side2 && side2 == side3) {
      return "equilateral";
    } else if (side1 === side2 || side2 === side3 || side1 === side3) {
      return "isosceles";
    } else {
      return "scalene";
    };
  } else {
    return "not a triangle";
  };
};

$(document).ready(function() {
  $("form#triangle-tracker").submit(function(event) {
    var side1 = parseInt($("input#side1").val());
    var side2 = parseInt($("input#side2").val());
    var side3 = parseInt($("input#side3").val());
    var output = triangleTracker(side1, side2, side3);

    $(".side1").text(side1);
    $(".side2").text(side2);
    $(".side3").text(side3);
    $(".output").text(output);

    $("#output").show();
    event.preventDefault();
  });
});
