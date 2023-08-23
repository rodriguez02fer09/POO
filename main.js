/* curso de programacion orientado a objetos en javascript
La programación orientada a objetos es un paradigma.
Un paradigma es un conjunto de lineamientos o guías que nos ayuda a resolver un problema específico.

paradigmas:
-estructurado 
-orientado objetos
-funcional

Objeto : es la base de la programacion orientada a objetos 
Metodos: funciones guardada dentro de un objeto acciones
Atributo : informacion o caracteristicas del objeto 
Las clases :serán nuestros moldes las cuales podremos reutilizar declarando atributos y métodos
(es el molde de lo que sera nuestro objetos).
Herencia: Crear nuevas clases con características similares a partir de otras.
Encapsulamiento: Esconder datos que solo pueden ser accedidos por la clase.
Polimorfismo: Un objeto puede comportarse de muchas formas, ejemplo: 

 esta basado en prototipos pilares POO
 
 function Student (){
this.name= 'nombre',
this.age= 18,
this.points= '750'
 }
 const juanita = new Studend()
 this = se usa para guardar nuestros atributos
 
 
 
 
 */

const natalia = {
  name: "Natalia",
  age: 20,
  cursosAprobados: [
    //atributos
    "Curso Definitivo de HTML y CSS",
    "Curso Práctico de HTML y CSS",
  ],
  //metodo para aprobar cursos
  //funcion
  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  },
};
// si aprobo un curso
//natalia.cursosAprobados.push("Curso de responsig designe")

//prototipo-molde
function Student(name, age, cursosAprobados) {
  this.name = name;
  this.age = age;
  this.cursosAprobados = cursosAprobados;
  // this.aprobarCurso = function (nuevoCursito) {
  //   this.cursosAprobados.push(nuevoCursito);
  // }
}
//estamos creanto un metodo por fueta de la funcion
Student.prototype.aprobarCurso = function (nuevoCursito) {
  this.cursosAprobados.push(nuevoCursito);
};
//instancia
const juanita = new Student("Juanita Alejandra", 15, [
  "Curso de Introducción a la Producción de Videojuegos",
  "Curso de Creación de Personajes",
]);
//os objetos pueden tener un objeto prototipo, el cual actúa como un objeto plantilla que hereda métodos y propiedades.
// las clases en javascript sintaxis mas amigable para trabajar con prototipos

//proptotipos con las sintaxis de clases
//RORO :RECIBE UN OBJETO Y RETORNA UN OBJETO
class Student2 {
  constructor({ name, cursosAprobados = [], age, email }) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.cursosAprobados = cursosAprobados;
  }

  aprobarCurso(nuevoCursito) {
    this.cursosAprobados.push(nuevoCursito);
  }
}

const miguelito = new Student2({
  name: "Miguel",
  age: 28,
  email: "miguelito@platzi.com",
});

//VENTAJAS Y DESVENTAJAS  DEL A PROGRAMACION ORIENTADA A OBJETOS

class clases {
  constructor({ profesor, comentarios, retos }) {
    this.profesor = profesor;
    this.comentarios = comentarios;
    this.retos = retos;
  }
}

class Course {
  constructor({ name, classes = [] }) {
    this.name = name;
    this.classes = classes;
  }
}

const cursoProgBasica = new Course({
  name: "Curso Gratis de Programación Básica",
});
const cursoDefinitivoHTML = new Course({
  name: "Curso Definitivo de HTML y CSS",
});
const cursoPracticoHTML = new Course({
  name: "Curso Practico de HTML y CSS",
});

class LearningPath {
  constructor({ name, clases = [] }) {
    this.name = name;
    this.clases = clases;
  }
}

const escuelaWeb = new LearningPath({
  name: "Escuela de Desarrollo Web",
  courses: [cursoProgBasica, cursoDefinitivoHTML, cursoPracticoHTML],
});

const escuelaData = new LearningPath({
  name: "Escuela de Data Science",
  courses: [cursoProgBasica, "Curso DataBusiness", "Curso Dataviz"],
});

const escuelaVgs = new LearningPath({
  name: "Escuela de Vidweojuegos",
  courses: [cursoProgBasica, "Curso de Unity", "Curso de Unreal"],
});
class Student {
  constructor({
    name,
    email,
    username,
    twitter = undefined,
    instagram = undefined,
    facebook = undefined,
    approvedCourses = [],
    learningPaths = [],
  }) {
    this.name = name;
    this.email = email;
    this.username = username;
    this.socialMedia = {
      twitter,
      instagram,
      facebook,
    };
    this.approvedCourses = approvedCourses;
    this.learningPaths = learningPaths;
  }
}

const juan2 = new Student({
  name: "JuanDC",
  username: "juandc",
  email: "juanito@juanito.com",
  twitter: "fjuandc",
  learningPaths: [escuelaWeb, escuelaVgs],
});

const miguelito2 = new Student({
  name: "Miguelito",
  username: "migelitofeliz",
  email: "miguelito@juanito.com",
  instagram: "migelito_feliz",
  learningPaths: [escuelaWeb, escuelaData],
});
//ejercicio crear la clase integrante
class Banda {
  constructor({ nombre, generos = [] }) {
    this.nombre = nombre;
    this.generos = generos;
    this.integrantes = [];
  }
  agregarIntegrante(integranteNuevo) {
    // Tu código aquí 👈
    !this.integrantes.find(
      (integrante) => integrante.instrumento === "Bateria"
    );
    this.integrantes.push(integranteNuevo);
  }
}

//Crear clase Integrante
class Integrante {
  // Tu código aquí 👈
  constructor({ name, instrumento }) {
    this.name = name;
    this.instrumento = instrumento;
  }
}
/*
abstraccion:
Es la forma de abstraer los datos esenciales de un objeto, para (con el fin de) crear su molde, su Clase, 
su Prototipo.
*/
//Encapsulamiento: Esconder datos que solo pueden ser accedidos por la clase.

class Course {
  constructor({ name, classes = [] }) {
    this._name = name;
    this.classes = classes;
  }
  get name() {
    return this._name;
  }
  set name(nuevoNombrecito) {
    if (nuevoNombrecito === "Curso Malito de Programación Básica") {
      console.error("Web... no");
    } else {
      this._name = nuevoNombrecito;
    }
  }
}
/*Qué son los getters y setters
Una función que obtiene un valor de una propiedad se llama getter y 
una que establece el valor de una propiedad se llama setter.*/

/*En herencia, las clases hijas pueden comportarse como su clase padre y viceversa
La herencia nos permite crear nuevas clases a partir de otras, se basa en modelos y
  se genera una jerarquía de padre e hijo.

  La palabra clave super es usada para acceder y llamar funciones del padre de un objeto.
.*/

//ejemplo :

class Comment {
    constructor({
      content,
      studentName,
      studentRole = "estudiante",
    }) {
      this.content = content;
      this.studentName = studentName;
      this.studentRole = studentRole;
      this.likes = 0;
    }
  
    publicar() {
      console.log(this.studentName + " (" + this.studentRole + ")");
      console.log(this.likes + " likes");
      console.log(this.content);
    }
  }
  
class Course2 {
    constructor({ name, classes = [], isFree = false, lang = "spaninsh"}) {
      this.name = name;
      this.classes = classes;
      this.isFree = isFree;
      this.lang  = lang ;
    }
  }
  
class Student {
    constructor({
      name,
      email,
      username,
      twitter = undefined,
      instagram = undefined,
      facebook = undefined,
      approvedCourses = [],
      learningPaths = [],
    }) {
      this.name = name;
      this.email = email;
      this.username = username;
      this.socialMedia = {
        twitter,
        instagram,
        facebook,
      };
      this.approvedCourses = approvedCourses;
      this.learningPaths = learningPaths;
    }
    publicarComentario (CommentContent)
  }
  
  class FreeStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    publicarComentario(commentContent) {
        const comment = new Comment({
          content: commentContent,
          studentName: this.name,
        });
        comment.publicar();
      }
    }
  
  class BasicStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      if (newCourse.lang !== "english") {
        this.approvedCourses.push(newCourse);
      } else {
        console.warn("Lo sentimos, " + this.name + ", no puedes tomar cursos en inglés");
      }
    }
  }
  
  class ExpertStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  }
  class TeacherStudent extends Student {
    constructor(props) {
      super(props);
    }
  
    approveCourse(newCourse) {
      this.approvedCourses.push(newCourse);
    }
  
    publicarComentario(commentContent) {
      const comment = new Comment({
        content: commentContent,
        studentName: this.name,
        studentRole: "profesor",
      });
      comment.publicar();
    }
  }
  
  const cursoProgBasica2 = new Course({
    name: "Curso Gratis de Programación Básica",
    isFree: true,
  });
  const cursoDefinitivoHTML2 = new Course({
    name: "Curso Definitivo de HTML y CSS",
  });
  const cursoPracticoHTML2 = new Course({
    name: "Curso Practico de HTML y CSS",
    lang: "english",
  });
  const juan = new FreeStudent({
    name: "JuanDC",
    username: "juandc",
    email: "juanito@juanito.com",
    twitter: "fjuandc",
    learningPaths: [
      escuelaWeb,
      escuelaVgs,
    ],
  });
  
  const miguelito1 = new BasicStudent({
    name: "Miguelito",
    username: "migelitofeliz",
    email: "miguelito@juanito.com",
    instagram: "migelito_feliz",
    learningPaths: [
      escuelaWeb,
      escuelaData,
    ],
  });

/* Polimorfismo :Permite a nuestras subclases cambiar o anular los comportamientos de los métodos y 
atributos del prototipo madre, de la clase madre

*/
const freddy = new TeacherStudent({
    name: "Freddy Vega",
    username: "freddier",
    email: "f@gep.com",
    instagram: "freddiervega",
  });