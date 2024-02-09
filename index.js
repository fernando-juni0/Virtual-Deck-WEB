//TODO-------------importes------------
const express = require('express')
const app = express();
const bodyParser = require('body-parser');
const session = require('express-session')
const path = require('path');
const multer = require('multer')
const cookieParser = require("cookie-parser");
const configs = require('./config/index-config')
const db = require('./Firebase/models');
const cloudinary = require('cloudinary')


//TODO------------Configs--------------

app.use(session(configs.session));
app.use(cookieParser());

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json())

app.use(express.static('views'));
app.use(express.static('public'));
app.use(express.static('uploads'));
app.use(express.static('src'));

app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/uploads', express.static(path.join(__dirname, 'src')));
app.use('/public', express.static(path.join(__dirname, 'public')));

app.set('views', path.join(__dirname, '/views'))
app.set('view engine', 'ejs');



const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, __dirname +'/uploads/')
    },
    filename: function (req, file, cb) {
        const nomeArquivo = file.originalname
        const codigo = require('crypto').randomBytes(42).toString('hex');
        const originalName = file.originalname;
        const extension = originalName.substr(originalName.lastIndexOf('.'));
        const fileName = codigo + extension;
        cb(null, `${fileName}`)
    }
});

const upload = multer({ storage });



cloudinary.config({ 
    cloud_name: 'dgcnfudya', 
    api_key: '634395634388475', 
    api_secret: 'sGIzXYveDRCN_iSnjKepzB8mMd8' 
});
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', 'https://virtualdeck.fernandojunio.com.br');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept, ngrok-skip-browser-warning');
    res.setHeader('Access-Control-Allow-Credentials', 'true');
    next();
  });

app.get('/',(req,res)=>{
    res.redirect('/default')
})


app.get('/default/:link?',(req,res)=>{
    res.render('default')
})

app.get('/create/shortcut',(req,res)=>{
    res.render('create-shortcut')
})









//TODO SERVER

app.listen(configs.port,()=>{
    console.log(`Servidor rodando na porta ${configs.port}` );
});