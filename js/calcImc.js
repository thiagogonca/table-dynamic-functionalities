var all_patients = document.querySelectorAll('.paciente'); 

for(var i = 0; i < all_patients.length; i++){

    var trpatient = all_patients[i];

    var weight = trpatient.querySelector('.info-peso').textContent;
    var height = trpatient.querySelector('.info-altura').textContent;
    
    showImc(weight,height,trpatient);
}

function calcImc(weight,height){
    var imc = weight / (height * height);
    return imc.toFixed(2);
}

function showImc(weight,height,patient){ 

    if (!verifyWeight(weight)) {
        patient.querySelector('.info-imc').textContent = 'Peso inválido.';
        patient.classList.add('paciente-invalido'); 
    }
    else {
        if (!verifyHeight(height)) {
            patient.querySelector('.info-imc').textContent = 'Altura inválida.' ;
            patient.classList.add('paciente-invalido');
        }
        else {
            patient.querySelector('.info-imc').textContent = calcImc(weight,height);
        }
    }
}

function verifyWeight (weight) {
    if (weight<=0 || weight>700) {
        return false; 
    }
    else {
        return true;
    }
}

function verifyHeight(height) {
    if (height<=0 || height>3 || height == '') {
        return false;
    }
    else {
        return true;
    }
}

