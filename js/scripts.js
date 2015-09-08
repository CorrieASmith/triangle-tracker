var triangleTracker = function(side1, side2, side3) {
  if (side1 + side2 >= side3 && side2 + side3 >= side1 && side1 + side3 >= side2) {
    if (side1 === side2 && side2 == side3) {
      return "equilateral";
    };
  };
};
