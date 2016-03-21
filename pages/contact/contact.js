"use strict";


module.exports = {
  get: function(request, response) {
    response.render({
      user: {
        name: "scott",
        pass: "pacat"
      }
    })

  }/*,
  post: function(request, response) {

    if(!request || !request.query ){
      // Honeypot for spambots
      console.log(request.query);
      if (request.query.company) {
        response.render({
          type: 'empty',
          err: true,
          message: request.query.message,
          name: request.query.name,
          email: request.query.email,
          msg: 'Spam Bot détecté. Le message n\'a pas été envoyé, s\'il vous plaît, contactez-nous par email ou par téléphone',
          description: 'Spam'
        });
      }
      // Check if all required fields are filled
      if (!request.query.name || !request.query.email || !request.query.message) {
        response.render({
          type: 'empty',
          err: true,
          message: request.query.message,
          name: request.query.name,
          email: request.query.email,
          msg: 'Remplissez tous les champs, merci!',
          description: 'L\'e-mail n\'a pas été envoyé avec succès'
        });
      }

      // Check for valid email
      let validator = require("email-validator");
      let email_check = validator.validate(request.query.email);
      if (email_check == false) {
        response.render({
          type: 'empty',
          err: true,
          message: request.query.message,
          name: request.query.name,
          email: request.query.email,
          msg: 'Entrez une adresse email valide s\'il vous plaît, merci!',
          description: 'L\'e-mail n\'a pas été envoyé avec succès'
        });
      }

      // Set up smtp mailer
      let nodemailer = require('nodemailer');
      let transporter = nodemailer.createTransport({
        service: 'Gmail',
        auth: {
          user: 'Website@account.com',
          pass: 'WebsitePass'
        }
      });

    let mailOptions = {
      from: request.body.email, // sender address
      to: 'ani.grenoble@gmail.com', // list of receivers
      subject: 'Site internet contact', // Subject line
      text: 'Nom de l\'envoyeur :' + request.body.name + ' \nEmail de contact :' + request.body.email + "\nMessage : " + request.body.message // plaintext body
        // html: '<b>Hello world ✔</b>' // You can choose to send an HTML body instead
    };

        // Email not sent
        if (error) {
          console.log(error);
          response.render({
            type: 'error',
            description: 'L\'e-mail n\'a pas été envoyé avec succès'
          });
          // Email successfully sent!
        } else {
          console.log(info);
          response.render({
            type: 'success',
            description: 'L\'e-mail a été envoyé avec succès'
          });
        };
      });
      response.render();
    }
  }*/


}
