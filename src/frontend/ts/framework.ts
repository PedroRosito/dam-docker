class Framework{

  public ejecutarRequest(metodo: string, url: string, responseHandler:HandleResponse, data?: any) {
    let xmlHttp = new XMLHttpRequest();
    
    xmlHttp.onreadystatechange = () => {
      if (xmlHttp.readyState == 4) {
          
            if (xmlHttp.status == 200) {
              let listaDisp: Array<Device> = JSON.parse(xmlHttp.responseText);
              responseHandler.cargarGrilla(listaDisp);
               
            } else {
                alert("ERROR en la consulta");
            }
            
        }
        }
    xmlHttp.open(metodo, url, true);
    if (data != undefined) {
      xmlHttp.setRequestHeader("Content-Type", "application/json");  
      xmlHttp.send(JSON.stringify(data));

    } else {
      
      xmlHttp.send();
    }
  }

  public mostrarCargando() {
    let imgLoading = document.getElementById("loading");
    imgLoading.hidden = false;
  }
  public ocultarCargando() {
    let imgLoading = document.getElementById("loading");
    imgLoading.hidden = true;
  }
}