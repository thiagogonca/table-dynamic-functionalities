var button = document.querySelector('#search-patients');

button.addEventListener('click',function(event){
    xmlRequest();
});

function xmlRequest(){

    var request = new XMLHttpRequest();
    request.open('GET','https://api-pacientes.herokuapp.com/padcientes'); 

    request.addEventListener('load',function(spanError){        
        
        ifRequestError(this);
        
        var patientsPt = JSON.parse(this.responseText);  
        addPatients(renameKeywords(patientsPt));
    }); 


    request.send();     
}

function ifRequestError(request){
    if (request.status != 200) {
        console.log(request.status);
        console.log(request.status.responseText);
        let spanError = document.querySelector('#search-error');
        spanError.classList.add('request-error');
        spanError.textContent = 'Erro ao buscar os pacientes';
    }   
}

function addPatients(patients){
    patients.forEach(patient => {
        buildTr(patient);
    });
}

function renameKeywords(patients){
    let patientsEng = patients.map(i => ({
        'name': i.nome,
        'weight': i.peso,
        'height': i.altura,
        'fat' : i.gordura,
        'imc' : i.imc
        })); 
    return patientsEng;
}