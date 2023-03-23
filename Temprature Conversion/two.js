const inputData = document.querySelector("input");
const formData = document.querySelector("form");




// For Celcius

const celTofr = (cel) =>{
   const fr = (cel * 9/5) + 32;
   return fr ;
}

const celToKr = (cel) =>{
    const Kr = (cel * 1) + 273.15;
    return Kr ;
}

// For Kelvin


const keTocel = (kel)=>{
    const Ce = kel - 273;
    return Ce;
}
const keTofar = (kel)=>{
   const far =  ((kel-273) * 9/5 + 32);
   return far;
}

//for far

const FarTocel = (far)=>{
 const cel = (far - 32) * 5/9;
 return cel;
}

const FarToke = (far)=>{
   const ke = (far - 32) * 5/9 + 273;
   return ke;
}
formData.addEventListener(
    "submit",
    function(e){
        e.preventDefault();
        a(inputData.value);

        if(inputData.value ==  ""){
           alert("No")
        }
        


      
    }
    
)

const a = (e) => {


    const deger = document.querySelector("#deg");

    const equal = deger.options[deger.selectedIndex].value;
 
    if (equal == 'cel') {
     const  answer = celTofr(e);
    //  console.log(answer + " Far") ;

     const answer2 = celToKr(e);
      console.log(answer2 + " Ke");

     document.querySelector("#result").innerHTML = 
     `<div id="result">
     ${answer} Far
     </div>
    <div id="result2"> ${answer2} Kelvin </div>`


    }
   else if (equal == 'Ke') {
        
    const  answer = keTocel(e);
    const answer2 = keTofar(e);
    //  console.log(answer + " Far") ;

  
    //   console.log(answer2 + " Ke");

    document.querySelector("#result").innerHTML = 
     `<div id="result">
     ${answer} Cel
     </div>
   <div id="result2"> ${answer2} Far </div>`   
    }
    else  {
        const  answer = FarTocel(e);
        const answer2 = FarToke(e);
        document.querySelector("#result").innerHTML = 
        `<div id="result">
        ${answer} Cel
        </div>
      <div id="result2"> ${answer2} Kelvin </div>`

    }


}

