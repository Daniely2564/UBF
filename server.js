const express = require('express');
const app = express();
const hbs = require('hbs');


hbs.registerPartials(__dirname+'/views/partials');
app.use(express.static(__dirname));
app.set('view engine','hbs');

app.use((req,res,next)=>{
    var date = new Date().toString();
    var log = `${ date }  ${ req.method } ${ req.url }`;
    next();
});

app.get('/',(req,res) => {
    res.render('index.hbs',{
        title:"New Jersey UBF"
    });
});

app.get('/questionnaire',(req,res)=>{
    res.render('questionnair.hbs',{
        title:"Questionnaire"
    });
});

app.listen(process.env.PORT||3000, () =>{
   console.log('local host is at '+process.env.PORT||3000);
});