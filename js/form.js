
var button = document.querySelector('#add-patient');

button.addEventListener('click', function (event){    
    event.preventDefault();

    var formAddPatient = document.querySelector('#form-add');
    var newPatient = createNewPatient(formAddPatient); 

    var errors = verifyPatient(newPatient); 

    if (errors.length > 0) {
        showErrors(errors);
        return ;
    }

    buildTr(newPatient);

    var patients = document.querySelectorAll('.patient');
    var currentPatient = patients[(patients.length)-1];

    showImc(newPatient.weight,newPatient.height,currentPatient);

    var errorsMessage = document.querySelector('#errors-form');
    errorsMessage.innerHTML = '';
    // formAddPatient.reset();

});

function createNewPatient(form) {
    var newPatient = { 
        name: form.name.value,
        weight: form.weight.value,
        height: form.height.value,
        fat: form.fat.value,
        imc: ''
    }
    return newPatient;
}

function buildTr(newPatient) {

    var newPatientTr = document.createElement('tr');
    newPatientTr.classList.add('patient');
 
    newPatientTr.appendChild(buildTd(newPatient.name,'info-name'));
    newPatientTr.appendChild(buildTd(newPatient.weight,'info-weight'));
    newPatientTr.appendChild(buildTd(newPatient.height,'info-height'));
    newPatientTr.appendChild(buildTd(newPatient.fat,'info-fat'));
    newPatientTr.appendChild(buildTd(newPatient.imc,'info-bmi'));

    tbody = document.querySelector('#patients-table');
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
        errors.push('Invalid name');
    }

    if (!verifyWeight(patient.weight)){
        errors.push('Invalid weight!');
    }
    
    if (!verifyHeight(patient.height)){
        errors.push('Invalid height!');
    }

    if (!verifyFat(patient)){
        errors.push('Invalid fat!');
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

