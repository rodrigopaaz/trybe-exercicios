const a = 10;
const b= 20;
let lucro = 0;
lucro = (b - (a*1.20)) * 1000;

if (a < 0 || b < 0) {
    
    console.log ('Valor de Entrada Inválido!')
    return
}
    else {
    console.log ('A Empresa Obteve um Lucro de:',lucro)
}