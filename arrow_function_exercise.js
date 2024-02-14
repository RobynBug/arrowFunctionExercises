/* function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }
  */

 /* Write an ES2015 Version */

  const double = (arr) => {
    return arr.map((val) => {
        return val * 2;
    })
  };

  console.log(double([4, 3 , 6 ]));
/* 
function squareAndFindEvens(numbers){
  var squares = numbers.map(function(num){
    return num ** 2;
  });
  var evens = squares.filter(function(square){
    return square % 2 === 0;
  });
  return evens;
}
  */

 /* Write an ES2015 Version */

const squareAndFindEvens = (numbers) => {
    const squares = numbers.map((num) => {
        return num ** 2;
    });
    const evens = squares.filter((square) => {
        return square % 2 === 0;
    })
    return evens;
};

// console.log(squareAndFindEvens([4, 3 , 6 ]));