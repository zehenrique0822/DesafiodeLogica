const matriz = [];
let size = '';
let hourglasSize = '';

function validateSize(){
    let hourglasSize = prompt("Digite o tamanho da ampulheta");
    if(hourglasSize >= 20) {
        size = hourglasSize;
    } else {
        alert("Tamanho deve ser maior ou igual a 20")
        validateSize();
    }
}

validateSize();

function insert(size) {
    let sub = [];
    for (let i = 1; i <= size; i++) {        
            sub.push('  ');   
    }
    matriz.push(sub);    
}

for (let i = 1; i <= size; i++) {   
        insert(size);   
}

for(lin=0;lin<size;lin++) {
    for(col=0;col<size;col++)
    {
        if((col>=lin) && (lin<size-col)){ // Parte de Cima
            matriz[lin][col]='##';  
        }            
        if(lin + col == size -1 ){ // Vertical 1
            matriz[lin][col]='##';          
        }
        if(lin === col){ // Vertical 2
            matriz[lin][col]='##';
        }
        if(col >= 0 && lin == size -1){ // Borda inferior
            matriz[lin][col]='##';
        }
        if(col <= 0 && lin >= 0){ // Lateral esquerda
            matriz[lin][col]='#';
        }
        if(col == size-1 && lin >= 0) // Lateral direita
            matriz[lin][col]='#';
    }
}

let retorno = '';
retorno += matriz.map(function(it){
      return it.join(',').replace(/,/g, '') + `\n`;
})

   console.log(retorno.replace(/,/g,''));

