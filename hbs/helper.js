const hbs = require('hbs');
var  fs = require('fs');
var prod = JSON.parse(fs.readFileSync('./data/data.json'));
hbs.registerHelper('getProducto',function(){
    var patineta="";
    prod.forEach(prods =>{

        patineta += '<div id="img_producto">';
        patineta +='<img src="'+prods.url+'" height="150px" width="100px"><br>';
        patineta +='<br><p>'+prods.nombre+'</p>';
        patineta += '<p>' +prods.precio+ '$</p>';
        patineta += '</div>';



    });
    return new hbs.SafeString(patineta);

});