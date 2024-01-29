firebase.initializeApp({
    apiKey: "AIzaSyAOFIICSy4uGif6xHxy5jMBmVDVo1XYVQ0",
    authDomain: "ttk2-632d5.firebaseapp.com",
    projectId: "ttk2-632d5"
});
var db = firebase.firestore();

function iniciar() {
    var username = document.getElementById('first').value;
    var password = document.getElementById('last').value;

    db.collection("users").where("first", "==", username).where("last", "==", password).get()
        .then((querySnapshot) => {
            if (!querySnapshot.empty) {
                const userDoc = querySnapshot.docs[0];
                var user = userDoc.data()['born'];
                console.log("Usuario encontrado:", userDoc.data(), user);
                window.location.href = 'inicio.php';

                localStorage.setItem('bornValue', userDoc.data()['born']);

                // Redirigir a inicio.php

            } else {
                console.log("Usuario no encontrado");
                document.getElementById('errorMessage').innerText = 'Credenciales incorrectas';
                document.getElementById('first').value = '';
                document.getElementById('last').value = '';
            }
        })
        .catch((error) => {
            console.error("Error al buscar usuario en Firestore:", error);
        });
}

function guardar() {
    console.log("click");
    console.log(storedBornValue);

    if (storedBornValue === "Administrador") {
        var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        var nombre = document.getElementById('nombre').value;

        db.collection("users").add({
            first: username,
            last: password,
            born: nombre,
        })
            .then((docRef) => {
                document.getElementById('username').value = '';
                document.getElementById('password').value = '';
                document.getElementById('nombre').value = '';
                document.getElementById('mensajeregistrar').innerText = 'Usuario Agregado';
                console.log("Se agrego el usuario :" , docRef.id);
            })
            .catch((error) => {
                console.error("Error adding document: ", error);
            });
    }
    else {
        alert("No tiene permisos para crear usuarios");
    }
}

function eliminar(id) {
    console.log(storedBornValue);
    if (storedBornValue === "Administrador") {
        db.collection("users").doc(id).delete().then(function () {
            console.log("Document successfully deleted!");
            alert("Usuario Eliminado");
        }).catch(function (error) {
            console.error("Error removing document: ", error);
        });
    }
    else {
        alert("No tiene permisos para Eliminar usuarios");
    }
}

function limpiar(){
    console.log("Limpiar Array")
}



