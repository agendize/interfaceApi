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

function billing1() {
    trieDef = []
    var xhr = new XMLHttpRequest();
    var url = "https://"+ server+".agendize.com/api/2.0/resellers/accounts?apikey=" + apiKey + "&token=" + token;
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json.items.length)
            console.log(json.items)
            console.log(json)

            if (title2 == undefined) {
                title2 = ''
            }
            document.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='style.css'><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins&display=swap' rel='stylesheet'><link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'><script src='https://code.jquery.com/jquery-3.5.1.min.js' integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=' crossorigin='anonymous'></script><title>Reseller|customers accounts</title><link rel='stylesheet' href='style.css'></head><body><div id='divLogo'><img id='logo' src='https://developers.agendize.com/shared/img/logoaz.png' alt=''></div><div class='violet'><h1>" + title2 +"  </h1></div><div id='table'><table><thead><tr style='color:black;font-weight:bold;background-color:#9370CB;'><td>Noms du client</td><td>Reseller id</td><td>Prénoms</td><td>Noms</td><td>Mails</td><td>Profils</td><td>Status</td></tr></thead><tbody");
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
                    document.write("<td>" + json.items[i].clientName + "</td>");
                    document.write("<td>" + json.items[i].resellerId + "</td>");
                    document.write("<td>" + json.items[i].firstName + "</td>");
                    document.write("<td>" + json.items[i].lastName + "</td>");
                    document.write("<td>" + json.items[i].email + "</td>");
                    if(json.items[i].profile === undefined) {
                        document.write("<td>" + '' + "</td>");
                    } else {
                        document.write("<td>" + json.items[i].profile.name +"</td>");
                    }
                    document.write("<td class='trie'>" + json.items[i].status + "</td></tr>");  

            }   
            
            document.write('<div id="count" style="font-weight:bold;font-size:20px">' + json.items.length + " comptes dont " + trieDef.length + " actifs" + "</div>");
            document.write("</tbody></table></div>");
            document.write('<div id="count2" style="font-weight:bold;font-size:20px">' + json.items.length + " comptes dont " + trieDef.length + " actifs" + '<form><input id="impression" name="impression" type="button" onclick="imprimer_page()" value="Imprimer cette page" /></form>' + "</div>");
            //document.write('<button>Export HTML table to CSV file</button>');
            //document.write('<form><input id="impression" name="impression" type="button" onclick="imprimer_page()" value="Imprimer cette page" /></form>')
            document.write("</body></html>");
        }
        

        

};

xhr.send();
}

billing1(apiKey,token,server);


function imprimer_page(){
    window.print();
  }
