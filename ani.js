//Se muestra la animacion de la pantalla de bienvenida 
//luego el input para escribir las tareas
//Permite agregar nuevas tareas, marcarlas y eliminarlas 
document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("nuevaTarea");
  const boton = document.querySelector("button");

  // Desactivar al inicio
  input.disabled = true;
  boton.disabled = true;

  // Esperar a que termine animación de bienvenida
  setTimeout(() => {
    const bienvenida = document.querySelector(".bienvenida");
    bienvenida.style.display = "none";

    // Activar input y botón
    input.disabled = false;
    boton.disabled = false;
    input.focus();
  }, 4500); // 2.5s delay + 2s de animación
});
//Aca se agrega la nueva tarea 
function agregarTarea() {
  const input = document.getElementById("nuevaTarea");
  const texto = input.value.trim();
//Este if para cuando el campo este vacio no haga nada 
  if (texto === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = texto;

  //Permite marcar la tarea 
  span.onclick = () => span.classList.toggle("completada");

  const btnEliminar = document.createElement("button");
  btnEliminar.textContent = "x";
  btnEliminar.onclick = () => li.remove();

  li.appendChild(span);
  li.appendChild(btnEliminar);
//Aca se añade la tarea a la lista 
  document.getElementById("listaTareas").appendChild(li);
  //Se limpia el input para una nueva tarea 
  input.value = "";
}
