const express=require('express');
const app=express();

const hbs=require('hbs');
const port=process.env.PORT ||3000;
hbs.registerPartials(__dirname + '/views/partials');

require('./hbs/helper');

app.use(express.static(__dirname+'/public'));
app.set('view engine','hbs');
hbs.registerHelper('helper_name', function (options) { return 'helper value'; });
hbs.registerPartial('partial_name', 'partial value');
hbs.registerPartials(__dirname + '/views/partials', function (err) {});

app.get(`/`,(req,res)=>{
    res.render('index');
});

app.listen(3000, ()=>{
    console.log(`Servidor ejecutandose en el puerto ${port}`);
});