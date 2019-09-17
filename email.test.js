const email = require('./email')

let emails=[
    {email:"Markus@mackman.fi",returns:true},
    {email:"helträtt@mail.com",returns:false},
    {email:"helträtt@mail.com",returns:false}
]
for(let i = 0 ; i < emails.length; i++){
    test('Testa email '+i, () => {
     expect(email(emails[i].email)).toBe(emails[i].returns);
    });
}