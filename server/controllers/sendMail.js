const nodemailer = require('nodemailer');
const {google} = require('googleapis');
const {OAuth2} = google.auth;
const OAUTH_PLAYGROUND = 'https://developers.google.com/oauthplayground';

const {

    MAIL_SERVICE_CLIENT_ID,
    MAIL_SERVICE_CLIENT_SECRET,
    MAIL_SERVICE_REFRESH_TOKEN,
    SENDER_EMAIL_ADDRESS
} = process.env


const oauth2Client = new OAuth2(
    MAIL_SERVICE_CLIENT_ID,
    MAIL_SERVICE_CLIENT_SECRET,
    MAIL_SERVICE_REFRESH_TOKEN,
    OAUTH_PLAYGROUND
)


// send mail

const sendMail = (to,url,text)=>{
    oauth2Client.setCredentials({
        refresh_token:MAIL_SERVICE_REFRESH_TOKEN
    })

    const accessToken = oauth2Client.getAccessToken()
    const smtpTransport = nodemailer.createTransport({
        service:'gmail',
        auth:{
            type:"OAuth2",
            user: SENDER_EMAIL_ADDRESS,
            clientId: MAIL_SERVICE_CLIENT_ID,
            clientSecret: MAIL_SERVICE_CLIENT_SECRET,
            refreshToken:MAIL_SERVICE_REFRESH_TOKEN,
            accessToken
        }
    })

    const mailOptions = {
        from: SENDER_EMAIL_ADDRESS,
        to:to,
        subject:"Turbo Fashions",
        html:`
        <div style="max-width:560px; margin:0 auto;padding: 10px 20px; border: 5px solid #86b2f3;">
        <h2>${text}</h2>
        <p>Tap the button below to confirm your email address.</p>
        <button style="padding:12px 18px; background-color:#032250; color:#fff; margin: 12px;
        outline: none;border: none; border-radius: 3px;">
            <a style="text-decoration: none; color:#fff" href=${url}>${text}</a></button>
        <p>I the button doesn't work for any reason, you can also click on the link below:<br>${url}</p>
        
    </div>
        `
    }

    smtpTransport.sendMail(mailOptions,(err,infor)=>{
        if(err) return err;
        return infor
    })
}

module.exports = sendMail