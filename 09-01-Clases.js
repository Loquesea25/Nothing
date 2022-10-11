//Palabra reservada class, seguido el nombre de la clase en mayúscula y seguido para abrir el cuerpo se usan {} dentro continuar con el constructor (palabra reservada constructor) y se abre cuerpo como si fuera una función (){}


class Persona {

    static contadorObjetosPersona = 0; //AQUÍ SE ESTÁ DEFINIENDO UN ATRIBUTO static, RECUERDA QUE ESTE LE PERTENECE SOLO A LA CLASE Y NO A LOS OBJETOS

    email = "correo@mail.com"; // ESTE ATRIBUTO SÍ LE PERTENECE A LOS OBJETOS YA QUE NO ES static  

    constructor(nombre, apellido, edad){
        this._nombre = nombre;
        this._apellido = apellido;
        Persona.contadorObjetosPersona ++;  // NO SE PONE "this.contadorObjetosPersona" PORQUE NO ES UN ATRIBUTO DEL CONSTRUCTOR SINO DE LA CLASE, POR ESO ES "Persona.contadorObjetosPersona"
    } 

    get nombre (){
        return this._nombre;
        //ESTE MÉTODO SE USA PARA RETORNAR EL VALOR DEL ATRIBUTO USANDO console.log(persona1.nombre);
    }

    set nombre (nombre){
        this._nombre = nombre;
        //ESTE MÉTODO SE PUEDE HACER PARA MODIFICAR DESPUÉS EL VALOR USANDO persona1.nombre = "Nuevo nombre";
    }

    get apellido (){
        return this._apellido;
    }

    set apellido (apellido){
        this._apellido = apellido;      
    }

    //DENTRO DE UNA CLASE NO ES NECESARIO AGREGAR LA PALABRA function PARA CREAR FUNCIONES O MÉTODOS

    nombreCompleto(){
        return this._nombre + " " + this._apellido;
    }

    //MÉTODO toString NOS PERMITE VER LOS VALORES ACTUALES DE CADA UNO DE LOS ATRIBUTOS DE UN OBJETO, ESTE MÉTODO AL USARLO EN UN NAVEGADOR NO MUESTRA LA INFORMACIÓN POR LO QUE SE DEBE REESCRIBIR, RECUERDA QUE ESTE SE HEREDA EN AUTOMÁTICO EN JS 

    toString(){
        return this.nombreCompleto();
    }

    //MÉTODO static, ESTÁN VINCULADOS A LA CLASE Y NO A LOS OBJETOS, POR LO TANTO PARA USARLOS SE DEBE HACER LLAMANDO A LA CLASE

    static saludar(){
        console.log("Saludos desde método static");
    }

    //A LOS MÉTODOS static SÍ SE LE PUEDEN PASAR LOS OBJETOS EN LOS ARGUMENTOS 
    static saludar2(persona){
        console.log(persona.nombre); 
    }

}

//HERENCIA, CONCEPTO IMPORTANTE PARA POO, SE USA PARA HEREDAR LOS ATRIBUTOS Y MÉTODOS DE OTRAS CLASES. SE CREA LA CLASE CON LA PALABRA RESERVADA class, SEGUIDO NOMBRE DE LA CLASE, LUEGO PALABRA RESERVADA extends Y SEGUIDO NOMBRE DE LA CLASE QUE LE VA A HEREDAR Y SE ABRE CUERPO CON {} 
//EN EL CONSTRUCTOR DE LA CLASE HIJA DEBEN IR LOS PARAMETROS TAMBIÉN DE LA CLASE PADRE
//PARA QUE FUNCIONE SE DEBE LLAMAR TAMBIÉN AL CONSTRUCTOR DE LA CLASE PADRE DENTRO DEL CONSTRUCTOR DE LA CLASE HIJA CON LA PALABRA RESERVADA super() DENTRO DEL PARÉNTESIS INGRESAR SOLO LOS PARÁMETROS DE LA CLASE PADRE 

class Empleado extends Persona {
    constructor(nombre, apellido, edad, departamento){
        super(nombre, apellido, edad);
        this._departamento = departamento;
    }

    get departamento(){
        return this._departamento;
    }

    set departamento(departamento){
        this._departamento = departamento;
    }

    //SOBREESCRITURA SE USA PARA MODIFICAR UN MÉTODO DE LA CLASE PADRE PARA ADAPTARLO A LA NECESIDAD DE LA CLASE HIJA, SE DEBE PASAR TAL CUAL ESTÁ DEFINIDO EN LA CLASE PADRE (SOLO MISMO NOMBRE Y MISMOS ARGUMENTOS) 

    nombreCompleto(){
        // return this._nombre + " " + this._apellido + ", " + this._departamento;  DE ESTA MANERA FUNCIONA PERO SE HACE DE LA SIGUIENTE
        return super.nombreCompleto () + ", " + this._departamento;    // CON super ACCEDEMOS A ATRIBUTOS Y MÉTODOS DEFINIDOS EN LA CLASE PADRE, SEGUIDO DE PUNTO, LUEGO EL NOMBRE DE LA FUNCIÓN Y SE FINALIZA EN (), LUEGO SE ESCRIBE EL NUEVO CÓDIGO
    }
    }



let persona1 = new Persona("Jose", "Cifuentes", 19);
let persona2 = new Persona("Claudia", "Santamaria", 41);
let persona3 = new Persona("Gloria", "Santamaria", 63);

let empleado1 = new Empleado("Guacho", "Guasca", 20, "Recursos humanos");
console.log(persona1.nombre); 

console.log(empleado1.departamento);
empleado1._departamento = "Portero";
console.log(empleado1.nombreCompleto()); // AQUÍ SE ESTÁ LLAMANDO AL MÉTODO HEREDADO DE LA CLASE PADRE Y LLAMANDO TAMBIÉN EL MÉTODO SOBREESCRITO EN LA CLASE HIJA


//EN ESTAS DOS IMPRESIONES SE PUEDE VER EL POLIMORFISMO, ES DECIR QUE SE PUEDEN MANDAR A LLAMAR EL MISMO MÉTODO YA DEFINIDO Y ESTE VARIARÁ DEPENDIENDO DEL OBJETO CON EL QUE SE ESTÉ TRABAJANDO 
console.log(persona1.toString());
console.log(empleado1.toString());


Persona.saludar();    //LOS MÉTODOS static SOLO SE PUEDEN VER EN LA CONSOLA, QUOKKA NO LOS REPRODUCE
Persona.saludar2(persona1); // AQUÍ ESTAMOS IMPRIMIENDO EL MÉTODO static EN LÍNEA 34

console.log(Persona.contadorObjetosPersona);  //ESTA ES LA MANERA PARA LLAMAR A LOS ATRIBUTOS static EN ESTE CASO CON "Persona" YA QUE SOLO LE PERTENECE A LA CLASE "Persona"
console.log(Empleado.contadorObjetosPersona); // SÍ SE HEREDA ESTE ATRIBUTO A LAS CLASES HIJAS

console.log(persona1.email); //AQUÍ ACCEDEMOS AL ATRIBUTO YA QUE NO ES static POR LO QUE LE PERTENECE A LOS OBJETOS





/*

EJERCICIO CONTADOR DE ID CON UN ATRIBUTO static

class Persona {

    static contadorPersona = 0;

    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this.idPersona = ++ Persona.contadorPersona;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido (){
        return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    nombreCompleto(){
        return this.idPersona + " " + this._nombre + " " + this._apellido;
    }
    
    toString(){
        return this.nombreCompleto();
    }
}

class Estudiante extends Persona {
    constructor(nombre, apellido, carrera){
        super (nombre, apellido);
        this._carrera = carrera;
    }
    get carrera (){
        return this.carrera;
    }
    set carrera (carrera){
        this._carrera = carrera;
    }

    nombreCompleto(){
        return super.nombreCompleto() + this._carrera;
    }
}

let persona1 = new Persona("Jose", "Baena");
console.log(persona1.toString());

let persona2 = new Persona("Claudia", "Cifuentes");
console.log(persona2.toString())

let estudiante1 = new Estudiante("Jorge", "Suaza", "Ingenieria");
console.log(estudiante1.toString()); 

console.log(Estudiante.contadorPersona)

*/



/*
OTRO CÓDIGO DE CLASES CON CONTADORES 

class Person {
    static contadorDePersonas = 0;
    constructor (nombre, apellido){
        this._nombre = nombre;
        this._apellido = apellido;
        this._idPersona = ++ Person.contadorDePersonas;
    }
    get nombre (){
        return this._nombre;
    }
    set nombre (nombre){
        this._nombre = nombre;
    }
    get apellido (){
        return this._apellido;
    }
    set apellido (apellido){
        this._apellido = apellido;
    }
    get idPersona (){
        return this._idPersona;
    }
    fullname (){
        return this._nombre + " " + this._apellido + " " + "ID Persona: " + this._idPersona;
    }
    toString(){
        return this.fullname();
    }
}

class Estudiante extends Person{
    static contadorDeEstudiantes = 0;
    constructor (nombre, apellido, carrera, semestre){
        super (nombre, apellido)
        this._carrera = carrera;
        this._semestre = semestre;
        this._idEstudiante = ++ Estudiante.contadorDeEstudiantes;
    }
    get carrera (){
        return this._carrera;
    }
    set carrera(carrera){
        this._carrera = carrera;
    }
    get semestre (){
        return this._semestre;
    }
    set semestre(semestre){
        this._semestre = semestre;
    }
    get idEstudiante (){
        return this._idEstudiante;
    }

    toString(){
       return super.fullname() + " " + this._carrera + " " + this._semestre + " " + "ID Estudiante: " + this._idEstudiante; 
    }
}

let personita1 = new Person("Jorge", "Santa");
console.log(personita1.toString());

let personita2 = new Person("Claudia", "Santa");
console.log(personita2.toString());

let estudiantico1 = new Estudiante("Joselito", "Baena", "Ingeniero", "4to semestre");
console.log(estudiantico1.toString());

let estudiantico2 = new Estudiante("Parco", "Jones", "Medicina", "7mo semestre");
console.log(estudiantico2.toString());
*/