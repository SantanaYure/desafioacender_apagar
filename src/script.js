let sound = new Howl({
   src: ['../public/Dragon Ball Super OST Migatte no Gokui Theme.mp3'],
   volume: 1.0,
   onend: function () {
     alert('We finished with the setup!');
   }
 });

document.getElementById('btn-power').addEventListener('click', () => {
   let status_lampada_On_Off = document.getElementById('img-lampada')
   
    

   if(status_lampada_On_Off.alt === 'lampada apagada'){
    document.getElementById('img-lampada').alt = "lampada acesa"
    document.getElementById('img-lampada').src = "../public/acesa.png"
    document.getElementById('btn-power').innerHTML = "<button >Destransformar</button>"
    sound.play()
   } else {
    document.getElementById('img-lampada').alt = "lampada apagada"
    document.getElementById('img-lampada').src = "../public/apagada.png"
    document.getElementById('btn-power').innerHTML = "<button>Ativar Instinto Superior</button>"
    sound.stop()
   }


})
