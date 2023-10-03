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
// creacion de la funcion para eliminar una tarea de la lista usando una promesa de tiempo
function eliminar(){
  return new Promise ((resolve, reject) => {
    let indice = inputPrompt("Ingrese el indice de la tarea a eliminar: ");
    lista.splice(indice, 1);

      if (lista.length === 0){
        reject(new Error("los datos no estan"))
      }
      setTimeout(() =>{
        resolve(lista);
      }, 2000)
  })
}
// creacion de la funcion para completar una tarea de la lista
function completar_tarea(){
  return new Promise ((resolve, reject) => {
    let indiceCompletar = inputPrompt("Ingrese el indice de la tarea a completar: ");
    let indice_Completar = lista[indiceCompletar];
    indice_Completar.estado = "completo"

      if (lista.length === 0){
        reject(new Error("los datos no estan"))
      }
      setTimeout(() =>{
        resolve(lista);
      }, 2000)
  })
}

async function fetchingData(){
  const datos = await completar_tarea();
  console.log(datos);
};

console.log("¿que desea hacer?");
console.log("1 eliminar una tarea");
console.log("2 añadir una tarea");
console.log("3 completar una tarea");

let opcion = inputPrompt("Ingrese el numero de la opcion: ");

switch (opcion) {
    case "1":
        eliminar()
        .then((Response) => console.log(Response))
        .catch((err) => console.log(err.message))
      break;
    case "2":
        añadirTarea()
      break;
    case "3":
        fetchingData()
      break;
    default:
      console.log("Opción no válida");
};