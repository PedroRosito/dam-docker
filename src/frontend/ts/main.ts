
class Main implements EventListenerObject{
 
    private framework: Framework = new Framework();
    private personas: Array<Persona> =new Array();
    constructor(per:Persona) {
        this.personas.push(per);

        console.log(this);
    }
    public addPersona(per: Persona) {
        this.personas.push(per);
    }
    public getPersona(){
        return this.personas;
    }

    cosultarDispositivoAlServidor() {

        this.framework.ejecutarRequest("GET", "http://localhost:8000/devices");
    }


    cambiarEstadoDispositivoAlServidor() {
        let json = { id: 1, state: 0 };
        this.framework.ejecutarRequest("POST", "http://localhost:8000/deviceChange",json);
        
    }

    handleEvent(object: Event): void {
     
        let tipoEvento:string=object.type;
        let objEvento: HTMLElement;
        objEvento = <HTMLElement>object.target;
        if(objEvento.id=="btnOtro"){
            console.log(objEvento.id, objEvento.textContent); 
            
            let iNombre =<HTMLInputElement> document.getElementById("iNombre");
            
            objEvento.textContent = iNombre.value;
            alert("hola " + this.personas[0].getNombre() + " estoy en el main");
        } else if (objEvento.id == "btnSaludar") {
            let textArea = document.getElementById("textarea_1");
            //textArea.textContent 
            textArea.innerHTML = "hola " + this.personas[1].getNombre() + " otro boton";
            
            this.cosultarDispositivoAlServidor();

      
        }

    }
}

window.addEventListener("load", () => {
    let user: Usuario = new Usuario("Juan","jperez","jperez@gmail.com");
    let per1 = new Persona("Matias")
    per1.edad = 12;
    let main: Main = new Main(per1);
    main.addPersona(new Persona("Pepe"));
    mostrar(main);
    let btn = document.getElementById("btnSaludar");
    btn.addEventListener("click", main);
    let btn2 = document.getElementById("btnOtro");
    btn2.addEventListener("click", main);
});


function mostrar(main: Main) {
    let personas = main.getPersona();
    let datosPersonas = "";
    for (let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
        
    }


}

