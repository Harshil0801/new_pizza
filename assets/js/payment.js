// You can add your JavaScript code here
document.getElementById('paymentForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevents the default form submission
    
    // You can add form validation or payment processing logic here
    // For example:
    const cardNumber = document.getElementById('cardNumber').value;
    const expiryDate = document.getElementById('expiryDate').value;
    const cvv = document.getElementById('cvv').value;
    const cardHolderName = document.getElementById('cardHolderName').value;
    
    // Perform validation checks and process the payment
  });
  