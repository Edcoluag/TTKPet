<!doctype html>
<html lang="en">

<head>
    <!-- Required meta tags -->
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">

    <!-- Bootstrap CSS -->
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css"
        integrity="sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N" crossorigin="anonymous">

    <title>Hello, world!</title>

    <!--Firestores-->
    <script src="https://www.gstatic.com/firebasejs/10.7.2/firebase-app-compat.js"></script>
    <script src="https://www.gstatic.com/firebasejs/10.7.2/firebase-firestore-compat.js"></script>

</head>

<body>
    <div class="container">

        <h1>Agregar Usuarios</h1>
        <input type="text" id="nombre" placeholder="nombre" class="form-control my-3">
        <input type="text" id="apellido" placeholder="apellido" class="form-control my-3">
        <input type="text" id="fecha" placeholder="fecha" class="form-control my-3">

        <button class="btn btn-info" id="boton" onclick="guardar()">Guardar</button>


        <table class="table my-3">

            <thead>
                <tr>
                    <th scope="col">id</th>
                    <th scope="col">First</th>
                    <th scope="col">Last</th>
                    <th scope="col">born</th>
                    <th scope="col">Eliminar</th>
                    <th scope="col">Editar</th>
                </tr>
            </thead>

            <tbody id="tabla">
            </tbody>
        </table>

    </div>
    <!-- Optional JavaScript; choose one of the two! -->

    <!-- Option 1: jQuery and Bootstrap Bundle (includes Popper) -->
    <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossorigin="anonymous"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct"
        crossorigin="anonymous"></script>

    <script src="RU.js"></script>
</body>

</html>