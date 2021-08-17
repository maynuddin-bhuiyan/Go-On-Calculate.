function calauter(num){
    const inputButton = document.getElementById('input_btn');
    const inputText = inputButton.value + num;
    const inputTatol = document.getElementById('input_btn').value = inputText;
    return inputTatol;
}

const buttonFild = document.getElementById('button_fild');

buttonFild.addEventListener('click', function(){
    const equlenumber = document.getElementById('input_btn').value;
    const totalNumber = eval(equlenumber);
    document.getElementById('input_btn').value = totalNumber;
});

const delatFild = document.getElementById('delat_btn');

delatFild.addEventListener('click', function(){
    
    document.getElementById('input_btn').value = '';
});