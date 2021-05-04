tinymce.init({
    selector: '#descripcion-txt',
    height: 200,
    menubar: false,
    plugins: [
      'advlist autolink lists link image charmap print preview anchor',
      'searchreplace visualblocks code fullscreen',
      'insertdatetime media table paste code help wordcount'
    ],
    toolbar: 'undo redo | formatselect | ' +
    'bold italic backcolor | alignleft aligncenter ' +
    'alignright alignjustify | bullist numlist outdent indent | ' +
    'removeformat | help',
    content_style: 'body { font-family:Helvetica,Arial,sans-serif; font-size:14px }'
  });

  const Reos = [];//Definir un arreglo
  const cargarTabla = ()=>{

    //1. Obtener una referencia a la tabla

    let tbody = document.querySelector("#tbody-tabla");

    //Eliminar el contenido del tbody
    tbody.innerHTML = "";
    
    for(let i=0; i < Reos.length; ++i){

        let p = Reos [i];
       
        //3. Por cada reo generar una fila de la tabla (tr)
        let tr = document.createElement("tr");
      //por cada atributo generar un td de la tabla
    let tdnombre = document.createElement("td");
    let tddescripcion = document.createElement("td");
    let tdciudad = document.createElement("td");
    let tdcrimenes = document.createElement("td");

        //definir que va en la tabla
        tdnombre.innerText = p.nombre;
        tddescripcion.innerHTML = p.descripcion;
        tdciudad.innerText = p.ciudad; 
        tdcrimenes.innerText = p.crimenes;

    //agregar los td al tr
    tr.appendChild(tdnombre);
    tr.appendChild(tddescripcion);
    tr.appendChild(tdciudad);
    tr.appendChild(tdcrimenes);
    tbody.appendChild(tr);


    // separacion




    }
  };

  document.querySelector("#registrar-btn").addEventListener("click", ()=>{
    let nombre = document.querySelector("#nombre-txt").value;
    let descripcion = tinymce.get("descripcion-txt").getContent();//solo para tinymce
    let ciudad = document.querySelector("#ciudad-select").value;
    let crimenes = document.querySelector("#crimenes-txt").value;





    //crear un objeto
    let reos = {};
    //crear atributos
    reos.nombre = nombre;
    reos.crimenes = crimenes;
    reos.descripcion = descripcion;
    reos.ciudad = ciudad;

   Reos.push(reos);
   
   cargarTabla(); 

   Swal.fire("Resultado exitoso!", "Reo registrado", "info");
  
  })