const nodemailer = require("nodemailer");

const { google } = require("googleapis");

const { OAuth2 } = google.auth;
const oauth_link = "https://developers.google.com/oauthplayground";
const { EMAIL, MAILING_ID, MAILING_REFRESH, MAILING_SECRET } = process.env;

const auth = new OAuth2(
  MAILING_ID,
  MAILING_SECRET,
  MAILING_REFRESH,
  oauth_link
);

exports.sendVerificationEmail = (email, name, url) => {
  auth.setCredentials({
    refresh_token: MAILING_REFRESH,
  });
  const accessToken = auth.getAccessToken();
  const stmp = nodemailer.createTransport({
    service: "gmail",
    auth: {
      type: "OAuth2",
      user: EMAIL,
      clientId: MAILING_ID,
      clientSecret: MAILING_SECRET,
      refreshToken: MAILING_REFRESH,
      accessToken,
    },
  });
  const mailOptions = {
    from: EMAIL,
    to: email,
    subject: "SYMBI-CONNECT email verification",
    html: `<div style="max-width:700px;margin-bottom:1rem;display:flex;align-items:center;gap:10px;font-family:Roboto;font-weight:600;color:#000">
    <img src="symbi.ico" alt="" style="width:30px">
    <span>ACTION Request: Activate Your Symbi Connect</span>
  </div>
  <div style="padding:1rem 0;border-top:1px solid #e5e5e5;border-bottom:1px solid #e5e5e5;color:#141823;font-size:17px;font-family:Roboto">
    <span>Hello ${name},</span>
    <div style="padding:20px 0">
      <span>We're thrilled to have you as a new member of Symbi-Connect. Confirm your account now to begin your journey with us.</span>
    </div>
    <a href="${url}" style="width:200px;padding:10px 15px;background:#0c0c0e;color:#fff;text-decoration:none;font-weight:600;border-radius:5px;transition:background 0.3s ease">Confirm your Account</a>
  </div>
  <div style="padding-top:20px;text-align:center;color:#898f9c">
    <span>Connect with your community !</span>
  </div>
  `,
  };
  stmp.sendMail(mailOptions, (err, res) => {
    if (err) return err;
    return res;
  });
};
