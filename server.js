var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
    'article-one' : {      
            title: 'Article One | Pratishtha',
            heading: 'Article One',
            date: '2 dec',
            content : ` 
                <p> Bla Bla Bla. Wasting time in something else rather than preparing for cat. Bla Bla Bla. Wasting time in something else rather than preparing for cat.Bla Bla Bla. Wasting time in something else rather than preparing for cat.Bla Bla Bla. Wasting time in something else rather than preparing for cat. </p>
                <p> Bla Bla Bla. Wasting time in something else rather than preparing for cat. Bla Bla Bla. Wasting time in something else rather than preparing for cat. Bla Bla Bla. Wasting time in something else rather than preparing for cat. Bla Bla Bla. Wasting time in something else rather than preparing for cat. </p>` },
    'article-two' : {
            title: 'Article Two | Still Pratishtha',
            heading: 'Article Two',
            date: '4 dec',
            content : ` <p> Bla Bla Bla. Still not doing it. </p>`},
    'article-three' : {
            title: 'Article Three | Well there is none other than Pratishtha',
            heading: 'Article Three',
            date: '30 dec',
            content : `<p> Bla Bla Bla. Will not be able to do today I guess </p>`}
};

function createTemplate(data) {
    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `
    <html>
        <head>
            <title> ${title} </title>
            <meta name="viewport" content="width=device-width intial-scale=1 "/>
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="container">
                <div>
                    <a href="/">HOME</a>
                </div>
                <hr/>
                <h2>${heading}</h2>
                <div>
                    <h4>${date}</h4>
                    ${content}
                </div>
            </div>
        </body>
    </html>`;
    return htmlTemplate;
}

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:articleName', function (req, res) {
    //articleName == articleOne
    //articles[articleName]= {} content object for article one  
    var articleName = req.params.articleName;
    res.send(createTemplate(articles[articleName]));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
