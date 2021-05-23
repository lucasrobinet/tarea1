import Autor from './autor'
import Nota from './nota'


var autor1 = new Autor()


autor1.setNombre('Carlos')
autor1.setApellido('Sanchez')
autor1.setEdad(54)
autor1.setNacionalidad('Argentina')

console.log( autor1.getNombre())
console.log( autor1.getApellido())
console.log( autor1.getEdad())
console.log( autor1.getNacionalidad())