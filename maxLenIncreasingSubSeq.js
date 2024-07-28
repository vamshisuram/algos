const maxIncreasingSubseq = (numbers) => {
    const cache = {}
    const seqs = getSeqs(numbers, cache)
    let maxLength = 0
    for (let seq of seqs) {
      maxLength = Math.max(seq.length, maxLength)
    }
    return maxLength
  };
  
  const getSeqs = (numbers, cache) => {
    if (!numbers || !numbers.length) return []
    if (numbers.length === 1) return numbers
    
    const incSeqs = []
    for (let i = 0; i < numbers.length; i++) {
      const right = getSeqs(numbers.slice(i + 1), cache)
      if (right.length && right[0] > numbers[i]) {
        incSeqs.push([numbers[i], ...right]);  
      } else {
        incSeqs.push([numbers[i]])
      }
    }
    cache[numbers.length] = incSeqs;
    console.log("cache", cache)
    return incSeqs;
  }

// console.log(maxIncreasingSubseq([4, 18, 20, 10, 12, 15, 19])); // 5
console.log(maxIncreasingSubseq([7, 14, 10, 12])); // 3