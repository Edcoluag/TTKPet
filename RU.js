
firebase.initializeApp({
    apiKey: "AIzaSyAOFIICSy4uGif6xHxy5jMBmVDVo1XYVQ0",
    authDomain: "ttk2-632d5.firebaseapp.com",
    projectId: "ttk2-632d5"
});

// Initialize Cloud Firestore and get a reference to the service
var db = firebase.firestore();


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
                        <td>${doc.data().first}</td>
                        <td>${doc.data().last}</td>
                        <td>${doc.data().born}</td>
                        <td><button class="btn btn-danger" onclick="eliminar('${doc.id}')">Eliminar</button></td>
                        <td><button class="btn btn-warning" onclick="editar('${doc.id}','${doc.data().first}','${doc.data().last}','${doc.data().born}')">Editar</button></td>
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
function editar(id, nombre, apellido, fecha) {
    console.log(storedBornValue);
    if (storedBornValue === "Administrador") {
        // Construye la URL con los parámetros
        var url = 'editar.view.php?id=' + id + '&nombre=' + encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido) + '&fecha=' + fecha;
        //var url = 'registrar.view.php?id=' + id + '&nombre=' + encodeURIComponent(nombre) + '&apellido=' + encodeURIComponent(apellido) + '&fecha=' + fecha;
        // Redirige a la nueva URL
        window.location.href = url;
    }
    else {
        alert("No tiene permisos para editar los usuarios");
    }
}

//funcion editando
function Editando() {
    var id = document.getElementById('id').value;
    var boton = document.getElementById('boton32');

    boton.onclick = function () {
        var washingtonRef = db.collection("users").doc(id);

        var nombre = document.getElementById('nombre').value;
        var apellido = document.getElementById('apellido').value;
        var fecha = document.getElementById('fecha').value;

        return washingtonRef.update({
            first: nombre,
            last: apellido,
            born: fecha
        })
            .then(function () {
                console.log("Document successfully updated!");
                document.getElementById('nombre').value = '';
                document.getElementById('apellido').value = '';
                document.getElementById('fecha').value = '';

            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
}




