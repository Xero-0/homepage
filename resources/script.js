window.onload = () => {
    getDate();
}
function getDate() {
    var currentHour = moment().format('HH');
    // var currentHour = 21 //TEST

    if (currentHour <= 7) {
        //RED     
            // from: 0 to 
            // 7Am
        var timeColor = '#e74c3c'
    }
    else if (currentHour <= 12 && currentHour > 7) {
        //ORANGE  
            // from: 7AM   
            // To: 12pm      
        timeColor = '#e67e22'
    }
    else if (currentHour <= 15 && currentHour > 12) {
        //BLUE    
            // from: 12pm  
            // To:  3pm
        timeColor = '#3498db'
    }
    else if (currentHour <= 20 && currentHour > 15) {
        //GREEN   
            // from: 3pm    
            // To:  8pm
        timeColor = '#2ecc71'
    }
    else if (currentHour <= 24 && currentHour > 20) {
        //PURLPE  
            // from: 8pm    
            // To: midnight     
        timeColor = '#9b59b6'
    }

    document.getElementById('time').style.color = timeColor

    document.getElementById("time").innerHTML = moment().format('hh:mm:ss A');
    document.getElementById("day").innerHTML = moment().format('dddd');
    document.getElementById("date").innerHTML = moment().format('Do MMMM YYYY');

}

window.setInterval(function () {
    getDate();
}, 1000);