function cambiarParrafo(unParrafo)
        {
            let nuevoParrafo=prompt("Ingrese el nuevo valor:");
            document.getElementById(unParrafo).innerHTML=nuevoParrafo;
        }