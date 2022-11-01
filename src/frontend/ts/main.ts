
class Main implements EventListenerObject{
 
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

    handleEvent(object: Event): void {
     
        
        alert("hola " + this.personas[0].getNombre() + " estoy en el main");
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
    let btn2 = document.getElementById("btnOtro");
    btn2.addEventListener("click", main);
});


function mostrar(main: Main) {
    let personas = main.getPersona();
    let datosPersonas = "";
    for (let i in personas) {
        datosPersonas = datosPersonas + personas[i].toString();
        
    }

    alert(datosPersonas);
}

