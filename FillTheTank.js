function costToFill(tankSize, fuelLevel, pricePerGallon) {
  if(fuelLevel > tankSize) return;

  const leftSpace = tankSize - fuelLevel;

  const cost = leftSpace * pricePerGallon;
  return `$${cost.toFixed(2)}`;
}

console.log(
    costToFill(20, 0, 4.00)
);

console.log(
    costToFill(15, 10, 3.50)
);


