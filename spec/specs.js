describe('triangleTracker', function () {
  it("returns equilateral for triangles with equal sides", function () {
    expect(triangleTracker(5, 5, 5)).to.equal("equilateral");
  });
});
