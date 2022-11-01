class Usuario extends Persona implements Acciones{
  private username: string;
  private email: string;

  constructor(nombre:string,username: string, email: string) {
    super(nombre);
    this.username = username;
    this.email = email;
  }


  public getUsername() {

    return this.username;
  }

  public toString(): string {
    return `${super.toString()} Username=  ${this.username}`;
  }

  public recuperarContraseña(): string {
    
    return "puede recupera";
  }

  public modificarUsuario(): string {
    return "no puede realizarlo";
  }

}