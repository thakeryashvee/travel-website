document.getElementById('booking-form').addEventListener('submit', function(e) {
    e.preventDefault(); // ફોર્મ સબમિટ થતું અટકાવો

    // યુઝરે ભરેલી વિગતો મેળવો
    let destination = document.getElementById('destination').value;
    let guests = document.getElementById('guests').value;
    let arrivals = document.getElementById('arrivals').value;
    let leaving = document.getElementById('leaving').value;

    let myEmail = "thakerdevdutt@gmail.com"; 
    let subject = "New Booking Request for " + destination;
    
    // બોડી મેસેજ તૈયાર કરો
    let body = "Destination: " + destination + "\n" +
               "Guests: " + guests + "\n" +
               "Arrival Date: " + arrivals + "\n" +
               "Leaving Date: " + leaving;

    // Gmail ની લિંક તૈયાર કરો
    let gmailUrl = "https://mail.google.com/mail/?view=cm&fs=1&to=" + encodeURIComponent(myEmail) + 
                   "&su=" + encodeURIComponent(subject) + 
                   "&body=" + encodeURIComponent(body);

    // આ રીતે ઓપન કરો
    window.open(gmailUrl, '_blank');
});