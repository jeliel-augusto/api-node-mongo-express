const path = require('path');
const nodemailer = require('nodemailer');
const hbs = require('nodemailer-express-handlebars');
const {host, port, user, pass} = require('../config/maill');
const transport = nodemailer.createTransport({
    host: host,
    port: port,
    auth: {
        user: user,
        pass: pass
    }
});
const handlebarOptions = {
    viewEngine: {
        extName: '.html',
        partialsDir: 'some/path',
        layoutsDir: 'some/path',
        defaultLayout: '',
    },
    viewPath: path.resolve('./src/resources/mail/'),
    extName: '.html',
};
transport.use('compile', hbs(handlebarOptions));
module.exports =  transport;