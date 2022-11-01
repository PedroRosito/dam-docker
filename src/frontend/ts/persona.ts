class Persona{
  private nombre: string; 
  public edad: number;

  constructor(nombre: string) {
    this.nombre = nombre;

}

public getNombre():string {
    return this.nombre;
}

public toString(): string{
    return `Nombre: ${this.nombre} Edad:  ${this.edad}`;
}

}