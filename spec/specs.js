describe('triangleTracker', function () {
  it("returns equilateral for triangles with equal sides", function () {
    expect(triangleTracker(5, 5, 5)).to.equal("equilateral");
  });

  it("returns isosceles for triangles with two equal sides", function () {
    expect(triangleTracker(5, 5, 6)).to.equal("isosceles");
  });
});
