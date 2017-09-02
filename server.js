var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles={
    article_one:{
      title:'Article one | Sujeet kumar',
      heading:'Article one',
      date:'Aug 25,2017',
      content:` <p>
                        This is the content for my first article.
                    </p>
                    <p>
                         This is the content for my first article.
                    </p>
                    <p>
                         This is the content for my first article.
                    </p>`
    },
    article_two:{
      title:'Article Two | Sujeet kumar',
      heading:'Article Two',
      date:'Aug 26,2017',
      content:` <p>
                        This is the content for my second article.
                    </p>
                    <p>
                         This is the content for my second article.
                    </p>
                    <p>
                         This is the content for my second article.
                    </p>`
    },
    article_three:{
      title:'Article three | Sujeet kumar',
      heading:'Article three',
      date:'Aug 25,2017',
      content:` <p>
                        This is the content for my three article.
                    </p>
                    <p>
                         This is the content for my three article.
                    </p>
                    <p>
                         This is the content for my three article.
                    </p>`
    },
};
function createTemplate (data){
    var title=data.title;
    var date=data.date;
    var heading=data.heading;
    var content=data.content;
var htmlTemplate=`
<html>
    <head>
        <title>
            ${title}
        </title>
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    <body>
        <div class=main>
            <div>
                <a href="/">Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date}
            </div>
            <div>
            ${content}
            </div>
        </div>
    </body>
</html>`
;
    return htmlTemplate;
}
app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var counter=0;
app.get('/counter',function(req,res){
    counter=counter+1;
    res.send(counter.toString());
});

app.get('/:articleName', function (req, res) {
    //articleName==article_one
    //article[articleName]=={} content object for article one
    var articleName=req.params.articleName;
  res.send(createTemplate(articles[articleName]));
});

app.get('/article_two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_two.html'));
});

app.get('/article_three', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article_three.html'));
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

var names=[];
app.get('/submit-name', function(req,res){
    var name=req.query.name;
    names.push(name);
    res.send(JSON.stringify(names));
});


// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
