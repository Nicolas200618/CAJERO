var saldo = 0;
var usuarios = [
  { username: "Nico", password: "2018" }
];
console.log(usuarios)


function login() {
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  var usuarioEncontrado = obtenerUsuario(username);

  if (usuarioEncontrado && usuarioEncontrado.password === password) {
      alert("Inicio de sesión exitoso");
      window.location.href = "cajero.html"; 
      return false; 
  } else {
      alert("Nombre de usuario o contraseña incorrectos");
      return false; 
  }
}

function obtenerUsuario(username) {
  var usuarioEncontrado = usuarios.find(function(usuario) {
      return usuario.username === username;
  });

  return usuarioEncontrado;
}


function registrar() {
  var newUsername = document.getElementById("newUsername").value;
  var newPassword = document.getElementById("newPassword").value;

  var usuarioExistente = usuarios.find(function(usuario) {
      return usuario.username === newUsername;
  });

  if (usuarioExistente) {
      alert("El nombre de usuario ya está registrado. Por favor, elija otro nombre de usuario.");
      return false; 
  }

  var nuevoUsuario = {
      username: newUsername,
      password: newPassword
  };
  usuarios.push(nuevoUsuario);

  console.log("Nuevo usuario agregado:", nuevoUsuario);
  console.log("Usuarios registrados:", usuarios);

  alert("Registro exitoso. Ahora puedes iniciar sesión con tu nuevo usuario.");
  window.location.href = "login.html";
  return false; 
}


function agregarSaldo() {
    var monto = parseFloat(prompt("Ingrese el monto a agregar:"));
    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un monto válido");
    } else {
        saldo += monto;
        alert("Saldo agregado correctamente");
    }
}

function retirarSaldo() {
    var monto = parseFloat(prompt("Ingrese el monto a retirar:"));
    if (isNaN(monto) || monto <= 0) {
        alert("Ingrese un monto válido");
    } else if (monto > saldo) {
        alert("Saldo insuficiente");
    } else {
        saldo -= monto;
        alert("Retiro exitoso");
    }
}

function consultarSaldo() {
    alert("Saldo actual: $" + saldo.toFixed(2));
}