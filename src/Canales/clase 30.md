useEffect: nos permite controlar cuando se ejecuta una funcion.
es una funcuon que recibe 2 parametros

1. El efecto o accion, es una funcion que tendra la accion que queremos controlar. (ejemplo: saludar)
2. El array/lista de dependencias ( si esta vacio es que solo se ejecutara 1 vez)

const saludar = () => {
    alert('hola')
}

useEffect(
    ()=> {
        saludar() // 1
    },
    [] // 2. pasamos el array vacio para que se ejecute 1 vez
)

Sirve para slack, en slack siempre que entras a un canal hay un chat precargado. ( ver la clase )

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
useNavigatev (ESTO SE IMPORTA)

const navigate = useNavigate()

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

Hacer un boton que vaya para atras

const goBack = () => {
    navigate (-1)
}

<div>
    <button onclick={goBack}>back</button>
</div>

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

PONER IMAGENES EN JS

DESCARGAMSO LA IMAGEN, LA PONEMOS EN LA CARPETA PUBLICA, HACEMOS UNA CARPETA LLAMADA IMAGENES

VAMOS PONEMOS LA ETIQUETA IMG SRC = '/IMAGES/NOMBRE DEL ARCHIVO DE LA FOTO'

DIRECTAMENTE LO PODEMOS HACER EN EL ARRAY IMAGEN:'/IMAGES/NOMBRE DEL ARCHIVO DE LA FOTO'

--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

CONTEXTOS:

1. creamos una carpeta nueva llamata contetx
2. creamos un archivo 
3. creamos una const WorkspacesContext = createContent() (es una funcion que trae React, para crear un contexto hayq ue llamar a esa funcion)
4. 
// Toda la logica de la aplicacion la vamos a trabajar aca dentro. Lo bueno de los contactos es que exporta cualquier cosa, y se puede usar en cualquier parte EJ:

let valor ='pepe'
const WorksapaceContectProvider = (children) => { (children es todo lo que encierra mi app)
    <WorkspaceContext.Provider >
    {children}
    </WorkspaceContext.Provider>
}

5. voy a mi main jsx, lo importo y hago que contenga a la app

<WorkspaceContext.Provider value ={
{
    valor: valor,
    numero_fav: 22 ( se le puede pasar cualquier valor)
}}>
    <App/>
</WorkspaceContext.Provider>

6. Obtener el valor en otro archivo

const workspaces_values = useContex(WorkspacesContext) // creamos una constante, le ponemos el UseContext que nos permite usar los contextos y le pasamos el nombre de la variable declarado

EJemplo practico
7. crreamos una const [workspaces_state, setWorkspacesState] = useState(workspaces) // Creamos un eestado inicial de los workspaces(archivo js)

CADA COSA QUE CREEMOS, CREAR UN NUEVO CANLA, ELIMINAR LO HGACEMOS ACA Y DESPUES AGREGAMOS EL NOMBRE DE LA CONSTANTE EJ: y despues lo podemos llamar en cualquier archivo 

const deleteWorkspace = () => {
    return
}

<WorkspaceContext.Provider value ={
{
    workspaces_state:workspaces_state
    deleteWorksapce: deleteWorksapce
}}>
    <App/>
</WorkspaceContext.Provider>