let matriz = document.getElementsByTagName('h1')[0].parentElement
//Parte 1
changeColor = document.getElementById('corDeFundo')
changeColor.addEventListener('submit', function (){
    const colorInput = document.querySelector('#changeBackground')
    sessionStorage.setItem('CorFundo', colorInput.value)
    //sessionStorage.setItem('background',JSON.stringify(changeBackground)) */
})
matriz.style.background = sessionStorage.CorFundo




botaoTextColor = document.getElementById('changeTextColor')
botaoTextColor.addEventListener('click', function (){
    if(matriz.style.color == 'blue'){matriz.style.color ='green'} 
    else {matriz.style.color ='blue'} 
 })


botaochangeText= document.getElementById('changeText')
botaochangeText.addEventListener('click', function (){
    if(matriz.style.fontSize == '16px'){matriz.style.fontSize ='30px'} 
    else {matriz.style.fontSize ='16px'} 
 })
botaochangeSpace = document.getElementById('changeSpace')
botaochangeSpace.addEventListener('click', function (){
    if(matriz.style.wordSpacing == '10px'){matriz.style.wordSpacing ='15px'} 
    else {matriz.style.wordSpacing ='10px'} 
 })
botaochangeFont= document.getElementById('changeFont')
botaochangeFont.addEventListener('click', function (){
    if(matriz.style.fontFamily == 'Courier'){matriz.style.fontFamily = 'sans-serif'} 
    else {matriz.style.fontFamily = 'Courier'} 
 })

{/* <button id="changeBackground">Mudar Cor de fundo da tela</button>
<button id="changeTextColor">Mudar Cor do texto</button>
<button id="changeText">Tamanho da fonte</button>
<button id="changeSpace">Espaçamento entre as linhas do texto</button>
<button id="changeFont">Tipo da fonte (Font family)</button>
<script src="script.js"></script> */}