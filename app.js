let inputAv1 =  document.getElementById('Av1');
let inputAv2 = document.getElementById('Av2');
let inputAvd =  document.getElementById('Avd');

const result = document.getElementById('result');
const space = document.getElementById('space');



function calc(){

   let av1 = parseFloat(inputAv1.value);
   let av2 = parseFloat(inputAv2.value);
   let avd = parseFloat(inputAvd.value);

   console.log(av1, av2, avd);
  
   let sum = (av1 + av2 + avd)/3;  

   console.log(sum);

   let round = Math.round(sum*100)/100 - 0.01;

   console.log(round);


      if(sum <= 6){

         result.innerHTML = `  <p>Sua nota na Av1 é  ${av1}</p>
                                 <p>Sua nota na Av2 é  ${av2}</p>
                                    <p>Sua nota na Avd é  ${avd}</p>
                                       <p>Total:  ${round}</p>`

         result.innerHTML +=`<p style="color: rgb(224, 0, 0)">Você esta reprovado</p>`
         
      }else if(sum >6){
         result.innerHTML = `  <p>Sua nota na Av1 é  ${av1}</p>
                                 <p>Sua nota na Av2 é  ${av2}</p>
                                    <p>Sua nota na Avd é  ${avd}</p>
                                       <p>Total:  ${round}</p>`

         result.innerHTML +=`<p style="color: rgb(35, 212, 0);">Você esta aprovado</p>`
      }else{                    
         result.innerHTML +=`<p style="color: rgb(555, 212, 0);"> Err 202 ? Chame o suport</p>` 
      }
   
   

}
