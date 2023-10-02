const express = require('express');
const app = express();
const puerto = process.env.PORT || 3003;
app.use(express.json())

//Arreglo de proyectos
let proyectos = [
    {id: 1, nombreProyecto: "Desarrollo de una aplicación móvil", descripcion: "Desarrollo de una aplicación móvil de comidas", fechaInicio: "05/07/2023", fechaFin: "05/09/2023"},
    {id: 2, nombreProyecto: "Optimización de un sistema de gestión financiera", descripcion: "Mejora de la eficiencia del sistema financiero de la empresa", fechaInicio: "10/07/2023", fechaFin: "10/09/2023"},
    {id: 3, nombreProyecto: "Implementación de un sistema de seguimiento de ventas", descripcion: "Desarrollo de una herramienta para rastrear las ventas y métricas de la empresa", fechaInicio: "15/07/2023", fechaFin: "15/09/2023"},
    {id: 4, nombreProyecto: "Diseño y lanzamiento de un nuevo sitio web", descripcion: "Creación de un sitio web moderno y su lanzamiento", fechaInicio: "20/07/2023", fechaFin: "20/09/2023"},
    {id: 5, nombreProyecto: "Mejora de la infraestructura de red", descripcion: "Actualización y expansión de la infraestructura de red de la empresa", fechaInicio: "25/07/2023", fechaFin: "25/09/2023"},
    {id: 6, nombreProyecto: "Desarrollo de una aplicación de gestión de proyectos", descripcion: "Creación de una aplicación interna para la gestión eficiente de proyectos", fechaInicio: "30/07/2023", fechaFin: "30/09/2023"},
    {id: 7, nombreProyecto: "Actualización de la plataforma de comercio electrónico", descripcion: "Mejora de la plataforma de venta en línea de la empresa", fechaInicio: "05/08/2023", fechaFin: "05/10/2023"},
    {id: 8, nombreProyecto: "Lanzamiento de una campaña de marketing", descripcion: "Planificación y ejecución de una campaña publicitaria", fechaInicio: "10/08/2023", fechaFin: "10/10/2023"},
    {id: 9, nombreProyecto: "Desarrollo de un sistema de gestión de recursos humanos", descripcion: "Implementación de un sistema para gestionar los recursos humanos de la empresa", fechaInicio: "15/08/2023", fechaFin: "15/10/2023"},
    {id: 10, nombreProyecto: "Investigación y desarrollo de nuevos productos", descripcion: "Exploración y creación de nuevos productos innovadores", fechaInicio: "20/08/2023", fechaFin: "20/10/2023"},
];

//Arreglo de tareas
let tareas = [
    {id: 1, idProyecto: 1, nombreTarea: "Diseñar la interfaz de usuario", descripcion: "Realizar el diseño de la interfaz de usuario con un estilo moderno", fechaAsignacion: "20/07/2023", estado: "Pendiente"},
    {id: 2, idProyecto: 2, nombreTarea: "Revisar y mejorar los procesos financieros", descripcion: "Evaluar y optimizar los procesos financieros existentes en el sistema", fechaAsignacion: "22/07/2023", estado: "En Progreso"},
    {id: 3, idProyecto: 3, nombreTarea: "Desarrollar módulo de seguimiento de ventas", descripcion: "Implementar el módulo de seguimiento de ventas en la aplicación", fechaAsignacion: "25/07/2023", estado: "Pendiente"},
    {id: 4, idProyecto: 4, nombreTarea: "Diseñar la interfaz del nuevo sitio web", descripcion: "Crear un diseño moderno y atractivo para el nuevo sitio web", fechaAsignacion: "28/07/2023", estado: "Pendiente"},
    {id: 5, idProyecto: 5, nombreTarea: "Configurar y optimizar la red empresarial", descripcion: "Mejorar la configuración y rendimiento de la infraestructura de red", fechaAsignacion: "01/08/2023", estado: "Pendiente"},
    {id: 6, idProyecto: 6, nombreTarea: "Desarrollar módulo de gestión de proyectos", descripcion: "Crear un módulo eficiente para gestionar proyectos internos de la empresa", fechaAsignacion: "05/08/2023", estado: "Pendiente"},
    {id: 7, idProyecto: 1, nombreTarea: "Actualizar diseño y funcionalidades de la plataforma", descripcion: "Realizar mejoras en la plataforma de comercio electrónico", fechaAsignacion: "08/08/2023", estado: "Pendiente"},
    {id: 8, idProyecto: 8, nombreTarea: "Crear materiales promocionales", descripcion: "Desarrollar materiales para la campaña de marketing", fechaAsignacion: "10/08/2023", estado: "Pendiente"},
    {id: 9, idProyecto: 9, nombreTarea: "Implementar módulo de gestión de recursos humanos", descripcion: "Integrar un sistema para gestionar recursos humanos en la empresa", fechaAsignacion: "15/08/2023", estado: "Pendiente"},
    {id: 10, idProyecto: 10, nombreTarea: "Investigar y desarrollar prototipos de nuevos productos", descripcion: "Realizar investigaciones y crear prototipos de productos innovadores", fechaAsignacion: "20/08/2023", estado: "Pendiente"},
];

//OBTENER LISTAS ENTERAS
app.get('/socios/v1/proyectos', (req,res)=>{
    //Verificar si existen proyectos
    if(proyectos.length>0){
        res.status(200).json({
            estado:1,
            mensaje:"Exiten proyectos",
            proyectos: proyectos
        })
    }else{
        res.status(404).json({
            estado:0,
            mensaje:"No exiten proyectos",
            proyectos: proyectos
        })
    }
})

app.get('/socios/v1/tareas', (req,res)=>{
    //Verificar si existen tareas
    if(tareas.length>0){
        res.status(200).json({
            estado:1,
            mensaje:"Exiten tareas",
            tareas: tareas
        })
    }else{
        res.status(404).json({
            estado:0,
            mensaje:"No exiten tareas",
            tareas: tareas
        })
    }
})

//OBTENER POR ID
app.get('/socios/v1/proyectos/:id', (req, res)=>{
    //Solo una categoria
    const id = req.params.id;
    //Programación Funcional
    const proyecto = proyectos.find(proyecto=>proyecto.id==id)
    //Si se encontró una categoría
    if(proyecto){
        res.status(200).json({
            estado:1,
            mensaje:"Proyecto encontrado",
            proyecto:proyecto
        })
        
    }else{
        //No se encontró una categoría
        res.status(404).json({
            estado:0,
            mensaje:"No se encontró el proyecto",
            proyecto:{}
        })  
    }
    //Programación Estructurada
    for(let i = 0; i < array.length; i++){
        const element = array[i];
    }

    res.send('Mostrar un proyecto por su id');
})

app.get('/socios/v1/tareas/:id', (req, res)=>{
    //Solo una tarea
    const id = req.params.id;
    //Programación Funcional
    const tarea = tareas.find(tarea=>tarea.id==id)
    //Si se encontró una categoría
    if(tarea){
        res.status(200).json({
            estado:1,
            mensaje:"Tarea encontrada",
            tarea:tarea
        })
        
    }else{
        //No se encontró una categoría
        res.status(404).json({
            estado:0,
            mensaje:"No se encontró la tarea",
            tarea:{}
        })  
    }
    //Programación Estructurada
    for(let i = 0; i < array.length; i++){
        const element = array[i];
    }

    res.send('Mostrar una tarea por su id');
})

//AGREGAR NUEVOS RECURSOS
app.post('/socios/v1/proyectos', (req, res)=>{
    const{nombreProyecto, descripcion, fechaInicio, fechaFin} = req.body;
    const id = Math.round(Math.random()*1000);
    //Comprobar que el cliente(navegador) = usuario = programador
    if(nombreProyecto==undefined || descripcion==undefined || fechaInicio==undefined || fechaFin==undefined){
        //Hay un error en la solicitud por parte del usuario
        res.status(400).json({
            estado:0,
            mensaje:"BAD REQUEST - Favor de llenar los campos correctamente"
        })
    }else{
        //En javascript como agregar un nuevo elemento a un arreglo
        const proyecto = {id:id, nombreProyecto:nombreProyecto, descripcion:descripcion, fechaInicio:fechaInicio, fechaFin:fechaFin};
        const longitudInicial = proyectos.length;
        proyectos.push(proyecto)
        if(proyectos.length > longitudInicial){
            //Si se agregó una categoría todo OK
            res.status(201).json({
                estado:1,
                mensaje:"Proyecto creado",
                proyecto:proyecto
            })
        }else{
            //Error del servidor al no poder crearse la categoria
            res.status(500).json({
                estado:0,
                mensaje:"Proyecto no creado por un error desconocido",
                proyecto:proyecto
            })
        }
    }

    res.send('Crear un proyecto');
})

app.post('/socios/v1/tareas', (req, res)=>{
    const{nombreTarea, descripcion, fechaAsignacion, estado} = req.body;
    const id = Math.round(Math.random()*1000);

    if(nombreTarea==undefined || descripcion==undefined || fechaAsignacion==undefined || estado==undefined){
        //Hay un error en la solicitud por parte del usuario
        res.status(400).json({
            estado:0,
            mensaje:"BAD REQUEST - Favor de llenar los campos correctamente"
        })
    }else{
        const tarea = {id:id, idProyecto:id, nombreTarea:nombreTarea, descripcion:descripcion, fechaAsignacion:fechaAsignacion, estado:estado};
        const longitudInicial = tareas.length;
        tareas.push(tarea)
        if(tareas.length > longitudInicial){
            //Si se agregó una categoría todo OK
            res.status(201).json({
                estado:1,
                mensaje:"Tarea creada",
                tarea:tarea
            })
        }else{
            //Error del servidor al no poder crearse la categoria
            res.status(500).json({
                estado:0,
                mensaje:"Tarea no creada por un error desconocido",
                tarea:tarea
            })
        }
    }
})

//ACTUALIZAR RECURSOS
app.put('/socios/v1/proyectos/:id', (req, res)=>{
    const {id} = req.params;
    const {nombreProyecto,descripcion, fechaInicio, fechaFin} = req.body;
    if(nombreProyecto==undefined || descripcion==undefined || fechaInicio==undefined || fechaFin==undefined)
    {
        res.status(400).json({
            estado:0,
            mensaje:"Faltan parametros en la solicitud"
        })
    }else{
        const posActualizar = proyectos.findIndex(proyecto => proyecto.id==id)
        if(posActualizar!= -1)
        {
            //Si encontro la categoria con el id buscado
            //Actualizar la categoria
            proyectos[posActualizar].nombreProyecto=nombreProyecto;
            proyectos[posActualizar].descripcion=descripcion;
            proyectos[posActualizar].fechaInicio=fechaInicio;
            proyectos[posActualizar].fechaFin=fechaFin;
            res.status(200).json({
                estado: 1,
                mensaje: "Proyecto actualizado",
                proyecto: proyectos[posActualizar]
            })            
        }
        else
        {
            //No se encontro la categoria del id buscado
            res.status(404).json({
                estado:0,
                mensaje:"Proyecto no encontrado"
            })
        }
    }
})

app.put('/socios/v1/tareas/:id', (req, res)=>{
    const {id} = req.params;
    const {nombreTarea, descripcion, fechaAsignacion, estado} = req.body;
    if(nombreTarea==undefined || descripcion==undefined || fechaAsignacion==undefined || estado==undefined)
    {
        res.status(400).json({
            estado:0,
            mensaje:"Faltan parametros en la solicitud"
        })
    }
    else
    {
        const posActualizar = tareas.findIndex(tarea => tarea.id==id)
        if(posActualizar!= -1)
        {
            //Si encontro la categoria con el id buscado
            //Actualizar la categoria
            tareas[posActualizar].nombreTarea=nombreTarea;
            tareas[posActualizar].descripcion=descripcion;
            tareas[posActualizar].fechaAsignacion=fechaAsignacion;
            tareas[posActualizar].estado=estado;
            res.status(200).json({
                estado: 1,
                mensaje: "Tarea actualizada",
                tarea: tareas[posActualizar]
            })            
        }
        else
        {
            //No se encontro la categoria del id buscado
            res.status(404).json({
                estado:0,
                mensaje:"Tarea no encontrada"
            })
        }
    }

     res.send('Actualizar una tarea por su id');
})

//ELIMINAR RECURSOS
app.delete('/socios/v1/proyectos/:id', (req, res)=>{
    const {id} = req.params;
    const indiceEliminar = proyectos.findIndex(proyecto => proyecto.id==id)
    if(indiceEliminar!=-1){
        //Borrar la categoria
        proyectos.splice(indiceEliminar, 1);
        res.status(201).json({
            estado:1,
            mensaje:"Proyecto eliminado con éxito"
        })
    }else{
        //Categoria no encontrada
        res.status(404).json({
            estado:0,
            mensaje:"Proyecto no encontrado"
        })
    }
})

app.delete('/socios/v1/tareas/:id', (req, res)=>{
    const {id} = req.params;
    const indiceEliminar = tareas.findIndex(tarea => tarea.id==id)
    if(indiceEliminar!=-1){
        //Borrar la categoria
        tareas.splice(indiceEliminar, 1);
        res.status(201).json({
            estado:1,
            mensaje:"Tarea eliminada con éxito"
        })
    }else{
        //Categoria no encontrada
        res.status(404).json({
            estado:0,
            mensaje:"Tarea no encontrada"
        })
    }
})

//MOSTRAR TODAS LAS TAREAS DE UN PROYECTO
app.get('/socios/v1/proyectos/:id/tareas', (req, res) => {
    const idProyecto = parseInt(req.params.id); 

    // Filtrar las tareas por el idProyecto proporcionado
    const tareasProyecto = tareas.filter(tarea => tarea.idProyecto === idProyecto);

    if (tareasProyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Existen tareas",
            tareasProyecto: tareasProyecto
        });
    } else {
        res.status(404).json({
            estado: 0,
            mensaje: "No existen tareas para el proyecto con ID " + idProyecto,
            tareas: tareas
        });
    }
})


//MOSTRAR UNA TAREA ESPECÍFICA DE UN PROYECTO
app.get('/socios/v1/proyectos/:idproyect/tareas/:id', (req, res) => {
    const idProyecto = parseInt(req.params.idproyect); 
    const idTarea = parseInt(req.params.id);

    // Filtrar las tareas por el idProyecto proporcionado
    const tareasProyecto = tareas.filter(tarea => tarea.idProyecto === idProyecto);

    // Programación Funcional para encontrar una tarea específica
    const tarea = tareas.find(tarea => tarea.id === idTarea);

    // Si se encontró una tarea
    if (tarea) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tarea encontrada",
            tarea: tarea
        });
    } else {
        // No se encontró la tarea
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontró la tarea",
            tarea: {}
        });
    }
})


//MOSTRAR TAREAS DE UN PROYECTO POR ESTADO
app.get('/socios/v1/proyectos/:idproyect/tareas', (req, res) => {
    const idProyecto = parseInt(req.params.idproyect);
    const estado = req.query.estado; // Obtener el estado desde el Query String

    // Filtrar las tareas por el idProyecto y el estado proporcionados
    const tareasProyecto = tareas.filter(tarea => tarea.idProyecto === idProyecto && tarea.estado === estado);

    // Si hay tareas que coinciden con el proyecto y estado
    if (tareasProyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tareas encontradas",
            tareas: tareasProyecto
        });
    } else {
        // No se encontraron tareas que coincidan
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas con el estado especificado",
            tareas: []
        });
    }
})


//MOSTRAR TAREAS DE UN PROYECTO POR FECHA DE INICIO 
app.get('/socios/v1/proyectos/:idproyect/tareas', (req, res) => {
    const idProyecto = parseInt(req.params.idproyect);
    const fechaInicio = req.query.fechaInicio; // Obtener la fecha de inicio desde el Query String

    // Filtrar las tareas por el idProyecto y la fecha de inicio proporcionados
    const tareasProyecto = tareas.filter(tarea => tarea.idProyecto === idProyecto && tarea.fechaInicio === fechaInicio);

    // Si hay tareas que coinciden con el proyecto y la fecha de inicio
    if (tareasProyecto.length > 0) {
        res.status(200).json({
            estado: 1,
            mensaje: "Tareas encontradas",
            tareas: tareasProyecto
        });
    } else {
        // No se encontraron tareas que coincidan
        res.status(404).json({
            estado: 0,
            mensaje: "No se encontraron tareas con la fecha de inicio especificada",
            tareas: []
        });
    }
});


//Poner en marcha la API
app.listen(puerto, () => {  
    console.log('Servidor corriendo en el puerto: ', puerto);
});

