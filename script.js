class Persona {
    constructor (nombre, edad, genero){
      this.nombre = nombre;
      this.edad = edad;
      this.genero = genero;
    }
    obtDetalles(){
      console.log(`Tu nombre es ${this.nombre}, eres ${this.genero} y tienes ${this.edad} años`)
    }
  }
  
  let miPersona = new Persona ("Pedro", 33, "hombre");
  miPersona.obtDetalles();
  
  
  class Estudiante extends Persona{
    constructor(nombre, edad, genero, curso, grupo){
      super(nombre, edad, genero)
      this.curso = curso;
      this.grupo = grupo;
    }
    registrar(){
    console.log(`Tu nombre es ${this.nombre}, eres ${this.genero} y tienes ${this.edad} años. Adicionalmente cursas ${this.curso} en ${this.grupo}`)
    }
  }
  
  let miEstudiante = new Estudiante ("Taniu", 33, "mujer", 'FullsTack', 'TheBridge');
  miEstudiante.registrar()
  
  class Profesor extends Persona{
    constructor(nombre, edad, genero, asignatura, nivel){
      super(nombre, edad, genero)
      this.asignatura = asignatura;
      this.nivel = nivel;
    }
    asignar(){
    console.log(`Tu nombre es ${this.nombre}, eres  ${this.genero} y tienes ${this.edad} años y das clases de ${this.asignatura} nivel ${this.nivel}`)
    }
  }
  
  let miProfesor = new Profesor ("Carlos", 33, "hombre", 'JS', 1);
  miProfesor.asignar();
  
  /*Warrior:
  constructor(life, power): Establece el valor de las propiedades life y power
  attack: Devuelve el valor de power del guerrero */
  /*defend(damage): resta el valor del parámetro recibido damage al valor de la propiedad life. Después, imprime el valor de la vida restante.*/
  
  class Warrior{
    constructor (life, power) {
      this.life = life;
      this.power = power;
      }
      attack(){
        console.log(`Your warrior power is ${this.power}`)
        return this.power;
      }
      defend(damage){
        this.life = this.life-damage; 
        console.log(`Your warrior life is ${this.life}`)
        return this.life;
      }
  }
  /*Hacer una instancia de Warrior (un objeto nuevo)*/
  let unWarrior = new Warrior (10, 100);
  unWarrior.attack();
  unWarrior.defend(5);
  
  /*Un metodo es una funcion (devuelve valores o ejecutar)*/
  /*Maya: extiende de la clase Warrior
  constructor: Aquí establecemos los valores para el maya, que no hay que olvidar que es un guerrero. drinkColaCao: Suma 10 al poder.*/
  
  class Maya extends Warrior{
    constructor(life, power){
      super (life, power)
      this.life = life;
      this.power = power;
    }
    drinkColaCao(){
      this.power = this.power + 10;
    }
    obtDetalles(){
      console.log(`You are a Maya and have ${this.power} power and ${this.life} lifes.`)
    }
  
  }
  let unMaya = new Maya (10, 100);
  unMaya.obtDetalles();
  
  
  /* Aztec: extiende de la clase Warrior
  constructor: Aquí establecemos los valores para el azteca, que no hay que olvidar que es un guerrero.
  drinkNesquik: Suma 10 a la vida.*/
  class Aztec extends Warrior{
    constructor(life, power){
      super (life, power) 
      this.life = life;
      this.power = power;
    }
    drinkNesquik(){
      this.power = this.life + 10;
    }
    obtDetalles(){
    console.log(`You are an Aztec and have ${this.power} power and ${this.life} lifes.`)
    }
  }
  let unAztec = new Aztec (10, 100);
  unAztec.obtDetalles();
  
  /*Realiza la siguiente cadena de intercambio de golpes.
  Azteca bebe nesquik*/
  unAztec.drinkNesquik();
  console.log(unAztec);
  
  /*Maya bebe Cola Cao*/
  unMaya.drinkColaCao();
  console.log(unMaya);
  
  /*Maya ataca a azteca. Azteca defiende.*/
  let golpeMaya = unMaya.attack();
  unAztec.defend(golpeMaya);
  console.log(unAztec);
  
  
  /*Azteca ataca a maya. Maya defiende.*/
  let golpeAztec = unAztec.attack();
  unMaya.defend(golpeAztec);
  console.log(unMaya);