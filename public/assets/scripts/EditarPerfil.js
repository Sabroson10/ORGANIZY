function Guardar(){
    if(document.editar.nombre.value ===""){
        alert("ERROR debe ingresar un texto para el nombre");
        return false;
    }

    if(document.editar.apellido1.value ===""){
        alert("ERROR debe ingresar un texto para el apellido paterno");
        return false;
    }
    if(document.editar.apellido2.value ===""){
        alert("ERROR debe ingresar un texto para el apellido materno");
        return false;
    }
    if(document.editar.nombreusuario.value ===""){
        alert("ERROR debe ingresar un texto para tu nombre de usuario");
        return false;
    }
    if(document.editar.correo.value==="" || 
               document.editar.correo.value.indexOf('@',0)===-1){
           alert("ERROR debe ingresar un email...");
           return false;
    }
    if(document.editar.bio.value ===""){
        alert("ERROR debe ingresar un texto en el apartado biografia");
        return false;
    }
    alert("Datos ingresados correctamente.......");    
}