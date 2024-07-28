function fill(array, value, start = 0, end = array.length) {

    const len = end
    if (start < 0) {
      start = len + start
    }
    if (end < 0) {
      end = len + end;
    }

    if (!(start <= end)) {
      return array;
    }

    if (start < 0 || start >= len || end < 0 || end > array.length) {
      return array;
    }
  
    let i = start;
    while (i < end) {
      array[i] = value;
      i++;
    }
    return array;
  
  }

  console.log(fill([1], '*', 2, 3));