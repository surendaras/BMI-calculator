const form=document.querySelector('form');

// const height=parseInt(document.querySelector('#height').value)
// this use case give empty value.

form.addEventListener('submit',function(e){
  e.preventDefault()
  const height=parseInt(document.querySelector('#height').value)
  const weight=parseInt(document.querySelector('#weight').value)
  const results=(document.querySelector('#results'))
  if(height === '' || height<0 || isNaN(height)){
    results.innerHTML=`pls give a valid height ${height}`;
  }
  else if(weight === '' || weight<0 || isNaN(weight)){
    results.innerHTML=`pls give a valid weight ${weight}`;
  }
  else {
    const bmi=(weight/((height*height)/10000)).toFixed(2);
    let message = "";
    
    // show the result
    // const message=
    if(bmi<18.5){
      message="you are underweight";
    }
    else if(bmi>=18.5 && bmi<24.5 ){
      message="you are Normalweight";
    }
    else if(bmi>=24.5 && bmi<29.5){
      message="you are Overweight";
    }
    else {
      message="you are Obese";
    }
    results.innerHTML=` your bmi is ${ bmi} and  ${message}`;
  }
});
