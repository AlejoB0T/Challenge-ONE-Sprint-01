function encriptarDesencriptarTexto(texto,expresion1,expresion2){ //recibe como parámetro los dos arrays que creados con vocales y reemplazos
    //transforma cada elemento del array1 (sea cual sea) en una RegExp
    for ( let i = 0 ; i < expresion1.length && i < expresion2.length ; i++){
     expresion1[i] = new RegExp (expresion1[i],'g')
     texto = texto.replace (expresion1[i],expresion2[i]); //busca en el texto cada elemento de la expresion1 y lo reemplazo por la expresion 2
     //guardandolo siempre dentro del mismo texto ingresado como parámetro
    }

    return texto; //la salida es mi texto que puede estar codificado o decodificado
}