can concat
Write a function, canConcat, that takes in a string and an array of words as arguments. The function should return boolean indicating whether or not it is possible to concatenate words of the array together to form the string.

You may reuse words of the array as many times as needed.

test_00:
canConcat("oneisnone", ["one", "none", "is"]); // -> true
test_01:
canConcat("oneisnone", ["on", "e", "is"]); // -> false
test_02:
canConcat("oneisnone", ["on", "e", "is", "n"]); // -> true