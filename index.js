
const boton = document.getElementById( 'llamamos' )
boton.onclick = function() { 
      Swal.fire({
            title: 'Error!',
            text: 'Do you want to continue',
            icon: 'error',
            confirmButtonText: 'Cool'
      })
};

const tickets = document.getElementById( "tickets" )
let numero_tickets = parseInt( tickets.innerHTML )

const expertos = document.getElementById( "expertos" )
let numero_expertos = parseInt( expertos.innerHTML )

const endpoints = document.getElementById( "endpoints" )
let numero_endpoints = parseInt( endpoints.innerHTML )

const aumentarNumero = ( elemento, valor_inicial,valor_final,cantidad ) => {    
      var id = setInterval(function(){
            elemento.innerHTML = valor_inicial;
            
            if(valor_inicial == valor_final) 
            {
                clearInterval(id);
            }else{
                  valor_inicial++;
            }

      }, cantidad); 
}

let indicador  = 0

window.onscroll = function (){  
      // En la variable scroll se almacena la posición cada vez que se mueve el scroll
      var scroll = document.documentElement.scrollTop || document.body.scrollTop;
  
      // Con este código puedes hacer que algo suceda entre la posición 300 y 400
      if(scroll > 1400 && scroll < 1500){
          console.log("Pasaste la posicion 1400 del scroll");
          if( indicador == 0 ){
            aumentarNumero(tickets,numero_tickets,1510,8)
            aumentarNumero(expertos,numero_expertos,2,1000)
            aumentarNumero(endpoints,numero_endpoints,400,30)
            indicador++
          }
      }
  }


ScrollReveal({ distance: '600px' });
ScrollReveal().reveal('.servicio_1', { origin: 'left',duration:3000 });
ScrollReveal().reveal('.servicio_2', { origin: 'top',duration:3000 });
ScrollReveal().reveal('.servicio_3', { origin: 'rigth',duration:3000 });
ScrollReveal().reveal('.servicio_4', { origin: 'left',scale:0,duration:2000 });
ScrollReveal().reveal('.servicio_5', { scale:0,delay:800,duration:2000 });
ScrollReveal().reveal('.servicio_6', { origin: 'rigth',scale:0,delay:1600,duration:2000 });
ScrollReveal().reveal('.servicio_7', { origin: 'left',scale:0,delay:2400,duration:2000 });
ScrollReveal().reveal('.servicio_8', { scale:0,delay:3200,duration:2000 });
ScrollReveal().reveal('.servicio_9', { origin: 'rigth',scale:0,delay:4000,duration:2000 });
ScrollReveal().reveal('.certificados',{opacity:0,duration:4000})

ScrollReveal().reveal('#about',{opacity:0,duration:4000})
ScrollReveal().reveal('.texto_contact',{opacity:0,duration:4000})

// const alerta = () =>{
//       Swal.fire({
//             title: 'Error!',
//             text: 'Do you want to continue',
//             icon: 'error',
//             confirmButtonText: 'Cool'
//           })
// }




