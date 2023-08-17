


document.getElementById('btn-withdraw').addEventListener('click',function(){
  const withdrawField = document.getElementById('withdraw-field')
  const newWithDrawAmountString = withdrawField.value
  const newWithDrawAmount = parseFloat(newWithDrawAmountString);
  

  const withdrawTotalElement = document.getElementById('withdraw-total');
  const previousWithdrawTotalSrting = withdrawTotalElement.innerText;
  const previousWithdrawTotal = parseFloat(previousWithdrawTotalSrting);
  const currentWithdrawTotal = previousWithdrawTotal + newWithDrawAmount;
  withdrawTotalElement.innerText = currentWithdrawTotal;

  const balanceTotalElement = document.getElementById('balance-total');
  const previousBalanceTotalString = balanceTotalElement.innerText;
  const previousBalanceTotal = parseFloat(previousBalanceTotalString);

  const newBalanceTotal = previousBalanceTotal - newWithDrawAmount;
  balanceTotalElement.innerText = newBalanceTotal;
  console.log(previousBalanceTotal);


  withdrawField.value = '';
})