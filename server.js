var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles= {
 articleOne: {
    title:"Article-One",
    heading:"Article-one",
    date:"Feb 16",
    content:`
            <div>
                <p>This is the content of my article</p>
            </div>`
},
articleTwo :{
    
    title:"Article-Two",
    heading:"Article-Two",
    date:"Feb 16",
    content:`
            <div>
                <p>This is the content of my article</p>
            </div>`
},
articleThree:{
    
    title:"Article-Three",
    heading:"Article-Three",
    date:"Feb 16",
    content:`
            <div>
                <p>This is the content of my article</p>
            </div>`
}
};


function createtemplate (data)
{
    var title =data.title;
    var heading = data.heading;
    var date = data.date
    var content =data.content;
        var HtmlTemplate = `
        <html>
        <head>
        <title> ${title} </title>
        </head>
        <body>
        <a href="/">Home</a> 
        <hr>
        <h1>${heading}</h1>
        <div>
            <h2> ${date}</h2>
            ${content}
        
        
        </body>
        </html>
                        `
    return HtmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/ui/main.js',function(req,res){
    res.sendFile(path.join(__dirname,'ui','main.js'));
});
counter =0;
app.get('/counter',function(req,res){
   counter = counter + 1;
   res.send(counter.toString());
});

app.get('/:articleName',function(req,res){
  articleName = req.params.articleName;
 // res.send('article one will be served soon') 
// res.sendFile(path.join(__dirname,'article-one.html'));
res.send(createtemplate(articles[articleName]));
});



app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
