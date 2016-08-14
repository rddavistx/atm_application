//Begin with the document ready function
$(document).ready(function() {

  //Checking account deposit function
  //On click of the depositChecking button
  //Get value from the amountChecking input field
  //Take that value and add it to the existing value in the checkingBalance div





  $('#depositChecking').on('click', function() {
    var currentBalance = parseInt($('#checkingBalance').text())
    // console.log(currentBalance);
    var value = parseInt($('#amountChecking').val());
    // console.log(value);
    var newBalance = currentBalance + value;
    $('#checkingBalance').text(newBalance);
    console.log(newBalance);

    if (newBalance > 0) {
      $('#checkingBalance').removeClass('zero')
    }


  });

  //Checking account withdrawl funtion
  //On click of the withdrawChecking button
  //Get value from the amountChecking input field
  // If that value is greater than the value in the account ignore that action
  // In other words if this would put the account into a negative balance do not allow it
  //Else subtract that value from the current amount in the checking account
  $('#withdrawChecking').on('click', function() {
    var currentBalance = parseInt($('#checkingBalance').text())
    var value = parseInt($('#amountChecking').val());
    if (value > currentBalance) {
      $('#withdrawChecking').click(function(event) {
        event.preventDefault();
      })
    } else {
      var newBalance = currentBalance - value;
      $('#checkingBalance').text(newBalance);
    }
    if (newBalance === 0) {
      $('#checkingBalance').addClass('zero')
    }



  })


  //Savings account deposit function
  //On click of the depositSavings button
  //Get value from the amountSavings input field
  //Take that value and add it to the existing value in the savingsBalance div
  //Savings account withdraw funtion
  //On click of the withdrawl button
  //Get value from the amountSavings input field
  //If that value is greater than the value in the account ignore that action
  //In other words if this would put the account into a negative balance do not allow it
  //Else subtract that value from the current amount in the savings account
  $('#depositSavings').on('click', function() {
    var currentBalance = parseInt($('#savingsBalance').text())
    var value = parseInt($('#amountSavings').val());
    var newBalance = currentBalance + value;
    $('#savingsBalance').text(newBalance);

    if (newBalance > 0) {
      $('#savingsBalance').removeClass('zero')
    }
  });

  $('#withdrawSavings').on('click', function() {
    var currentBalance = parseInt($('#savingsBalance').text())
    var value = parseInt($('#amountSavings').val());
    if (value > currentBalance) {
      $('#withdrawSavings').click(function(event) {
        event.preventDefault();
      })
    } else {
      var newBalance = currentBalance - value;
      $('#savingsBalance').text(newBalance);
    }
    if (newBalance === 0) {
      $('#savingsBalance').addClass('zero')
    }
  })




  // Bonus-- get the two accounts to work with each other and allow for overdraft protection

  // Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
})
