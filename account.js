let deposit = document.getElementById('Deposit');
const withdraw = document.getElementById('Withdraw');
const balance = document.getElementById('Balance');
const depositInput = document.getElementById('Deposit-input');
const returne = document.getElementById('returne');
const depositButton = document.getElementById('Deposit-button');
const  withdrawInput = document.getElementById('Withdraw-input');
const withdrawButton = document.getElementById('Withdraw-button');
const returne2 = document.getElementById('returne2');
// =====Deposit====

depositButton.addEventListener('click',function(e){
    let depositNew = 0;
    let balanceNew = parseFloat(balance.innerText)
    let depositValue =depositInput.value;
    if((depositValue === '') || isNaN(depositValue)){
     returne.innerText = "Please Deposit A dollar"
     returne.style.color="red";
     returne.style.marginBottom = "10px"
    }
    else if (depositValue<0){
        returne.innerText = "Please Deposit Geterr Than 0 Dollar  "
        returne.style.color="red";
        returne.style.marginBottom = "10px"
    }
    else{
        depositNew = parseFloat(deposit.innerText);
        deposit.innerText = depositNew + parseFloat(depositValue);
         balance.innerText = balanceNew + parseFloat(depositValue);
         depositInput.value = '';
         
    }
})
// === withdraw====
withdrawButton.addEventListener('click',function(e){
    let balanceNew2 = parseFloat(balance.innerText)
    if((withdrawInput.value === '') || isNaN(withdrawInput.value)){
        returne2.innerText = "Please Withdraw Geterr a Dollar"
        returne2.style.color="red";
        returne2.style.marginBottom = "10px"
       }
       else if(withdrawInput.value<0){
        returne2.innerText = "Please Withdraw Geterr Than 0 Dollar"
        returne2.style.color="red";
        returne2.style.marginBottom = "10px"
       }
       else if(withdrawInput.value>balanceNew2){
        returne2.innerText = "Not Available Balance Your Account"
        returne2.style.color="red";
        returne2.style.marginBottom = "10px"
       }
       else{
           withdraw.innerText = withdrawInput.value;
           console.log(parseFloat(withdrawInput.value))
           balance.innerText = balanceNew2 - parseFloat(withdrawInput.value);
           withdrawInput.value = '';
       }
})
