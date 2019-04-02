describe('Split Array function', function () {
  it('is able to split an array into two halves', function () {
    expect(split([4, 3, 5, 8])).toEqual([[4, 3], [5, 8]])
  });
  it('deals with odd arrays', function () {
    expect(split([4, 3, 5, 8, 7])).toEqual([[4, 3, 5], [8, 7]])
  });
});

describe('Merge function', function () {
  it('is able to merge two sorted arrays into one sorted array', function () {
    expect(merge([[3, 4], [5, 8]])).toEqual([3, 4, 5, 8]);
  });
});
