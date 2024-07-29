// Selecting Input Elements
const nombreInput = document.getElementById("nombre");
const provinciaInput = document.getElementById("provincia");
const ciudadInput = document.getElementById("ciudad");
const sectorInput = document.getElementById("sector");
const calleInput = document.getElementById("calle");
const carreraInput = document.getElementById("carrera");

let isvalid = true;





//validating fields
function validating(){

const nameVal = nombreInput.value;
const provinciaVal = provinciaInput.value;
const ciudadVal = ciudadInput.value;
const sectorVal = sectorInput.value;
const calleVal = calleInput.value;
const carreraVal = carreraInput.value;

let isValid = true;

isValid = inputValidator(nameVal, nombreInput, isvalid);
isValid = inputValidator(provinciaVal, provinciaInput, isValid );
isValid = inputValidator(ciudadVal, ciudadInput, isValid);
isValid = inputValidator(sectorVal, sectorInput, isValid);
isValid = inputValidator(calleVal, calleInput, isvalid);
isValid = inputValidator(carreraVal, carreraInput, isValid);


return isValid;
// this function will return either true or false then we're going to evaluate in the function cv generate
// Which is the final function who will generate the cv
};



const mostrarMaterias = () => {
    const container = document.querySelector(".container");
    const Elements = document.querySelector(".fila");
    const div = document.createElement("div");

    //values
  const carreraVal = carreraInput.value;

    if(!validating()){
        alert('Faltan campos !')
        } else {
        
          FirstToSecond()
        MateriasSelector(carreraVal);

        }
    
    }

    function getRadioValue(){
      const radios = document.querySelectorAll("#inlineRadio");
      let val;
      radios.forEach((e) => {
        if (e.checked === true){
            
            val = e.value;
        
        }
      })
      return val;
     
    }
    function getRadioValue2(){
      const radios = document.querySelectorAll("#inlineRadio2");
      let val;
      radios.forEach((e) => {
        if (e.checked === true){
        
            val = e.value;
        
        }
      })
      return val;
     
    }
    function getRadioValue3(){
      const radios = document.querySelectorAll("#inlineRadio3");
      let val;
      radios.forEach((e) => {
        if (e.checked === true){
          
            val = e.value;
        
        }
      })
      return val;
     
    }
    function getRadioValue4(){
      const radios = document.querySelectorAll("#inlineRadio4");
      let val;
      radios.forEach((e) => {
        if (e.checked === true){
          
            val = e.value;
        
        }
      })
      return val;
     
    }
    function getRadioValue5(){
      const radios = document.querySelectorAll("#inlineRadio5");
      let val;
      radios.forEach((e) => {
        if (e.checked === true){
            
            val = e.value;
        
        }
      })
      return val;
     
    }
    
    
    function getRadioName(){
      const radios = document.querySelectorAll("#inlineRadio");
      let nam = "";
      
      radios.forEach((e) => {
        if (e.checked === true){
            nam = e.name;
            
        }
      })
     return nam
    }

    function getRadioName2(){
      const radios2 = document.querySelectorAll("#inlineRadio2");
      let nam2 = "";
      
      radios2.forEach((e) => {
        if (e.checked === true){
           nam2 = e.name;
           
        }
      })
      return nam2;
    }
    
    function getRadioName3(){
      const radios2 = document.querySelectorAll("#inlineRadio3");
      let nam2 = "";
      
      radios2.forEach((e) => {
        if (e.checked === true){
           nam2 = e.name;
           ;
        }
      })
      return nam2;
    }

    function getRadioName4(){
      const radios2 = document.querySelectorAll("#inlineRadio4");
      let nam2 = "";
      
      radios2.forEach((e) => {
        if (e.checked === true){
           nam2 = e.name;
         
        } 
      })
      return nam2;
    }

    function getRadioName5(){
      const radios2 = document.querySelectorAll("#inlineRadio5");
      let nam2 = "";
      
      radios2.forEach((e) => {
        if (e.checked === true){
           nam2 = e.name;
           
        }
      })
      return nam2;
    }
    function ConfirmationForm(){
     //getting First Form's values
      const nameVal = nombreInput.value;
      const provinciaVal = provinciaInput.value;
      const ciudadVal = ciudadInput.value;
      const sectorVal = sectorInput.value;
      const calleVal = calleInput.value;
      const carreraVal = carreraInput.value;

      //getting Second Form radio button values
      // const radio = document.getElementById("inlineRadio");
      const radiovalue = getRadioValue();
      let mon;
      if(radiovalue == "Lun 8-12"){
        mon = "Lun 8-12"
    } else { mon = ""
    }
    

      //hiding Second Form
    const container2 = document.querySelector(".container2");
    container2.style.display = "none";
    
    // Showing Third Form

    const container3 = document.querySelector(".container3");
    container3.innerHTML = ""; // Cada vez que se haga click y se llame la funcion se genera el html, lo cual hace que se repita varias veces el formulariol; aqui vaciamos el contenedor asi generamos un unico formulario siempre que se llame la funcion
    const div = document.createElement("div");
    div.setAttribute("class", "row container")
    div.innerHTML = `<div class="col-lg-8 grid-margin stretch-card">
    <div class="card">
      <div class="card-header bg-success">
        <h2>Confirmacion:</h2>
      </div>
      <div class="card-body">
        <h4 class="card-title">Datos Ingresados</h4>
        <div class="table-responsive">
          <table class="table">
            <thead>
              <tr>
                <th>Nombre</th>
                <th>Provincia</th>
                <th>Ciudad</th>
                <th>Sector</th>
                <th>Calle</th>
                <th>Carrera</th>
    
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>${nameVal}</td>
                <td>${provinciaVal}</td>
                <td>${ciudadVal}</td>
                <td>${sectorVal}</td>
                <td>${calleVal}</td>
                <td>${carreraVal}</td>
              </tr>
            
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <div class="card">
      <div class="card-header">
        <h6>Materias Seleccionadas:</h6>
      </div>
      <div class="card-body">
        <div class="col-sm-12 col-md-8 col-lg-8 col-xl-8">
         
      <table class="table table-striped table-dark">
              <thead>
                  <tr>
                      <th>#</th>
                      <th>Asignatura</th>
                      <th>Lunes</th>
                      <th>Martes</th>
                      <th>Miercoles</th>
                      <th>Jueves</th>
                      <th>Viernes</th>
    
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>1</td>
                      <td>${getRadioName()}</td>
                      <td>${getRadioValue() == "Lun 8-12" ?  "Lun 8-12" : ""}</td>
                      <td>${getRadioValue() == "Mar 2-6" ?  "Mar 2-6" : ""}</td>
                      <td></td>
                      <td></td>
                      <td>${getRadioValue() == "Vier 8-12" ?  "Vier 8-12" : ""}</td>
                  </tr>
                  <tr>
                      <td>2</td>
                      <td>${getRadioName2()}</td>
                      <td>${getRadioValue2() == "Lun 8-12" ?  "Lun 8-12" : ""}</td>
                      <td>${getRadioValue2() == "Mar 2-6" ?  "Mar 2-6" : ""}</td>
                      <td></td>
                      <td></td>
                      <td>${getRadioValue2() == "Vier 8-12" ?  "Vier 8-12" : ""}</td>
                  </tr>
                  <tr>
                      <td>3</td>
                      <td>${getRadioName3()}</td>
                      <td>${getRadioValue3() == "Lun 8-12" ?  "Lun 8-12" : ""}</td>
                      <td>${getRadioValue3() == "Mar 2-6" ?  "Mar 2-6" : ""}</td>
                      <td></td>
                      <td></td>
                      <td>${getRadioValue3() == "Vier 8-12" ?  "Vier 8-12" : ""}</td>
                  </tr>
                  <tr>
                      <td>4</td>
                      <td>${getRadioName4()}</td>
                      <td>${getRadioValue4() == "Lun 8-12" ?  "Lun 8-12" : ""}</td>
                       <td>${getRadioValue4() == "Mar 2-6" ?  "Mar 2-6" : ""}</td>
                      <td></td>
                      <td></td>
                      <td>${getRadioValue4() == "Vier 8-12" ?  "Vier 8-12" : ""}</td>
                  </tr>
                  <tr>
                    <td>5</td>
                    <td>${getRadioName5()}</td>
                    <td>${getRadioValue5() == "Lun 8-12" ?  "Lun 8-12" : ""}</td>
                    <td>${getRadioValue5() == "Mar 2-6" ?  "Mar 2-6" : ""}</td>
                    <td></td>
                    <td></td>
                    <td>${getRadioValue5() == "Vier 8-12" ?  "Vier 8-12" : ""}</td>
                </tr>
              </tbody>
          </table>
          <button type="button" id="Completar" class="btn btn-success" onclick="complete()">Completar</button>
    <button type="button" id="back" class="btn btn-warning" onclick="backToSecond()">Back</button>
    </div>
      </div>
    </div>
    
    </div>`


    container3.appendChild(div);


  
}


// Clasificador de materias 
const MateriasSelector = (value) => {
    const div = document.querySelector(".card");
const containeer = document.querySelector(".container2");

  if(value === "software"){

        div.innerHTML = `<div class="card-body">
        
        <div class="accordion flex" id="accordionExample">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" value="Programacion Web">
              Programacion Web
              </button>
            </h2>
            <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Programacion Web" id="inlineRadio" value="Lun 8-12">
                <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Programacion Web" id="inlineRadio" value="Mar 2-6">
                <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Programacion Web" id="inlineRadio" value="Vier 8-12">
                <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
              </div>
            </div>
          </div>
        </div>
                  <!-- Second Assingment  -->
        <div class="accordion" id="accordionExample2">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo" value="Programacion Movil">
              Programacion Movil
              </button>
            </h2>
            <div id="collapsetwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name=" Programacion Movil" id="inlineRadio2" value="Lun 8-12">
                <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name=" Programacion Movil" id="inlineRadio2" value="Mar 2-6">
                <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name=" Programacion Movil" id="inlineRadio2" value="Vier 8-12">
                <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
              </div>
            </div>
          </div>
        </div>

        <!-- Third assigment  -->
        <div class="accordion" id="accordionExample3">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree" value="Base de Datos">
              Base de Datos
              </button>
            </h2>
            <div id="collapsethree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Base de Datos" id="inlineRadio3" value="Lun 8-12">
                <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Base de Datos" id="inlineRadio3" value="Mar 2-6">
                <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Base de Datos" id="inlineRadio3" value="Vier 8-12">
                <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
              </div>
            </div>
          </div>
        </div>

         <!-- fouth assigment  -->
         <div class="accordion" id="accordionExample4">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour" value="Ing Software">
              Ing Software
              </button>
            </h2>
            <div id="collapsefour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample4">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Ing Software" id="inlineRadio4" value="Lun 8-12">
                <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Ing Software" id="inlineRadio4" value="Mar 2-6">
                <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Ing Software" id="inlineRadio4" value="Vier 8-12">
                <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
              </div>
            </div>
          </div>
        </div>

         <!-- fifth assigment  -->
         <div class="accordion" id="accordionExample5">
          <div class="accordion-item">
            <h2 class="accordion-header">
              <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive" value="Big Data">
              Big Data
              </button>
            </h2>
            <div id="collapsefive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample5">
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Big Data" id="inlineRadio5" value="Lun 8-12">
                <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Big Data" id="inlineRadio5" value="Mar 2-6">
                <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
              </div>
              <div class="form-check form-check-inline">
                <input class="form-check-input" type="radio" name="Big Data" id="inlineRadio5" value="Vier 8-12">
                <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
              </div>
            </div>
          </div>
        </div>

        <button type="button" id="Aceptar" class="btn btn-success" onclick="ConfirmationForm()">Aceptar</button>
        <button type="button" id="back" class="btn btn-warning" onclick="backToFirst()">Back</button>

      </div>`;
        containeer.appendChild(div);

  } else if(value === "multimedia"){

    div.innerHTML = `<div class="card-body">
        
    <div class="accordion flex" id="accordionExample">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" value="Photoshop">
          Adobe Photoshop
          </button>
        </h2>
        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Photoshop" id="inlineRadio" value="Lun 8-12">
            <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Photoshop" id="inlineRadio" value="Mar 2-6">
            <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Photoshop" id="inlineRadio" value="Vier 8-12">
            <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
          </div>
        </div>
      </div>
    </div>
               
    <div class="accordion" id="accordionExample2">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsetwo" aria-expanded="true" aria-controls="collapsetwo" value="Marketing">
            Marketing
          </button>
        </h2>
        <div id="collapsetwo" class="accordion-collapse collapse show" data-bs-parent="#accordionExample2">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Marketing" id="inlineRadio2" value="Lun 8-12">
            <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Marketing" id="inlineRadio2" value="Mar 2-6">
            <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Marketing" id="inlineRadio2" value="Vier 8-12">
            <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
          </div>
        </div>
      </div>
    </div>

  
    <div class="accordion" id="accordionExample3">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsethree" aria-expanded="true" aria-controls="collapsethree" value="Interactividad">
            Interactividad
          </button>
        </h2>
        <div id="collapsethree" class="accordion-collapse collapse show" data-bs-parent="#accordionExample3">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Interactividad" id="inlineRadio3" value="Lun 8-12">
            <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Interactividad" id="inlineRadio3" value="Mar 2-6">
            <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Interactividad" id="inlineRadio3" value="Vier 8-12">
            <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
          </div>
        </div>
      </div>
    </div>

    
     <div class="accordion" id="accordionExample4">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour" value="Fotografía">
            Fotografía
          </button>
        </h2>
        <div id="collapsefour" class="accordion-collapse collapse show" data-bs-parent="#accordionExample4">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Fotografía" id="inlineRadio4" value="Lun 8-12">
            <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Fotografía" id="inlineRadio4" value="Mar 2-6">
            <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Fotografía" id="inlineRadio4" value="Vier 8-12">
            <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
          </div>
        </div>
      </div>
    </div>

    
     <div class="accordion" id="accordionExample5">
      <div class="accordion-item">
        <h2 class="accordion-header">
          <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive" value="Audio Digital">
            Audio Digital
          </button>
        </h2>
        <div id="collapsefive" class="accordion-collapse collapse show" data-bs-parent="#accordionExample5">
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Audio Digital" id="inlineRadio5" value="Lun 8-12">
            <label class="form-check-label" for="inlineRadio">Lun 8-12</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Audio Digital" id="inlineRadio5" value="Mar 2-6">
            <label class="form-check-label" for="inlineRadio">Mar 2-6</label>
          </div>
          <div class="form-check form-check-inline">
            <input class="form-check-input" type="radio" name="Audio Digital" id="inlineRadio5" value="Vier 8-12">
            <label class="form-check-label" for="inlineRadio">Vier 8-12</label>
          </div>
        </div>
      </div>
    </div>

    <button type="button" id="Aceptar" class="btn btn-success" onclick="ConfirmationForm()">Aceptar</button>
    <button type="button" id="back" class="btn btn-warning" onclick="backToFirst()">Back</button>

    </div>`; 
    containeer.appendChild(div);
 
  } else if(value === "redes"){
    div.innerHTML; 
    containeer.appendChild(div);
  }


    
    
};




function inputValidator(value, input, isvalid){

 if (value == "" || value == null || value == undefined){
          input.classList.add("wrong");
          input.classList.remove("input-success");

          return false;

    } else {
          input.classList.add("input-success");
          input.classList.remove("wrong");
          
          if(!isvalid){
            return false;
          } else {
         return true;
                 }
    }

}

//cleaning elements
function clearElements(){
    inputClear(nombreInput, true);
    inputClear(provinciaInput,false);
    inputClear(ciudadInput, false);
    inputClear(calleInput, false);
    inputClear(sectorInput, false);
    inputClear(carreraInput, false);
    
    
    
    }

function inputClear(input, focus){
input.value = "";
input.classList.remove("input-success");
input.classList.remove("wrong");

//if focus is true then 
if(focus){
  input.focus();
}

};


// Guardar Button
const guardarBtn = document.querySelector(".guardar");

guardarBtn.addEventListener("click", (e) => {
    e.preventDefault();
    mostrarMaterias();

});


// Limpiar Button
const limpiabtn = document.querySelector(".limpiar");

limpiabtn.addEventListener("click", () => {
clearElements();

});




function FirstToSecond(){  
  const container1 = document.querySelector(".container");
  container1.style.display = "none"; 

  const container2 = document.querySelector(".container2");
  container2.style.display = "block";
}

function backToFirst(){
//go back
const container2 = document.querySelector(".container2");
container2.style.display = "none";

const container1 = document.querySelector(".container");
container1.style.display = "block";
}


function backToSecond(){
  //go back
  const container3 = document.querySelector(".container3");
  container3.innerHTML = "";

  const container2 = document.querySelector(".container2");
container2.style.display = "block";
  }

  function complete(){
    alert('Listo');
    const container2 = document.querySelector(".container2");
    const container3 = document.querySelector(".container3");
    const container1 = document.querySelector(".container");
  
  
    container2.innerHTML = "";
    container3.innerHTML = "";
    clearElements();
    container1.style.display = "block"; 

  }