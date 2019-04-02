describe('Bubble Sort', function(){
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
    });
  });

  beforeAll(function () {
    spyOn(swap).and.callThrough();
  });
  it('swaps numbers the correct amount of times', function () {
    bubbleSort([2,4,8,3,7,5,6,7]);
    expect(swap.calls.count()).toEqual(8);
  });