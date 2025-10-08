
document.addEventListener('DOMContentLoaded', function() {
    

    var paymentForm = document.getElementById('paymentForm');
    
    if (paymentForm) {
        paymentForm.addEventListener('submit', function(e) {
            var cardNumber = document.getElementById('card_number').value;
            var cvv = document.getElementById('cvv').value;
            var expiry = document.getElementById('expiry').value;
            
            if (cardNumber.length != 16 || isNaN(cardNumber)) {
                alert('Please enter a valid 16-digit card number');
                e.preventDefault();
                return false;
            }
            
            if (cvv.length != 3 || isNaN(cvv)) {
                alert('Please enter a valid 3-digit CVV');
                e.preventDefault();
                return false;
            }
            
            var expiryPattern = /^(0[1-9]|1[0-2])\/\d{2}$/;
            if (!expiryPattern.test(expiry)) {
                alert('Please enter expiry date in MM/YY format');
                e.preventDefault();
                return false;
            }
            
            return true;
        });
        
        var cardNumberInput = document.getElementById('card_number');
        if (cardNumberInput) {
            cardNumberInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/\D/g, '');
            });
        }
        
        var cvvInput = document.getElementById('cvv');
        if (cvvInput) {
            cvvInput.addEventListener('input', function(e) {
                this.value = this.value.replace(/\D/g, '');
            });
        }
        
        var expiryInput = document.getElementById('expiry');
        if (expiryInput) {
            expiryInput.addEventListener('input', function(e) {
                var value = this.value.replace(/\D/g, '');
                
                if (value.length >= 2) {
                    this.value = value.substring(0, 2) + '/' + value.substring(2, 4);
                } else {
                    this.value = value;
                }
            });
        }
    }
});
