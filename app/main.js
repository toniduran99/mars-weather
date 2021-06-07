
fetch('https://mars-weather-rems.netlify.app/rems.json')
.then((res) => res.json())
.then(data => {
  let element = document.getElementById("main");
          let item = `  <div class="principal">
            <div class="ubicacion">MARTE</div>
            <div class="temp">
                <div id="temperatura_actual">
              
                </div>
                <div id="temperatura_actual">
                <div>25º</div>
                <div class="dato">ACTUAL</div>
                </div>
                
                <div class="temperatura_limites">
                    <div id="max">
                    <div class="temper">${data.weather_report.magnitudes[0].max_temp}</div>
                    <div class="dato">MAX</div>
                    </div>
                    <div id="max">
                    <div class="temper">${data.weather_report.magnitudes[0].min_temp}</div>
                    <div class="dato">MIN</div>
                    </div>
                </div>
            </div>
            <div class="fecha"  >${data.weather_report.terrestrial_date}</div>
            <div id="sol" >${data.weather_report.sol}</div>
          </div>

          <div class="masinfo">
            <div class="salida_sol">
            <div>${data.weather_report.magnitudes[0].sunrise}</div>
            <div class="dato">  SUNRISE</div>
            </div>
            <div class="viento">${data.weather_report.magnitudes[0].wind_speed}km/h</div>
            <div class="puesta_sol">
            <div>${data.weather_report.magnitudes[0].sunset}</div>
            <div class="dato">  SUNSET</div>
            </div>
          </div>
          <div class="secundario">
           
            <a class="home" href="index.html"><span class="material-icons">home</span></a>
            <a class="datos" href="data.html"><span class="material-icons">list</span></a>
             <a class="descargar" ><span class="material-icons">file_download</span></a>
             <a class="descargar" href="info.html">  <span class="material-icons">info</span></a>
          </div> 
          
          
          `;

          element.innerHTML += item;

})

  





