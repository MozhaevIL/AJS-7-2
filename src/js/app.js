export default function phoneNumberFormat(number) {
  const numberNumeric = number.replace(/[^\d]+/g, '');
  const numberWithoutCountry = numberNumeric.substr(-10, 10);
  let countryCode = numberNumeric.substr(0, numberNumeric.length - 10);

  if (countryCode === '8') {
    countryCode = '7';
  }
  countryCode = `+${countryCode}`;

  return `${countryCode}${numberWithoutCountry}`;
}
