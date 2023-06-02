// Obtener un elemento modal para efectos de iniciaización solamente
var modal = document.getElementById(`myModal-1`);

// Obtener los elementos <span> que cierran cada modal
var spans = document.getElementsByClassName("close");
for (let i = 0; i < spans.length; i++) {
  const span = spans[i];
  console.log(span)
  span.onclick = function () {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }  
}

// Cuando el usuario hace clic en cualquier lugar fuera 
// del contenido modal, cierra el modal
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.visibility = "hidden";
    modal.style.opacity = 0;
  }
}

/* Se habilita escucha de eventos de click sobre el mapa con la imágen svg.

Al recibir un evento se obtiene el elemento más cercano con la clase 'btn'
y se obtiene el número de botón a partir del nombre de la clase, que tiene 
el formato btn-x donde 'x' es un número. Este número es luego utilizado
para habilitar el modal respectivo, cuya identificador tiene el formato modal-x.

La habilitación del modal se realiza al poner la propiedad CSS visibility = visible.
 */
document.getElementById('map-svg').addEventListener('click', e => {
  // Obtener el botón que abre el modal
  let btn = e.target.closest('.btn');
  // Cuando el usuario hace clic en un botón, abre el modal
  if (btn) {
    const id = btn.id.split("-")[1];
    modal = document.getElementById(`modal-${id}`);
    modal.style.visibility = "visible";
    modal.style.opacity = 1;
  }
});
