console.log('JS OK!');


const messageHTMLElement =  document.getElementById('TicketPrice');

const calcButton = document.getElementById('calc-button');


calcButton.addEventListener('click', function(event){
    
    const inputKmHTMLElement = document.getElementById('input-km');
    
    const km = parseInt(inputKmHTMLElement.value);

    
    const inputAgeHTMLElement = document.getElementById('input-age');
    
    const selectAgeValue = inputAgeHTMLElement.value;

    let discountPercent;


    switch (selectAgeValue){
        case 'under':{
            discountPercent = 20;
            break;
        }
        case 'over':{
            discountPercent = 40;
            break;
        }
        default:{
            discountPercent = 0;
        }
    }

 
    if (!isNaN(km)){
       
        let Price = km * 0.21;

        const discount = Price / 100 * discountPercent
 
        Price -= discount;

        
        const TicketPrice = '<p> Ticket price is ' + Price.toFixed(2) + ' euro . </p>';
        
        messageHTMLElement.innerHTML = TicketPrice;
    }else{
        messageHTMLElement.innerHTML = 'Something is wrong there...refresh and retry';
    }


})

