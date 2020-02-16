// Code your solution in this file!
function distanceFromHqInBlocks (value) {
  if (value > 42) {
    return value - 42;
  }
  else {
    return 42 - value;
  }
}

function distanceFromHqInFeet (value) {
  return distanceFromHqInBlocks(value) * 264;
}

function distanceTravelledInFeet (start , end) {
  if (start > end) {
    return (start - end) * 264;
  }
  else {
    return (end - start) * 264;
  }
}
