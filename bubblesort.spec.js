describe('Bubble Sort', function(){
	beforeEach(function() {
		spyOn(Array.prototype, 'sort').and.callThrough();
	});
  it('handles an empty array', function(){
    expect( bubbleSort([]) ).toEqual( [] );
  });
  it('handles single element in an array', function(){
  	expect( bubbleSort([1])).toEqual([1]);
  });
  it('handles multiple element array', function(){
  	expect(bubbleSort([5,6,3,8,2])).toEqual([2,3,5,6,8])
  })
  it('uses swapsies to swap elements', function(){
  	spyOn(window, 'swapsies').and.callThrough();
  	expect(bubbleSort([5,6,3,8,2])).toEqual([2,3,5,6,8])
  	expect(swapsies).toHaveBeenCalled();
  })

  it('should not use Array.prototype.sort', function(){
  	bubbleSort([5,6,3,8,2]);
  	expect(Array.prototype.sort.calls.any()).toEqual(false)
  })
  
});
