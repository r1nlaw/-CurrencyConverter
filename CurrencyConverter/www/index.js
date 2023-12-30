function convert(){

    let input_value = document.getElementById('inputAmount').value
        
    let choose_currency_from = document.getElementById('inputCurrency').value

    let choose_currency_to = document.getElementById('outputCurrency').value

    fetch('http://localhost:8080/convert/'+choose_currency_from+"/"+choose_currency_to+"/"+input_value)

        .then(response => response.json())
        .then(course => { console.log(course)

            console.log(course);
            
       
        let OutputEllement = document.getElementById('outputAmount');
    
        OutputEllement.value = course.result;
    });
        

        
  
}