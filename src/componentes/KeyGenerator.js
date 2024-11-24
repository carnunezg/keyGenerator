import { useState } from "react";

const KeyGenerator = () => {

    const [clave, setClave] = useState('');
    const [valor, setValor] = useState(''); 
    const [textBoton, setTextBoton] = useState('Generar');
    const [textError, setTextError] = useState('');

    const nuevoValor = (evento) => {
        setValor(evento.target.value); // Actualizar el estado con el valor del input
    };
    

    let caracteres = '**..ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890**..';
    let arrayCaracteres = caracteres.split('');
    
    const claveLetras = (longitud) => {
      let newLetras = '';
      for(let i = 0; i < longitud; i++){
        let letraAleatoria = Math.floor(Math.random() * arrayCaracteres.length);
        newLetras = newLetras + arrayCaracteres[letraAleatoria];
      }
      return newLetras;
    }

    const generarOtro = () => {
        const cantCaracter = parseInt(valor, 10);
        if(cantCaracter > 0){
           const claveGenerada = claveLetras(cantCaracter);
           setClave(claveGenerada);
           setTextBoton('Generar otro');
           setTextError('');

        }else {
            setTextError('Por favor, ingresa una cantidad válida de caracteres.');
            setTimeout(() => {
                setTextError('');
            }, 3000);
        }
        
    };

    const limpiarCampos = () => {
        setClave('');
        setValor('');
        setTextBoton('Generar');
        setTextError('');
    }

  return (
    <div>
        <div 
           className="w-50 container card mt-5"
        >
        <h1 
           className="d-flex justify-content-center align-items-center m-2 text-success"
        >GENERADOR DE CLAVES</h1>

        <div 
           className="d-flex justify-content-center m-2"
        >
             <input 
                className=" form-control m-3 justify-content-center w-50" 
                type="number" 
                placeholder="Cantidad de caracteres..." 
                min={0}
                max={50}
                style={{ textAlign: 'center' }} 
                value={valor}
                onChange={nuevoValor}
             ></input>
             
        </div>   
        <div className="d-flex justify-content-center text-danger">
             <p onChange={generarOtro} >{textError}</p>
             </div>    
        <div 
           className="d-flex justify-content-center align-items-center card m-2"
        >
        <h2>Contraseña</h2>
        <label 
           className="h4 font-weight-bold text-danger"
        >{clave ? clave : '____________'}</label>

        </div>

        <div 
           className="d-flex justify-content-center align-items-center"
        >
        <button 
            className="btn btn-primary m-2" 
            onClick={generarOtro}
        >{textBoton}</button>

            <div 
               className="d-flex justify-content-end"
            >
             <button 
                 className=" btn btn-warning m-3"
                 onClick={limpiarCampos}
             >Limpiar</button>

             </div>
        </div>

      </div>
      
    </div>
  )
}

export default KeyGenerator;
