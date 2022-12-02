let salarioBruto = 3000.00;
let salarioLiquido = 0;
let salarioBase = 0;
let impostoDeRenda = 0;
let aliquotaImpostoDeRenda = 0;
let aliquotaINSS = 0;
let parcelaDoIR = 0;


if (salarioBruto<=1556.94) {aliquotaINSS = 0.08}
else if (salarioBruto>=1556.95 && salarioBruto <=2594.92) {aliquotaINSS=0.09}
else if (salarioBruto>=2594.93 && salarioBruto <=5189.82) {aliquotaINSS=0.11}
else {aliquotaINSS = 570.88/salarioBruto};

salarioBase = salarioBruto-(salarioBruto * aliquotaINSS);

if (salarioBase<=1903.98) {aliquotaImpostoDeRenda=0}
else if  (salarioBase>=1903.99 && salarioBase <= 2826.65) {aliquotaImpostoDeRenda=0.075, parcelaDoIR=142.80} 
else if  (salarioBase>=2826.66&& salarioBase <= 3751.05) {aliquotaImpostoDeRenda=0.15, parcelaDoIR=354.80}
else if  (salarioBase>=3751.06 && salarioBase <= 4664.68) {aliquotaImpostoDeRenda=0.225, parcelaDoIR=636.13}
else {aliquotaImpostoDeRenda=0.275, parcelaDoIR=869.36}

impostoDeRenda = (salarioBase * aliquotaImpostoDeRenda) - parcelaDoIR;
salarioLiquido = salarioBase - impostoDeRenda;
console.log('O Salário Líquido é:', salarioLiquido);

