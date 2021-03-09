var $_GET = $_GET(),
    apiKey = $_GET['apikey'],
    token = $_GET['token'],
    server = $_GET['server'],
    title2 = $_GET['title']
    console.log(apiKey)
    console.log(server)

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


function succursale1() {
    

    var xhr = new XMLHttpRequest();
    var url = "https://"+ server+".agendize.com/api/2.1/scheduling/companies?apikey=" + apiKey + "&token=" + token;
    xhr.open("GET", url, true);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json)
            document.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='style.css'><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins&display=swap' rel='stylesheet'><link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'><script src='https://code.jquery.com/jquery-3.5.1.min.js' integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=' crossorigin='anonymous'></script><title>All|companies</title><link rel='stylesheet' href='style.css'></head><body><div id='divLogo'><img id='logo' src='https://developers.agendize.com/shared/img/logoaz.png' alt=''></div><div class='violet'><h1>" + title2 +"  </h1></div><div id='table'><table><tr style='color:black;font-weight:bold;background-color:#9370CB;'><td>Succursales (widget)</td><td>Adresses</td><td>Horaires</td><td>Vacances</td></tr>");
            document.write("<tbody>");
            odd = false;
            for (i = 0; i < json.items.length; i++) {
                    document.write("<tr");
                    if (odd) {      
                            document.write(' style="background-color:#eee;"');
                    }
                    odd = !odd;
                    document.write(">");
                    document.write("<td>" + json.items[i].name + " (<a href='https://"+ server+".agendize.com/book/" + json.items[i].id + "' target='new'>widget</a>)</td>");
                    document.write("<td>" + json.items[i].address.street + " " + json.items[i].address.zipCode + " " + json.items[i].address.city + "</td>");
                    document.write("<td>");
                    if (json.items[i].workingHours != undefined) {
                            for (j = 0; j < json.items[i].workingHours.length; j++) {
                                    for (k = 0; k < json.items[i].workingHours[j].hours.length; k++) {
                                            document.write(json.items[i].workingHours[j].day + ": " + json.items[i].workingHours[j].hours[k].start + " - " + json.items[i].workingHours[j].hours[k].end + "<br/>");
                                    }
                            }
                    }
                    document.write("</td>");
                    document.write("<td>");
                    if (json.items[i].vacations != undefined) {
                            for (j = 0; j < json.items[i].vacations.length; j++) {
                                    document.write(json.items[i].vacations[j].startDate + " - " + json.items[i].vacations[j].endDate + "<br/>");
                            }
                    }
                    document.write("</td>");
                    document.write("</tr>");
            }
            document.write("</tbody>");
            document.write("</table>");
        }
};
xhr.send();
}

succursale1(apiKey,token,server);
