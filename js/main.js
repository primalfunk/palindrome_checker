//palindrome checker

function check_palindrome(str) {
  var arr1 = str.split('')
  var arr2 = []
  for(var i = 0; i < arr1.length; i++) {
    arr2.push(arr1[arr1.length - (i+1)])
  }
  if (arr1 === arr2) {
    return true
  } else {
    return false
  }
}

