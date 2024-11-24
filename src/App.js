import KeyGenerator from "./componentes/KeyGenerator";



// let numeros = '1234567890';
// let arrayNumeros = numeros.split('');
// let newNumeros = '';
// let cantNumeros = prompt('Ingrese cantidad de caracteres para los Números:');

// function claveNumeros(){
//   for(let i = 0; i < cantNumeros; i++){
//     let numeroAleatorio = Math.floor(Math.random() * arrayNumeros.length);
//     newNumeros = newNumeros + arrayNumeros[numeroAleatorio];
//   }
//   return newNumeros;  
// }


// let simbolos = '*.-$';
// let arraySimbolos = simbolos.split('');
// let newSimbolos = '';
// let cantsimbolos = prompt('Ingrese cantidad de caracteres para los Simbolos:');

// function claveSimbolos(){
//   for(let i = 0; i < cantsimbolos; i++){
//     let simboloAleatorio = Math.floor(Math.random() * arraySimbolos.length);
//     newSimbolos = newSimbolos + arraySimbolos[simboloAleatorio];
//   }
//   return newSimbolos;
// }

function App() {
  return (
    <div>
      <KeyGenerator />  
    </div>
  );
}

export default App;
