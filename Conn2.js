
// Leer documentos
db.collection("users").onSnapshot((querySnapshot) => {
    try {
        var tabla = document.getElementById('tabla');
        // Verificar si el elemento 'tabla' existe antes de modificar su contenido
        if (tabla) {
            tabla.innerHTML = '';

            querySnapshot.forEach((doc) => {
                console.log(`${doc.id} => ${doc.data()}`);

                tabla.innerHTML += `          
                    <tr>
                        <th scope="row">${doc.id}</th>
                        <td>${doc.data().Usuario}</td>
                        <td>${doc.data().Password}</td>
                        <td>${doc.data().Rol}</td>                        
                        <td>${doc.data().Nombre}</td>
                        <td><button class="btn btn-danger" onclick="eliminando('${doc.id}')">Eliminar</button></td>
                        <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().Usuario}','${doc.data().Password}','${doc.data().Nombre}','${doc.data().Direccion}','${doc.data().Telefono}','${doc.data().Rol}')">Editar</button></td>
                    </tr>`;
            });
        } else {
            console.error("Elemento 'tabla' no encontrado.");
        }
    } catch (error) {
        console.error("Error procesando los datos:", error);
    }
});


//funcion editar
function editar(id, usuario, password, nombre, direccion, telefono, rol) {
    console.log(storedBornValue);
    if (storedBornValue === "Administrador") {
        // Construye la URL con los parámetros
        var url = 'editar.view.php?' + '&id=' + encodeURIComponent(id) + '&usuario=' + encodeURIComponent(usuario) + '&password=' + encodeURIComponent(password) + '&nombre=' + encodeURIComponent(nombre) + '&direccion=' + encodeURIComponent(direccion) + '&telefono=' + encodeURIComponent(telefono) + '&rol=' + encodeURIComponent(rol);
        // Redirige a la nueva URL
        window.location.href = url;
    }
    else {
        alert("No tiene permisos para editar los usuarios");
    }
}
/*
//funcion editando
function Editando() {
    console.log(storedBornValue);
    var id = document.getElementById('id').value;
    var btneditar =document.getElementById('boton-editar');

    btneditar.onclick =function (){
        var usuarioref = db.collection("users").doc(id);

        var usuario = document.getElementById('username-edit').value;
        var contraseña = document.getElementById('password-edit').value;
        var nombre = document.getElementById('nombre-edit').value;
        var direccion = document.getElementById('direccion-edit').value;
        var telefono = document.getElementById('telefono-edit').value;
        var rol = document.getElementById('rol-edit').value;

        return usuarioref.update({
            Usuario: usuario,
            Password: contraseña,
            Nombre: nombre,
            Direccion: direccion,
            Telefono: telefono,
            Rol: rol
        })
            .then(function (){
                document.getElementById('mensajeeditar').innerText = 'Usuario Actualizado';
                console.log("Se Actualizo el Usuario :");
            })
            .catch(function (error){
                console.error("Error al actualizar: ", error)
            });
    }
}

function Editare(){
    console.log(storedBornValue);
    console.log("Metodo Editar")

    if (storedBornValue === "Administrador") {
        var id = document.getElementById('id').value;
        var usuario = document.getElementById('username-edit').value;
        var contraseña = document.getElementById('password-edit').value;
        var nombre = document.getElementById('nombre-edit').value;
        var direccion = document.getElementById('direccion-edit').value;
        var telefono = document.getElementById('telefono-edit').value;
        var rol = document.getElementById('rol-edit').value;

        db.collection("users").doc(id).update({
            Usuario: usuario,
            Password: contraseña,
            Nombre: nombre,
            Direccion: direccion,
            Telefono: telefono,
            Rol: rol
        })
            .then((docRef) => {
                document.getElementById('mensajeeditar').innerText = 'Usuario Actualizado';
                console.log("Se Actualizo el Usuario :" , docRef);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    else {
        alert("No tiene permisos para Editar usuarios");
    }
}

 */