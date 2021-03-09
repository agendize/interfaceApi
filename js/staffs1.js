var $_GET = $_GET(),
    apiKey = $_GET['apikey'],
    token = $_GET['token'],
    server = $_GET['server'],
    title2 = $_GET['title']
    console.log(server)
    if (title2 === 'undefined') {
        title2 = ""
    }
    console.log(title2)

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

function staffs1() {
    var url = "https://"+ server+".agendize.com/api/2.1/scheduling/companies?apikey=" + apiKey + "&token=" + token;
    var xhr = new XMLHttpRequest();
    var resultApi = [];
    xhr.open("GET", url, false);
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.onreadystatechange = function () {
        var subresult = [];
        if (xhr.readyState === 4 && xhr.status === 200) {
            var json = JSON.parse(xhr.responseText);
            console.log(json)
            for (i = 0; i < json.items.length; i++) {
                if (json.items[i].deleted == undefined) {
                    subresult = [];
                    subresult.push(json.items[i].id);
                    subresult.push(json.items[i].name);
                    subresult.push(json.items[i].phone);
                    subresult.push("");
                    subresult.push("");
                    subresult.push("");
                    subresult.push("");
                    subresult.push("");
                    resultApi.push(subresult);
                    
                    $.ajax({
                        type: 'GET',
                        url: "https://"+ server+".agendize.com/api/2.1/scheduling/companies/" + json.items[i].id + "/staff?apikey=" + apiKey + "&token=" + token,
                        dataType: 'json',
                        success: function(data) {
                      var items = [];
                    $.each(data.items, function(i,item){
                        for (j = 0; j < item.services.length; j++) {
                            subresult = [];
                            subresult.push("");
                            subresult.push("");
                            subresult.push("");
                            subresult.push(item.firstName + " " + item.lastName);
                            subresult.push(item.email);
                            subresult.push(item.id);
                            subresult.push(item.services[j].name);
                            subresult.push(item.services[j].id);
                            resultApi.push(subresult);
                        }
                      });
                    },
                        data: {},
                        async: false
                    });
                }
            }

            process(resultApi);
        }
    }
    xhr.send();
    
    function process(resultApi) {
        document.write("<!DOCTYPE html><html lang='fr'><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'><link rel='stylesheet' href='style.css'><link rel='preconnect' href='https://fonts.gstatic.com'><link href='https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;700&family=Poppins&display=swap' rel='stylesheet'><link href='https://fonts.googleapis.com/css2?family=Roboto:wght@100&display=swap' rel='stylesheet'><script src='https://code.jquery.com/jquery-3.5.1.min.js' integrity='sha256-9/aliU8dGd2tb6OSsuzixeV4y/faTqgFtohetphbbj0=' crossorigin='anonymous'></script><title>All|staffs</title><link rel='stylesheet' href='style.css'></head><body><div id='divLogo'><img id='logo' src='https://developers.agendize.com/shared/img/logoaz.png' alt=''></div><div class='violet'><h1>" + title2 +"  </h1></div><div id='table'><table><tr style='color:black;font-weight:bold;background-color:#9370CB;'><td>Succursales</td><td>Équipiers</td><td>Mails</td><td>Services</td><td>Liens widget</td></tr>");
        
        document.write("<tbody>");
        odd = false;
        var companyId;
        var phone;
        console.log(resultApi)
        for (i = 0; i < resultApi.length; i++) {
            document.write("<tr");
            if (odd) {      
                    document.write(' style="background-color:#eee;"');
            }
            odd = !odd;
            if (resultApi[i][0].length > 0) {
                companyId = resultApi[i][0];
            }
            document.write(">");
            document.write("<td>" + resultApi[i][1] + "</td>");
            document.write("<td>" + resultApi[i][3] + "</td>");
            if (resultApi[i][6].length > 0) {
                document.write("<td><a href='https://"+ server+".agendize.com/book/" + companyId + "?staff=" + resultApi[i][5] + "' target='new'>" + resultApi[i][4] + "</a></td>");
            } else {
                document.write("<td></td>");
            }
            document.write("<td>" + resultApi[i][6] + "</td>");
            if (resultApi[i][6].length > 0) {
                document.write("<td><a href='https://"+ server+".agendize.com/book/" + companyId + "?staff=" + resultApi[i][5] + "&service=" + resultApi[i][7] + "' target='new'>Widget link</a></td>");
            } else {
                document.write("<td></td>");
            }
            document.write("</tr>");
        }
        document.write("</tbody>");
        document.write("</table></body></html>");

    }}
    staffs1(apiKey,token,server);
