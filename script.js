document.getElementById('payBtn').onclick = function () {
    var options = {
        "key": "YOUR_RAZORPAY_KEY",
        "amount": "50000",
        "currency": "INR",
        "name": "Udaan Care",
        "description": "Appointment Booking",
        "handler": function (response){
            alert("Payment Successful!");
            window.location.href = "thankyou.html";
        }
    };
    var rzp = new Razorpay(options);
    rzp.open();
};
