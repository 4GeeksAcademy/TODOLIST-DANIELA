import React, { useState } from 'react';
export default function ListaDePendientes () {
    const [tareas, setTareas] = useState([]);
    const [textoActual, setTextoActual]= useState("");

    const handleKeyDown = (e) => {
        if (e.key === 'Enter') {
            const contenido = textoActual.trim();
            if (contenido) {
                setTareas(prev => [...prev, {id: Date.now(), contenido }]);
            }
            setTextoActual("");

            }
        };

        const handleDelete =(id) => {
            setTareas(prev => prev.filter(tarea => tarea.id !== id));
        };
    return(
        <div className="contenedor-tareas">
            <h1 className="titulo-principal">Mis tareas</h1>
        <input
        type="text"
         className="entrada-tarea"
        placeholder="Escribe la tarea y marca Enter"
        value={textoActual}
        onChange={(e) => setTextoActual(e.target.value)}
        onKeyDown={handleKeyDown}
      />
       {tareas.length === 0 ? (
        <p className="mensaje-sin-tareas">Hoy no tienes tareas</p>
      ) : (
         <ul className="lista-tareas">
          {tareas.map(tarea => (
            <li key={tarea.id} className="item-tarea">
                <span className="texto-tarea"> {tarea.contenido}</span>
              <button
              className="boton-eliminar"
                onClick={() => eliminarTarea(tarea.id)}
                aria-label="Eliminar tarea">
        
                </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );

}
    