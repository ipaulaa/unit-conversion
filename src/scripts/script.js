function convert(fromUnit, rate) {
  return [fromUnit * rate, fromUnit / rate];
}

const METER_TO_FEET = 3.2808;
const LITER_TO_GALLON = 0.2642;
const KILOGRAM_TO_POUND = 2.2046;

const form = document.getElementById("conversion-form");
const fromValues = document.querySelectorAll(".from-value");

const unitsDOM = {
  feet: document.getElementById("feet"),
  meters: document.getElementById("meters"),
  liter: document.getElementById("liter"),
  gallon: document.getElementById("gallon"),
  kilogram: document.getElementById("kilogram"),
  pound: document.getElementById("pound")
};

form.addEventListener("submit", e => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const value = Number(formData.get("value"));

  const [unitFeet, unitMeters] = convert(value, METER_TO_FEET);
  const [unitGallon, unitLiter] = convert(value, LITER_TO_GALLON);
  const [unitPound, unitKilogram] = convert(value, KILOGRAM_TO_POUND);

  unitsDOM.feet.textContent = unitFeet.toFixed(3);
  unitsDOM.meters.textContent = unitMeters.toFixed(3);
  unitsDOM.gallon.textContent = unitGallon.toFixed(3);
  unitsDOM.liter.textContent = unitLiter.toFixed(3);
  unitsDOM.pound.textContent = unitPound.toFixed(3);
  unitsDOM.kilogram.textContent = unitKilogram.toFixed(3);

  fromValues.forEach(fromValue => (fromValue.textContent = `${value}`));
});
