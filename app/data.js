window.onload = function(){

    fetch('https://mars-weather-rems.netlify.app/rems.json')
      .then((res) => res.json()) // the .json() method parses the JSON response into a JS object literal
      .then((data) => {
        
  
        let element = document.getElementById("main_data");
  
        element.innerHTML = `
        

        
 <table class="tabla_datos">
     <div class="superior">
             <div>ID</div>
             <div>SUN</div>
             <div>SUNRISE</div>
             <div>SUNSET</div>
             <div>PRESSURE</div>
         </div>
   </table>        
   
<!--Botones-->
<div class="secundario_2">

 <a class="home" href="index.html"><span class="material-icons">home</span></a>
 <a class="datos" href="data.html"><span class="material-icons">list</span></a>
  <a class="descargar" ><span class="material-icons">file_download</span></a>
  <a class="descargar" href="info.html">  <span class="material-icons">info</span></a>
</div> 
`;

          
});  
    

}
  





