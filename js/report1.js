var $_GET = $_GET(),
    apiKey = $_GET['apikey'],
    token = $_GET['token'],
    server = $_GET['server'],
    title2 = $_GET['title'],
    startDate = $_GET['startDate'],
    startDate2 = "&startDate=" + startDate
    endDate = $_GET['endDate']
    endDate2 = "&endStart=" + endDate
    console.log(startDate)
    console.log(endDate)
    if (startDate == "" && endDate == "") {
        startDate2 = "";
        endDate2 = ""
    }
    if (title2 == 'undefined') {
        title2 = ""
    }
    function $_GET(param) {

        var vars = {};
        window.location.href.replace( location.hash, '' ).replace( 
            /[?&]+([^=&]+)=?([^&]*)?/gi, // regexp
            function( m, key, value ) { // callback
                vars[key] = value !== undefined ? value : '';
            }
        );
    
        if ( param ) {
            return vars[param] ? vars[param] : null;	
        }
        return vars;
    }

function report1() {
    var xhr = new XMLHttpRequest();
    var url = "https://"+ server+".agendize.com/api/2.0/reporting/full?apikey=" + apiKey + "&token=" + token + startDate2 + endDate2;
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json)

            document.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='style.css'><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins&display=swap' rel='stylesheet'><link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'><script src='https://code.jquery.com/jquery-3.5.1.min.js' integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=' crossorigin='anonymous'></script><title>Reseller|full report</title><link rel='stylesheet' href='style.css'></head><body><div id='divLogo'><img id='logo' src='https://developers.agendize.com/shared/img/logoaz.png' alt=''></div><div class='violet'><h1>" + title2 +"  </h1><h1>" + startDate + " - " + endDate + "</h1></div><div id='table'><table id=example><thead><tr style='color:black;font-weight:bold;background-color:#9370CB;'><th>ID</th><th>owner</th><th>login</th><th>Email notifications sent</th><th>Finished appointment</th><th>New appointments</th><th>Text message notifications sent</th><th>SMS sent count</th><th>Marketing email sent</th><th>Marketing text message sent</th><th>New clients</th><th>Form</th><th>API</th><th>Call tracking duration</th><th>Call tracking numbers</th><th>Click to Call duration</th><th>Click to call buttons</th></tr></thead>");
            document.write("<tbody>");
            odd = false;
            
                    document.write("<tr");
                    if (odd) {      
                            document.write(' style="background-color:#eee;"');
                    }
                    odd = !odd;
                    document.write(">");
                    document.write("<td>" + json.owner.id  + "</td>");
                    document.write("<td>" + json.owner.userName +"</td>");
                    document.write("<td>" + json.login.count + "</td>");
                    document.write("<td>" + json.scheduling.emailNotificationsSent + "<td>");
                    document.write("<td>" + json.scheduling.finishedAppointments + "</td>");
                    document.write("<td>" + json.scheduling.newAppointments + "<td>");
                    document.write("<td>" + json.scheduling.textMessageNotificationsSent + "</td>");
                    document.write("<td>"+ json.smsSentCount + "</td>");
                    document.write("<td>" + json.crm.marketingEmailSent + "</td>");
                    document.write("<td>" + json.crm.marketingTextMessageSent + "<td>");
                    document.write("<td>" + json.crm.newClients + "</td>");
                    document.write("<td>" + json.formFilled + "</td>");
                    document.write("<td>" + json.api.requests + "</td>");
                    document.write("<td>Duration : " + json.callTracking.duration + "<br>Numbers : " + json.callTracking.numbers + "</td>");
                    document.write("<td>Duration : " + json.clickToCall.duration + "<br>Buttons : " + json.clickToCall.buttons + "</td>");
            
        }
};
xhr.send();
}

report1(apiKey,token,server,startDate,endDate);