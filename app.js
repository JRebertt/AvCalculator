let inputAv1 =  document.getElementById('Av1');
let inputAv2 = document.getElementById('Av2');
let inputAvd =  document.getElementById('Avd');

const result = document.getElementById('resultado');
const space = document.getElementById('space');


//Tratando inputs
function onlynumber(evt) {
   var theEvent = evt || window.event;
   var key = theEvent.keyCode || theEvent.which;
   key = String.fromCharCode( key );
   //var regex = /^[0-9.,]+$/;
   var regex = /^[0-9.]+$/;
   if( !regex.test(key) ) {
      theEvent.returnValue = false;
      if(theEvent.preventDefault) theEvent.preventDefault();
   }
}



function calc(){

   let av1 = parseFloat(inputAv1.value);
   let av2 = parseFloat(inputAv2.value);
   let avd = parseFloat(inputAvd.value);

   console.log(av1, av2, avd);
  
   let sum = (av1 + av2 + avd)/3;  

   console.log(sum);

   let round = Math.round(sum*100)/100;

   console.log(round);


      if(sum <= 6 ){

         result.innerHTML = `  <p>Sua nota na Av1 é  ${av1}</p>
                                 <p>Sua nota na Av2 é  ${av2}</p>
                                    <p>Sua nota na Avd é  ${avd}</p>
                                       <p>Total:  ${round}</p>`

         result.innerHTML +=`<p class="text-danger">Você esta reprovado</p>`
         
      }else if(sum >= 4){
         result.innerHTML = `  <p>Sua nota na Av1 é  ${av1}</p>
                                 <p>Sua nota na Av2 é  ${av2}</p>
                                    <p>Sua nota na Avd é  ${avd}</p>
                                       <p>Total:  ${round}</p>`

         result.innerHTML +=`<p class="text-success">Você esta aprovado</p>`
      }else{                    
         result.innerHTML +=`<p class="text-warning"> Err 202 ? Chame o suport</p>` 
      }
   
   

}
