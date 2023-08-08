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
fetch(DATA_URL)
  .then(response => response.json())
  .then(dataArray => showData(dataArray.students)); 

