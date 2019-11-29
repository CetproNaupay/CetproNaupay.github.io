window.onscroll = function() {
  // Llama a la funcion al hacer scroll
  scrollable();
}

function scrollable() {
  var y = 0;
  var currentY = window.pageYOffset;
  
  if (y < currentY) {
    document.querySelector('#customNavbar').classList.remove('navbar-expand-lg','bg-trasp');
    document.querySelector('#customNavbar').classList.add('navbar-expand-lg','bg-fixed');
  } else if(y == currentY) {
      document.querySelector('#customNavbar').classList.remove('navbar-expand-lg', 'bg-fixed');
    document.querySelector('#customNavbar').classList.add('bg-trasp', 'navbar-expand-lg'); 
  }
}

// Ejecuta la funcion en cualquier momento por si no se inicia la web en el top
scrollable();