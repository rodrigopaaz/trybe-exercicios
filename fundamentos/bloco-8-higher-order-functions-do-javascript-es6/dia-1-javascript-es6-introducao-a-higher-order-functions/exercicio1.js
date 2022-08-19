/* //Exercicio 1

const newEmployees = () => {
    const employees = {
      id1: cadastro('Pedro Guerra', 'pedro@trybe.com'),
      id2: cadastro('Luiza Drumond', 'luiza@trybe.com'),
      id3: cadastro('Carla Paiva', 'carla@trybe.com'),
    }
    return employees;
  };
 
  const cadastro = (nomeCompleto, Email) => {
    return {nome: nomeCompleto,
    email: Email,}
};

console.log(newEmployees());
 */

// Exercicio 2

/* const sorteio = (numeroApostado) => {
    const numeroGanhador = cadastro();
    if (numeroApostado === numeroGanhador)
    {return `O numero sorteado foi ${numeroGanhador} Parabéns você ganhou`}
    else {return `O numero sorteado foi ${numeroGanhador} Tente novamente`}
    }
 
  const cadastro = () => {
    const numeroSorteado = Math.floor((Math.random()*4)+1)
    return numeroSorteado
};

console.log(sorteio(1)); */

const gabarito = (respostas) => {
    let pontuacao = 0;
    const resposta = respostasAluno();
    for (let i in resposta){
        if(respostas[i] === resposta[i]){
            pontuacao += 1}
        }
        return pontuacao
    }
 
  const respostasAluno = () => {
    const questoes = ['A' ,'B' ,'C' ,'D' ,'A', 'D', 'B', 'C', 'A', 'B']
    return questoes
};

console.log(gabarito(['D' ,'B' ,'A' ,'B' ,'A', 'D', 'A', 'C', 'A', 'B']));
