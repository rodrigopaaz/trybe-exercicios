let matriz = document.getElementsByTagName('h1')[0].parentElement

botaoCor = document.getElementById('changeBackground')
botaoCor.addEventListener('click', function (){
   matriz.style.background = 'red' 
})

botaoTextColor = document.getElementById('changeTextColor"')
botaoTextColor.addEventListener('click', function (){
    matriz.style.color = 'blue' 
 })


botaochangeText= document.getElementById('changeText')
botaochangeText.addEventListener('click', function (){
    matriz.style.background = 'red' 
 })
botaochangeSpace = document.getElementById('changeSpace')
botaochangeSpace.addEventListener('click', function (){
    matriz.style.background = 'red' 
 })
botaochangeFont= document.getElementById('changeFont')
botaochangeFont.addEventListener('click', function (){
    matriz.style.background = 'red' 
 })

{/* <button id="changeBackground">Mudar Cor de fundo da tela</button>
<button id="changeTextColor">Mudar Cor do texto</button>
<button id="changeText">Tamanho da fonte</button>
<button id="changeSpace">Espaçamento entre as linhas do texto</button>
<button id="changeFont">Tipo da fonte (Font family)</button>
<script src="script.js"></script> */}