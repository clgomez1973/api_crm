import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Formulario from "../components/Formulario"

const EditarCliente = () => {
    const [cliente, setCliente] = useState({});
    const [cargando, setCargando] = useState(true);

    const { id } = useParams();

    useEffect(() => {
        const obtenerCLienteApi = async () => {
          try {
            const url = `http://localhost:4000/clientes/${id}`;
            const respuesta = await fetch(url);
            const resultado = await respuesta.json();
            setCliente(resultado);
          } catch (error) {
            console.log(error);
          }
    
          setCargando(!cargando);
          
        };
    
        obtenerCLienteApi();
      }, []);

    return (
        <div>
             <>
            <h1 className='font-black text-4xl text-blue-900'>Editar Cliente</h1>
            <p className='mt-3'>Utiliza este Formulario para Editar los Datos de un Cliente</p>

            {cliente?.nombre ? (
                 <Formulario
                 cargando={cargando}
                 cliente={cliente}
             />
            ) : <p>Cliente ID no válido</p>
            }
           
        </>
        </div>
    )
}

export default EditarCliente
