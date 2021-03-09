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

function callTracking1(apiKey,token,server) {
    var xhr = new XMLHttpRequest();
    var url = "https://"+server+".agendize.com/api/2.0/resellers/accounts?apikey=" + apiKey + "&token=" + token;
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            //window.open("callTracking.html?apikey="+apiKey+"&token="+token+"", "_blank")
            console.log(json)
            document.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='style.css'><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins&display=swap' rel='stylesheet'><link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'><script src='https://code.jquery.com/jquery-3.5.1.min.js' integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=' crossorigin='anonymous'></script><title>Reseller|call tracking</title><link rel='stylesheet' href='style.css'></head><body><div id='divLogo'><img id='logo' src='https://developers.agendize.com/shared/img/logoaz.png' alt=''></div><div class='violet'><h1>" + title2 +"  </h1></div><div id='table'><table><tr style='color:black;font-weight:bold;background-color:#9370CB;'><td>Company name</td><td>Token</td></tr>");
            odd = false;
            //var enabled = json.items[1].status == 'enabled';
            //    
            
            for (i = 0; i < json.items.length; i++) {
                //  
                
                    document.write("<tr");
                    if (odd) {      
                            document.write(' style="background-color:#DAD8DD;"');
                    }
                    odd = !odd;
                    document.write(">");
                    document.write("<td><button target='_blank' onclick=callTracking2('"+json.items[i].ssoToken+"')>"+json.items[i].clientName+"</button></td>");
                    //document.write("<td><a href='https://"+server+".agendize.com/api/2.0/calls?apiKey="+apiKey+"&token="+json.items[i].ssoToken+"'>"+json.items[i].clientName+"</a></td>");
                    document.write("<td>" + json.items[i].ssoToken + "</td>");
                    //document.write("<td><button class='sso' onclick='coucou()'>" + json.items[i].ssoToken + "</buton></td>");


            }   

            
            
            document.write("</body>");
            
        }
        
        
        

};


xhr.send();
}
callTracking1(apiKey,token,server);





    
  