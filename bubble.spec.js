
describe('Bubble Sort', function() {
  it('handles an empty array', function() {
    expect(bubbleSort([])).toEqual([]);
  });
  it('Sorts and array', function() {
    expect(bubbleSort([4, 2, 10, 9])).toEqual([2, 4, 9, 10]);
  });
});

describe('Swap', function () {
  beforeAll(function () {
    spyOn(window, 'swap').and.callThrough();
  });
  it('swaps numbers the correct amount of times', function () {
    bubbleSort([2,4,8,6]);
    expect(window.swap.calls.count()).toEqual(6);
  });
})

