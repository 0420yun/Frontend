function types(a) {
    const result = [];
  
    for (let i = 0; i < a.length; i++) {
      result.push(typeof a[i]);
    }
  
    return result;
  }
  
  console.log(types([3, "hello", true]));
  console.log(types(["world", []]));