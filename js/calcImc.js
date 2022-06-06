var all_patients = document.querySelectorAll('.patient'); 

for(var i = 0; i < all_patients.length; i++){

    var trpatient = all_patients[i];

    var weight = trpatient.querySelector('.info-weight').textContent;
    var height = trpatient.querySelector('.info-height').textContent;
    
    showImc(weight,height,trpatient);
}

function calcImc(weight,height){
    var imc = weight / (height * height);
    return imc.toFixed(2);
}

function showImc(weight,height,patient){ 

    if (!verifyWeight(weight)) {
        patient.querySelector('.info-bmi').textContent = 'Invalid weight.';
        patient.classList.add('invalid-patient'); 
    }
    else {
        if (!verifyHeight(height)) {
            patient.querySelector('.info-bmi').textContent = 'Invalid height.' ;
            patient.classList.add('invalid-patient');
        }
        else {
            patient.querySelector('.info-bmi').textContent = calcImc(weight,height);
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

