var $_GET = $_GET(),
    apiKey = $_GET['apikey'],
    token = $_GET['token'],
    server = $_GET['server'],
    idCompany = $_GET['idCompany'],
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
function appointement1() {
    trieDef = []
    var xhr = new XMLHttpRequest();
    var url = "https://"+ server+".agendize.com/api/2.1/scheduling/companies/"+ idCompany +"/appointments?apikey=" + apiKey + "&token=" + token;
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            
            title = json.items[0].company.name
            document.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='style.css'><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins&display=swap' rel='stylesheet'><link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'><script src='https://code.jquery.com/jquery-3.5.1.min.js' integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=' crossorigin='anonymous'></script><title>Appointments</title><link rel='stylesheet' href='style.css'></head><body><div id='divLogo'><img id='logo' src='https://developers.agendize.com/shared/img/logoaz.png' alt=''></div><div class='violet'><h1>" + title +"  </h1></div><div id='table'><table><thead><tr style='color:black;font-weight:bold;background-color:#9370CB;'><td>Date de la prise du RDV</td><td>Date du RDV</td><td>Status</td><td>Source</td><td>Service</td><td>Noms de l'équipier</td><td>Prénom de l'équipier</td><td>Prénom du client</td><td>Nom du client</td></tr></thead><tbody");
            odd = false;
            //var enabled = json.items[1].status == 'enabled';
            //    
            
            for (i = 0; i < json.items.length; i++) {
                //
                if (json.items[i].status == 'enabled') {
                    trie = []
                    trie.push(json.items[i].status)
                    trieDef.push(trie)
                }
                    document.write("<tr");
                    if (odd) {      
                            document.write(' style="background-color:#DAD8DD;"');
                    }
                    odd = !odd;
                    document.write(">");
                    document.write("<td>" + json.items[i].created.dateTime + "</td>");
                    document.write("<td>" + json.items[i].start.dateTime + "</td>");
                    document.write("<td>" + json.items[i].status + "</td>");
                    document.write("<td>" + json.items[i].source + "</td>");
                    document.write("<td>" + json.items[i].service.name + "</td>");  
                    document.write("<td>" + json.items[i].staff.firstName + "</td>");
                    document.write("<td>" + json.items[i].staff.lastName  + "</td>");
                    document.write("<td>" + json.items[i].client.firstName + "</td>");
                    document.write("<td>" + json.items[i].client.lastName + "</td>");
                    document.write("<td>" + '<a href="https://'+server2+'.agendize.com/console/scheduling/view-event.jsp?id='+json.items[i].id+'&type=1">Lien</a>' + "</td></tr>");
                    //document.write("<td><a href=" > + json.items[i].lastName + "</a></td>");

            }   
            
            document.write('<div id="count" style="font-weight:bold;font-size:20px">' + json.items.length + " comptes dont " + trieDef.length + " actifs" + "</div>");
            document.write("</tbody></table></div>");
            document.write('<div id="count2" style="font-weight:bold;font-size:20px">' + json.items.length + " comptes dont " + trieDef.length + " actifs" + '<form><input id="impression" name="impression" type="button" onclick="imprimer_page()" value="Imprimer cette page" /></form>' + "</div>");
            //document.write('<button>Export HTML table to CSV file</button>');
            //document.write('<form><input id="impression" name="impression" type="button" onclick="imprimer_page()" value="Imprimer cette page" /></form>')
            document.write("</body>");
        }
        

        

};

xhr.send();
}

appointement1(apiKey,token,server,idCompany);
