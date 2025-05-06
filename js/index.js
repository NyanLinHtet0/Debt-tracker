
const debt_row = [
    {key: 'Name'},
    {key: 'Ice'},
    {key: 'Diesel'},
    {key: 'Engine_oil'}
]

const debt_footer  = document.getElementById('debt-input-field')


const tr = debt_footer.insertRow();


const table_row_key =['date','name','ice_amt','ice_type','diesel_amt','diesel_type','engine_oil_amt','engine_oil_type','total']


table_row_key.forEach(e => {
    const input = document.createElement('input');
    input.type = `text$`;
    input.placeholder = `i_${e}`;
    input.style.maxWidth = '80%';
    input.style.marginRight = '.4rem';
    input.style.marginLeft = '.4rem';
    input.style.backgroundColor = 'rgb(255, 255, 255)';
    tr.insertCell().appendChild(input);
});



