function isPrime(n){
  return n<2?false:!/^(11+?)\1+$/.test(Array(n+1).join('1'))
}


console.log(isPrime(10))
