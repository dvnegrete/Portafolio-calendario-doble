import './style.css'

document.querySelector('#app').innerHTML = `
  <div class="container">
    <h1>Calendario Doble</h1>
    <a href="https://www.npmjs.com/package/dvn-calendar-double">Publicado en NPM</a>
    
    <h2>Valores de variables CSS</h2>
    
    <form class="form-input">
      <div>
        <label for="primary-color">--primary-color</label>
        <input type="color" id="primary-color" name="primary-color" value="#056dae">
      </div>
      <div>
        <label for="secondary-color">--secondary-color</label>
        <input type="color" id="secondary-color" name="secondary-color" value="#0075c0">
      </div>
      <div>
        <label for="tertiary-color">--tertiary-color</label>
        <input type="color" id="tertiary-color" name="tertiary-color" value="#def6ff">
      </div>
      <div>
        <label for="inactive-color">--inactive-color</label>
        <input type="color" id="inactive-color" name="inactive-color" value="#B3B3B3">
      </div>
      <div>
        <label for="backgroud-color">--backgroud-color</label>
        <input type="color" id="backgroud-color" name="backgroud-color" value="#FFFFFF">
      </div>
      <div>
        <label for="border-color">--border-color</label>
        <input type="color" id="border-color" name="border-color" value="#CCCCCC">
      </div>
      <div>
        <label for="font-color">--font-color</label>
        <input type="color" id="font-color" name="font-color" value="#323232">
      </div>      
      <div>
      <label for="font-light">--fontlight. Fuente:</label>
      <select id="font-light" name="font-light">
          <option value="'InterStateL', sans-serif">InterStateL</option>
          <option value="'Arial', sans-serif">Arial</option>
          <option value="'Courier New', monospace">Courier New</option>
          <option value="'Georgia', serif">Georgia</option>
          <option value="'Times New Roman', serif">Times New Roman</option>
          <option value="'Verdana', sans-serif">Verdana</option>
      </select>
  </div>
    </form>

    <calendar-input-selection/>
    
  </div>
`;

document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;

  const colorInputs = document.querySelectorAll('input[type="color"]');
  const inputFontFamily = document.getElementById('font-light');

  colorInputs.forEach(input => {
    input.addEventListener('input', (event) => {
      const colorVariable = `--${event.target.name}`;
      root.style.setProperty(colorVariable, event.target.value);
    });
  });

  inputFontFamily.addEventListener('change', (event) => {
    const fontFamily = event.target.value;
    root.style.setProperty('--font-light', fontFamily);
  });

});

