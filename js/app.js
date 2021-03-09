function choiceScript() {

    var script;
    if (document.getElementById('succursales').checked) {
        succursale();
    } else if (document.getElementById('staffs').checked) {
        staffs();
    } else if (document.getElementById('services').checked) {
        services();
    } else if (document.getElementById('mails').checked) {
        mail();
    } else if (document.getElementById('contact').checked) {
        contact();
    } else if (document.getElementById('facturation').checked) {
        facturation();
    } else if (document.getElementById('rdv').checked) {
        appointment();
    } else if (document.getElementById('callTracking').checked) {
        callTracking();
    } else if (document.getElementById('importStaff').checked) {
        importStaff();
    } else if (document.getElementById('fullReport').checked) {
        report();
    } else if (document.getElementById('resellerFullReport').checked) {
        resellerReport();
    }
}
var $_GET = $_GET(),
    apikey2 = $_GET['apikey'],
    token2 = $_GET['token'],
    server2 = $_GET['server'],
    title2 = $_GET['title']


function importStaff() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    idCompany = document.getElementById('idCompany').value;
    var $fileStaffList = "stafflist.csv";
    window.open("importStaff.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"", "_blank")

}



function callTracking() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    window.open("callTracking.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"", "_blank")
}

function succursale() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    window.open("succursale.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"", "_blank")
}
   
function services() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    window.open("service.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"", "_blank")
}
   
function appointment() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    idCompany = document.getElementById('idCompany').value;

    window.open("appointment.html?apikey="+apiKey+"&token="+token+"&server="+server+"&idCompany="+idCompany+"&title="+title2+"", "_blank")
}

function facturation() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    idCompany = document.getElementById('idCompany').value;

    window.open("billing.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"&title="+title2+"", "_blank")
}
   
function contact() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    idCompany = document.getElementById('idCompany').value;

    window.open("contact.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"", "_blank")
}

function staffs() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    idCompany = document.getElementById('idCompany').value;

    window.open("staffs.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"", "_blank")
}

function mail() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    idCompany = document.getElementById('idCompany').value;

    window.open("mail.html?apikey="+apiKey+"&token="+token+"&server="+server+"&title="+title2+"", "_blank")
}

function report() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    startDate = document.getElementById('idStartDate').value;
    endDate = document.getElementById('idEndDate').value;

    window.open("report.html?apikey="+apiKey+"&token="+token+"&server="+server+"&startDate="+startDate+"&endDate="+endDate+"&title="+title2+"", "_blank")
}

function resellerReport() {
    if(apikey2 == null) {
        apiKey = document.getElementById('idApiKey').value;
    } else {
        apiKey=apikey2
    }
    if(token2 == null) {
        token = document.getElementById('idToken').value;
    }else {
        token = token2
    }
    if(server2 == null) {
        server = document.getElementById('server').value;
    }else {
        server = server2
    }
    startDate = document.getElementById('idStartDateReseller').value;
    endDate = document.getElementById('idEndDateReseller').value;

    window.open("resellerReport.html?apikey="+apiKey+"&token="+token+"&server="+server+"&startDate="+startDate+"&endDate="+endDate+"&title="+title2+"", "_blank")
}
   