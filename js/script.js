const DATA_URL = "json/data.json"; 

const container = document.getElementById("container"); 

function showData(dataArray) {
  container.innerHTML = '';

  
  for (const item of dataArray){
   
    const paragraph = document.createElement('p'); 
    paragraph.textContent = `${item.name} ${item.lastname}`; 
    container.appendChild(paragraph); 
  }
}

<<<<<<< Updated upstream
// Escribe el código necesario para realizar el fetch al archivo con los datos y mostrar los estudiantes con la función showData

async function traerDatos(url) {
  const respuesta = await fetch(url);

  if(respuesta.ok) {
    const resultado = await respuesta.json();
    showData(resultado.students);
  } else {
    console.log(respuesta.status)
  }
}

traerDatos(DATA_URL);
=======
fetch(DATA_URL)
  .then(response => response.json())
  .then(dataArray => showData(dataArray.students)); 
>>>>>>> Stashed changes
