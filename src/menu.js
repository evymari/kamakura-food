//DEBE imprimir en pantalla la información de filtros.

import { products, filters} from "../src/assets/data/data.js"
  function printPlates(products){
    let result = products.map(item => item.products);
   
  console.log(result);
  return result;
};


window.onload = function () {
  printPlates();
};


//DEBE imprimir en pantalla los productos, con su Título, descripción y precio en € y botón de añadir.