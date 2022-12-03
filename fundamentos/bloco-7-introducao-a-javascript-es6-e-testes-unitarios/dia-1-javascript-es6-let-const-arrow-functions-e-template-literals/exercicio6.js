const changeName = name =>{ 
let prhase = `Tryber x aqui`
let newPrhase = prhase.replace(/x/g, name);
return newPrhase 
}

const nameRetun = changeName('Rodrigo')
const skill = ['JavaScript', 'Html', 'CSS']

const minhasSkills = (skills, nameRetuns)  => {
return `${nameRetuns} 
Minhas três principais habilidades são:
${skill[0]}
${skill[1]}
${skill[2]}`
}

console.log(minhasSkills(skill, nameRetun));