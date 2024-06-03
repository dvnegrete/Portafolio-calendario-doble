import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Calendario Doble</h1>
    <p>Valores de variables CSS</p>
    
    <form class="form-input">
      <div>
        <label for="primary-color">--primary-color</label>
        <input type="color" id="primary-color" name="primary-color" value="#1e5712">
      </div>
      <div>
        <label for="secondary-color">--secondary-color</label>
        <input type="color" id="secondary-color" name="secondary-color" value="#1b480cf3">
      </div>
      <div>
        <label for="tertiary-color">--tertiary-color</label>
        <input type="color" id="tertiary-color" name="tertiary-color" value="#6290a1">
      </div>
      <div>
        <label for="inactive-color">--inactive-color</label>
        <input type="color" id="inactive-color" name="inactive-color" value="#737575fa">
      </div>
      <div>
        <label for="backgroud-color">--backgroud-color</label>
        <input type="color" id="backgroud-color" name="backgroud-color" value="#b7d2f1">
      </div>
      <div>
        <label for="border-color">--border-color</label>
        <input type="color" id="border-color" name="border-color" value="#cccccc">
      </div>
      <div>
        <label for="font-color">--font-color</label>
        <input type="color" id="font-color" name="font-color" value="#171809">
      </div>
    </form>

    <calendar-input-selection/>
    
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  const colorInputs = document.querySelectorAll('input[type="color"]');

  colorInputs.forEach(input => {
    input.addEventListener('input', (event) => {
      const colorVariable = `--${event.target.name}`;
      root.style.setProperty(colorVariable, event.target.value);
    });
  });
});
