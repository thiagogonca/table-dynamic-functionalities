var filter = document.querySelector('#filter-table');

filter.addEventListener('input', function(){
    
    var patients = document.querySelectorAll('.patient');
    
    patients.forEach(patient => {
        nameMatch(patient,this);
    });

});

function nameMatch(patient,filter){
    var name = patient.querySelector('.info-name').textContent; 
    var expression = new RegExp(filter.value,'i'); 
    
    if (filter.value != '') {
        if (!expression.test(name)) {
            patient.classList.add('search-hidden');
        }
        else {
            patient.classList.remove('search-hidden');
        }
    }
    else {
        patient.classList.remove('search-hidden');
    }
}