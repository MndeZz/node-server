// exportacion de la libreria readline
const inputPrompt = require('prompt-sync')({sigint: true});
// creacion de la lista de las tareas a realizar
let lista = [
    {indicador: "tarea #1", escripcion: "Hacer Una Pizza", estado: "Sin Hacer"},
    {indicador: "tarea #2", escripcion: "Tomar Una Ciesta", estado: "Sin Hacer"},
    {indicador: "tarea #3", escripcion: "Hacer Tareas", estado: "Completo"}
];
for (var objeto of lista) {
  console.log("Lista:")
  console.log(objeto);
};
// creacion de la funcion para añadir una tarea nueva a la lista
function añadirTarea(){
  let indicador = inputPrompt("Ingrese el indicador de la tarea: ");
  let descripcion = inputPrompt("Ingrese la descripcion de la tarea: ");
  let estado = inputPrompt("Ingrese el estado de la tarea: ");

  let nuevaTarea = {
    indicador: indicador,descripcion: descripcion,estado: estado
  };

  lista.push(nuevaTarea);

  for (var objeto of lista) {
    console.log(objeto);
  };
};
// creacion de la funcion para eliminar una tarea de la lista
function eliminarTarea(){
  let indice = inputPrompt("Ingrese el indice de la tarea a eliminar: ");

  lista.splice(indice, 1);
    for (var objeto of lista) {
        console.log(objeto);
    };
};
// creacion de la funcion para completar una tarea de la lista
function completarTarea(){
  let indiceCompletar = inputPrompt("Ingrese el indice de la tarea a completar: ");
  let indice_Completar = lista[indiceCompletar];

  indice_Completar.estado = "completo"

  for (var objeto of lista) {
    console.log(objeto);
  };
};

console.log("¿que desea hacer?");
console.log("1 eliminar una tarea");
console.log("2 añadir una tarea");
console.log("3 completar una tarea");

let opcion = inputPrompt("Ingrese el numero de la opcion: ");

switch (opcion) {
    case "1":
        eliminarTarea()
      break;
    case "2":
        añadirTarea()
      break;
    case "3":
        completarTarea()
      break;
    default:
      console.log("Opción no válida");
};