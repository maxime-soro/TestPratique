var createError = require('http-errors');
var express = require('express');
var app = express();
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var multer = require('multer');
var cors = require("cors");
var fs = require("fs");
var http = require ("http");
const BASE_URL = "http://localhost:9000/images/"


var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require("./routes/testAPI");

var app = express();

var storage = multer.diskStorage({
      destination: function (req, file, cb) {
      cb(null, 'public/images')
    },
    filename: function (req, file, cb) {
      cb(null, file.originalname )
      const stats = fs.statSync('public/images/lst.js');
      fileBuffer = fs.readFileSync('../testimg/src/shared/pictures.js');
      to_string = fileBuffer.toString();
      split_lines = to_string.split("\n");
      datetime = new Date().toISOString();
      split_lines.splice(-2, 2);
      var res;

      fs.writeFile('../testimg/src/shared/pictures.js', split_lines.join("\n"), function (err) {

      });


      fs.appendFile('../testimg/src/shared/pictures.js', ",\n{\n id: " + split_lines.length + ",\n image: 'http://localhost:9000/images/" + file.originalname + "',\n date: '"+ datetime +"' \n}\n  \n  \n  \n   \n];" , function(err) {
        // If an error occurred, show it and return
        if(err) return console.error(err);
        // Successfully wrote to the file!
      });
    }

})

var upload = multer({ storage: storage }).single('file')



const images = './images/';
app.use(express.static('./images'));

app.get('/images', (req, res) => {
    res.setHeader('Content-Type', 'application/json');
    fs.readdir(images, (err, files) => {
        res.send(files);
      });
});


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(cors());
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/testAPI", testAPIRouter);


app.post('/upload',function(req, res) {


    upload(req, res, function (err) {
      return res.redirect("'http://localhost:3000/feed/" + req.file + "''");

           if (err instanceof multer.MulterError) {
               return res.status(500).json(err)
           } else if (err) {
               return res.status(500).json(err)
           }
      return res.status(200).send(req.file)

    })

});


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});


// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
