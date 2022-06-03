
var button = document.querySelector('#adicionar-paciente');

button.addEventListener('click', function (event){    
    event.preventDefault();

    var formAddPatient = document.querySelector('#form-adiciona');
    var newPatient = createNewPatient(formAddPatient); 

    var errors = verifyPatient(newPatient); 

    if (errors.length > 0) {
        showErrors(errors);
        return ;
    }

    buildTr(newPatient);

    var patients = document.querySelectorAll('.paciente');
    var currentPatient = patients[(patients.length)-1];

    showImc(newPatient.weight,newPatient.height,currentPatient);

    var errorsMessage = document.querySelector('#errors-form');
    errorsMessage.innerHTML = '';
    // formAddPatient.reset();

});

function createNewPatient(form) {
    var newPatient = { 
        name: form.nome.value,
        weight: form.peso.value,
        height: form.altura.value,
        fat: form.gordura.value,
        imc: ''
    }
    return newPatient;
}

function buildTr(newPatient) {

    var newPatientTr = document.createElement('tr');
    newPatientTr.classList.add('paciente');
 
    newPatientTr.appendChild(buildTd(newPatient.name,'info-nome'));
    newPatientTr.appendChild(buildTd(newPatient.weight,'info-peso'));
    newPatientTr.appendChild(buildTd(newPatient.height,'info-altura'));
    newPatientTr.appendChild(buildTd(newPatient.fat,'info-gordura'));
    newPatientTr.appendChild(buildTd(newPatient.imc,'info-imc'));

    tbody = document.querySelector('#tabela-pacientes');
    tbody.appendChild(newPatientTr);

}

function buildTd (objectData,className) {  
    var DataTd = document.createElement('td');
    DataTd.classList.add(className);
    DataTd.textContent = objectData;
    return DataTd;
}

function verifyPatient(patient) { 
    var errors = [];

    if (!verifyName(patient)){
        errors.push('Nome inválido')
    }

    if (!verifyWeight(patient.weight)){
        errors.push('Peso inválido!');
    }
    
    if (!verifyHeight(patient.height)){
        errors.push('Altura inválida!');
    }

    if (!verifyFat(patient)){
        errors.push('Gordura inválida!')
    }
    
    return errors;
}

function showErrors(errors) {
    var ul = document.querySelector('#errors-form');
    ul.innerHTML = '';

    errors.forEach(error => {
        var li = document.createElement('li'); 
        li.textContent = error; 
        ul.appendChild(li);
    });     
}

function verifyName(patient) {
    if (patient.name.length == 0) {
        return false;
    }
    else{
        return true;
    }
}

function verifyFat(patient) {
    if (patient.fat.length == 0){
        return false;
    }
    else{
        return true;
    }
}

