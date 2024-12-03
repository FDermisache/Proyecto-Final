
/* CREAR FORMULARIO PARA AGREGAR ESPACIOS, USAMOS ESTADOS. */




const [showForm, setShowForm] = useState(false);
/* useState:para declarar una variable de estado llamada showForm. El valor inicial es false, lo que significa que el formulario está oculto al principio.
  setShowForm: es la función que se usará para cambiar el valor de showForm cuando queramos mostrar u ocultar el formulario */

const [newWorkspaceName, setNewWorkspaceName] = useState('');
/*
newWorkspaceName: que contiene el nombre del nuevo espacio de trabajo. Su valor inicial es una cadena vacía (''), lo que indica que el campo de entrada está vacío al principio.
setNewWorkspaceName: es la función que actualizará el valor de newWorkspaceName cuando el usuario escriba en el campo de texto.
*/


  // Envío del formulario
  const handleAddWorkspace = (e) => { /* Esta es la función de manejo del formulario que se ejecuta cuando el usuario envía el formulario. Recibe un parámetro e, que es el objeto del evento. */
    e.preventDefault(); /* este método detiene la acción por defecto del formulario, que en este caso sería recargar la página. Queremos manejar la acción manualmente sin que la página se recargue. */

    
    const newWorkspace = { /* Estamos creando un nuevo objeto que representa un espacio de trabajo. Este objeto tiene:
        id: Un identificador único, generado en base al número de elementos en la lista de workspaces. Esto asegura que el nuevo espacio tendrá un ID único.
        title: El nombre del espacio de trabajo, que tomamos del estado newWorkspaceName.
        miembros, imagen, messages: Campos adicionales que pueden ser útiles más tarde, pero en este momento están vacíos. */
      id: workspaces.length + 1, 
      title: newWorkspaceName,
      miembros: [],
      imagen: '',
      messages: []
    };

    // Actualizar la lista de espacios
    setWorkspaces([...workspaces, newWorkspace]); /* Aquí estamos actualizando la lista de espacios de trabajo. Usamos el operador de propagación (...) para clonar todos los elementos existentes en el estado workspaces, y luego agregamos el newWorkspace al final de la lista.
    Esto provoca que React re-renderice el componente con la lista actualizada. */
    setNewWorkspaceName(''); // Limpiar el input
    setShowForm(false); // Cerrar el formulario
  };

  return (
    <div>
      <h1>Espacios de Trabajo</h1>

      {/* Botón para abrir el formulario */}
      <button onClick={() => setShowForm(!showForm)}> {/* Este es el botón que controla la visibilidad del formulario. Si el formulario está visible (cuando showForm es true), el botón mostrará "Cancelar". Si está oculto, mostrará "Agregar Espacio de Trabajo". Al hacer clic en este botón, el estado showForm cambia a su valor opuesto (true o false), lo que provoca que el formulario se muestre o se oculte. */}
        {showForm ? 'Cancelar' : 'Agregar Espacio de Trabajo'}
      </button>

      
      {showForm && (/* Este es un renderizado condicional. Si showForm es true, se muestra el formulario. Si showForm es false, el formulario está oculto. */
        <div >
          <form onSubmit={handleAddWorkspace}>{/* onSubmit={handleAddWorkspace}: Cuando el formulario se envía (presionando el botón "Agregar"), se ejecuta la función handleAddWorkspace. */}
            <label>
              Nombre del Espacio:
              <input
                type="text"
                value={newWorkspaceName}
                onChange={(e) => setNewWorkspaceName(e.target.value)}/* onChange={(e) => setNewWorkspaceName(e.target.value)}: Esta función actualiza el valor de newWorkspaceName cada vez que el usuario escribe en el campo de texto., Con el target value obtenemos lo que el usuario escribe en el input */
                placeholder="Ingresa el nombre"
              />
            </label>
            <button type="submit">Agregar</button>
          </form>
        </div>
      )}

      {/* Renderizar la lista de espacios de trabajo */}
      <WorkspacesList workspaces={workspaces} />
    </div>
  );
};

export default WorkspacesHome;





/* Local Storage */

const WorkspacesHome = () => {
  const [workspaces, setWorkspaces] = useState(() => {
    // Leer los espacios de trabajo guardados en localStorage
    const savedWorkspaces = localStorage.getItem('workspaces'); /* Esta función lee lo que está almacenado en el localStorage bajo la clave 'workspaces'.
    Si previamente guardaste algo con esta clave (por ejemplo, una lista de espacios de trabajo), getItem() lo devolverá. Este dato será una cadena de texto (ya que todo en localStorage se guarda como texto).
    Si no hay nada guardado bajo esa clave (por ejemplo, si es la primera vez que cargas la página), devolverá null. */
    return savedWorkspaces ? JSON.parse(savedWorkspaces) : [ /* Si savedWorkspaces existe (es decir, si no es null o undefined), ejecuta la primera parte después del ?, que es: JSON.parse(savedWorkspaces).
      Si savedWorkspaces no existe (es decir, es null), ejecuta la segunda parte después del :, que es el arreglo por defecto que contiene los valores iniciales de los espacios de trabajo.
      JSON.parse convierte una cadena de texto en un objeto JavaScript.
Si en el paso anterior getItem('workspaces') devolvió una cadena de texto (por ejemplo, si los espacios de trabajo se habían guardado previamente como texto en localStorage), esta línea convierte esa cadena en el arreglo de objetos que tenías originalmente. */
      {
        imagen: '',
        title: 'Trabajo Final',
        miembros: [],
        id: 1,
        messages: []
      },
      {
        imagen: '',
        title: 'Espacio de trabajo',
        miembros: [],
        id: 2,
        messages: []
      },
      {
        imagen: '',
        title: 'Google',
        miembros: [],
        id: 3,
        messages: []
      }
    ]; // Valor por defecto si no hay datos en localStorage
  });

  const [showForm, setShowForm] = useState(false);
  const [newWorkspaceName, setNewWorkspaceName] = useState('');

  // Envío del formulario
  const handleAddWorkspace = (e) => {
    e.preventDefault();
    const newWorkspace = {
      id: workspaces.length + 1, // Generar un ID único
      title: newWorkspaceName,
      miembros: [],
      imagen: '',
      messages: []
    };

    // Actualizar la lista de espacios
    setWorkspaces((prevWorkspaces) => {
      const updatedWorkspaces = [...prevWorkspaces, newWorkspace];
      return updatedWorkspaces;
    });

    setNewWorkspaceName(''); // Limpiar el input
    setShowForm(false); // Cerrar el formulario
  };

  // Guardar los espacios de trabajo en localStorage cada vez que 'workspaces' cambie
  useEffect(() => { /* useEffect: Es una función que te permite ejecutar algo "después de que el componente se haya renderizado". En este caso, lo usamos para guardar los datos de los espacios de trabajo en localStorage cada vez que el estado de workspaces cambie. */
    localStorage.setItem('workspaces', JSON.stringify(workspaces)); /* localStorage.setItem: Guarda un dato en localStorage bajo una clave específica (en este caso, 'workspaces').
    JSON.stringify(workspaces): Convertimos el estado workspaces (que es un arreglo de objetos) a una cadena de texto para poder guardarlo en localStorage (porque localStorage solo puede almacenar texto). */

  }, [workspaces]); // Este efecto se ejecuta cuando 'workspaces' cambia

  return 




  {showForm ? 'form-visible' : 'form-hidden'}
/* Evalúa la variable showForm y, dependiendo de su valor (verdadero o falso), retorna una de las dos cadenas de texto:

Si showForm es true, devuelve 'form-visible'.
Si showForm es false, devuelve 'form-hidden'.
¿Cómo funciona?
Condición:

showForm se evalúa como una condición booleana (es decir, verdadero o falso).
Ejemplo:
Si showForm tiene un valor como true o 1, la condición es verdadera.
Si showForm tiene un valor como false, null, undefined, o 0, la condición es falsa.
El operador ternario (? y :):

? indica qué valor devolver si la condición es verdadera.
: indica qué valor devolver si la condición es falsa.
Resultado final:
Dependiendo de showForm, se selecciona la clase CSS que debe aplicarse.
className: Se asigna dinámicamente una clase CSS.
Si showForm es true, se aplica la clase 'form-visible', mostrando o estilizando el formulario.
Si showForm es false, se aplica la clase 'form-hidden', ocultándolo o aplicando otro estilo.

*/





/* ------------------------------------------------------------------ */

// NAVIGATE

const navigate = useNavigate();

    useEffect(() => {
        if (!titulo) {
            navigate(`/canales/${canal_id}/general`);
        }
    }, [titulo, canal_id, navigate]);




    useNavigate es un hook proporcionado por react-router-dom que se usa para cambiar la URL y realizar una navegación programática. Al usar const navigate = useNavigate();, estamos creando una función navigate que podemos usar para redirigir al usuario a otra ruta en nuestra aplicación.

//useEffect(() => {
useEffect es un hook de React que ejecuta un efecto secundario (side effect) en un componente. El efecto se ejecutará después de que el componente se haya renderizado. En este caso, el efecto se ejecutará cada vez que los valores dentro de su lista de dependencias cambien.

//if (!titulo) {
Aquí estamos verificando si la variable titulo está vacía o no está definida (si es falsy). La variable titulo proviene de los parámetros de la URL, los cuales son capturados por useParams() (por ejemplo, si la URL es /canales/1/general, titulo sería 'general').

Si titulo no está presente en la URL (es decir, si titulo es undefined, null, o una cadena vacía), entonces se ejecuta el siguiente bloque de código dentro del if.

//navigate(`/canales/${canal_id}/general`);
Si la condición del if es verdadera (es decir, si no hay titulo en la URL), aquí usamos la función navigate para redirigir al usuario a una ruta que contiene un titulo predeterminado ('general' en este caso). La ruta que estamos construyendo es /canales/${canal_id}/general, donde canal_id es un parámetro de la URL (por ejemplo, si canal_id es 1, la URL sería /canales/1/general).
navigate(/canales/${canal_id}/general): Esto cambia la URL del navegador y "navega" a la ruta especificada, lo que hará que el componente se vuelva a renderizar con el nuevo título ('general').

//}, [titulo, canal_id, navigate]); SI QUIERO Q PASE 1 VEZ ESTO LO PASO VACIO, EN ESTE CASO SI LE PASAMOS LO QUE DICE AHI, LA PAGINA NO VUELVE HACIA ATRAS
Dependencias del useEffect: La función useEffect se ejecuta cada vez que alguna de las dependencias en la lista [titulo, canal_id, navigate] cambia.
titulo: Si cambia el valor de titulo (lo que ocurre cuando el usuario navega a una ruta diferente con un título de canal diferente), el efecto se volverá a ejecutar.
canal_id: Si cambia el canal_id, lo que indica que el usuario ha cambiado de canal, el efecto también se ejecutará.
navigate: Aunque normalmente no es necesario poner navigate en las dependencias (porque no cambia entre renders), es una buena práctica si queremos ser explícitos y asegurarnos de que el efecto sea reactivo a cualquier cambio.