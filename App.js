//⭐️⭐️ Here we are creating API..

const http = require('http');
const url = require('url');
const fs = require('fs');

const replaceTemp = (temp, product)=>{
    let output = temp.replace(/{%PRODUCTNAME%}/g,product.productName);
    output = output.replace(/{%IMAGE%}/g,product.image)
    output = output.replace(/{%FROM%}/g,product.from)
    output = output.replace(/{%NUTRIENTS%}/g,product.nutrients)
    output = output.replace(/{%QUANTITY%}/g,product.quantity)
    output = output.replace(/{%PRICE%}/g,product.price)
    output = output.replace(/{%DESCRIPTION%}/g,product.description)
    output = output.replace(/{%ID%}/g,product.id)

    if(!product.organic){
        output = output.replace(/{%NOT_ORGANIC%}/g,'not-organic');
        
    }
    return output;

    
}

const tempOverview = fs.readFileSync(`${__dirname}/templates/template-overview.html`,'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates/template-product.html`,'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates/template-card.html`,'utf-8');
const data = fs.readFileSync(`${__dirname}/dev-data/data.json`,'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req,res)=>{
    const {query, pathname} = url.parse(req.url,true);
    

    //overview..
    if(pathname === '/' || pathname === '/overview'){
        res.writeHead(200,{'Content-type':'text/html'})
        const cardsHtml = dataObj.map(el => replaceTemp(tempCard,el)).join('');
        const output1 = tempOverview.replace('{%PRODUCT_CARDS%}',cardsHtml)
        res.end(output1);
    }

    //products..
    else if(pathname === '/product'){
        res.writeHead(200,{'Content-type':'text/html'})
        const product = dataObj[query.id];
        const output2 = replaceTemp(tempProduct,product);
        res.end(output2);
    
        
        
    }

    //api..
    else if(pathname === '/api'){
        res.writeHead(200,{'Content-type':'text/html'})
        res.end('api');
    }

    //not found..
    else{
        res.writeHead(404,{
            'Content-type' : 'text/html',
            'my-own-header':'Wrong-turn'
        })
        res.end('<h1>Page not found</h1>')
    }
});
server.listen(8001,'127.0.0.1',()=>[
    console.log('Server is listening to port 8001s..')
]);