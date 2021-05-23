export default class Autor {

    private nombre: string
    private apellido: string
    private edad: number
    private nacionalidad: string

    //Setters ---------------------------------------------
    public setNombre(n : string){
        this.nombre = n
    }
    public setApellido(ape : string){
        this.apellido = ape
    }
    public setEdad(edad : number){
        this.edad = edad
    }
    public setNacionalidad(nacionalidad : string){
        this.nacionalidad = nacionalidad
    }
    //Fin setters -----------------------------------------

    //Getters ---------------------------------------------
    public getNombre(): string{
        return this.nombre
    }
    public getApellido(): string{
        return this.apellido
    }
    public getEdad(): number{
        return this.edad
    }
    public getNacionalidad(): string{
        return this.nacionalidad
    }
    // Fin getters ----------------------------------------
}


