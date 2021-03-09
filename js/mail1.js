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
function mail1() {
    var resultApi = [];

        $.ajax({
            type:'GET',
            url:"https://"+ server+".agendize.com/api/2.1/scheduling/companies?apiKey=" + apiKey + "&token=" + token,
            dataType:'json',
            async: false,
            success: function(json) {
                for (i = 0; i < json.items.length; i++) {
                    $.ajax({
                        type: 'GET',
                        url: "https://"+ server+".agendize.com/api/2.1/scheduling/companies/" + json.items[i].id + "/settings/messages/emails?apiKey=" + apiKey + "&token=" + token,
                        dataType: 'json',
                        success: function(data) {
                            
                            $.each(data.items, function(i,item){
                                subresult = [];
                                subresult.push(json.items[i].name);
                                subresult.push(json.items[i].id);
                                subresult.push(item.name);
                                subresult.push(item.id);
                                subresult.push(item.html);
                                resultApi.push(subresult);
                                
                                
                            });
                        console.log(json)

                        },
                        async: false
                    });
                }
                
                process(resultApi) 
            }
        })

    function process(resultApi) {
        

        document.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='style.css'><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins&display=swap' rel='stylesheet'><link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'><script src='https://code.jquery.com/jquery-3.5.1.min.js' integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=' crossorigin='anonymous'></script><title>All|email templates</title><link rel='stylesheet' href='style.css'></head><body><div id='divLogo'><img id='logo' src='https://developers.agendize.com/shared/img/logoaz.png' alt=''></div><div class='violet'><h1>" + title2 +"  </h1></div><div id='table' style='background:white'><table><tr style='color:black;font-weight:bold;'><td>Company name</td><td>Company ID</td><td>Email template name</td><td>Email template ID</td></tr>");
        
        odd = false;
        
        for (i = 0; i < resultApi.length; i++) {
            document.write("<tr");
            if (odd) {      
                    document.write(' style="background-color:#eee;"');
            }
            odd = !odd;
        
            document.write(">");
            document.write("<td>" + resultApi[i][0] + "</td>");
            document.write("<td>" + resultApi[i][1] + "</td>");
            document.write("<td>" + resultApi[i][2] + "</td>");
            document.write("<td>" + resultApi[i][3] + "</td>");
            document.write("<td>" + resultApi[i][4] + "</td>");
            
            document.write("</tr>");
        }
        document.write("</tbody>");
        document.write("</table></body></html>");
    }

}

    mail1(apiKey,token,server);
