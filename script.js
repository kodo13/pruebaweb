document.querySelector("form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("¡Gracias por contactar con nosotros! Le responderemos los más pronto posible.");
    this.reset();
  });

  