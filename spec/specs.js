describe('triangleTracker', function () {
  it("returns equilateral for triangles with equal sides", function () {
    expect(triangleTracker(5, 5, 5)).to.equal("equilateral");
  });

  it("returns isosceles for triangles with two equal sides", function () {
    expect(triangleTracker(5, 5, 6)).to.equal("isosceles");
  });

  it("returns scalene for triangles with no equal sides", function () {
    expect(triangleTracker(5,6,7)).to.equal("scalene");
  });

  it("returns 'not a triangle' if not a triangle", function () {
    expect(triangleTracker(5,6, 999)).to.equal("not a triangle");
  });
});
