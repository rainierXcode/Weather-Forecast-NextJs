export default function switchChange() {
  const checkbox = document.getElementById('celcius__farenheit');
  checkbox.addEventListener('change', () => {
    if (checkbox.checked) {
      checkbox.setAttribute('data-temp', '°F');
    } else {
      checkbox.setAttribute('data-temp', '°C');
    }
  });
}
