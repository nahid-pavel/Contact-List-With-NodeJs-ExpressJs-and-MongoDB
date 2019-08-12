const Contact = require("./Contacts.js");

exports.getAllContacts = (req, res) => {
  Contact.find()
    .then(contacts => {
      res.render("index", {
        contacts,
        errors: {}
      });
    })
    .catch(err => {
      res.json({
        message: "error occured"
      });
    });
};
exports.getSingleContact = (req, res) => {};
exports.createContact = (req, res) => {
  let { name, email, phone, id } = req.body;

  let errors = {};

  if (!name) {
    errors.name = "Please enter your name";
  }
  if (!email) {
    errors.email = "Please enter your email";
  }
  if (!phone) {
    errors.phone = "Please enter your phone";
  }

  
  let isError = Object.keys(errors).length > 0;
  if (isError) {
    Contact.find()
      .then(contacts => {
        return res.render("index", {
          contacts,
          errors
        });
      })
      .catch(err => {
        return res.json({
          message: "error occured"
        });
      });
  } else {
    if(id){
     
      Contact.findOneAndUpdate(
        {
          _id: id
        },
        {
          $set: {
            name,
            email,
            phone
          }
        })
    
        .then(() => {
          Contact.find()
          .then(contacts => {
            res.render("index", {
              contacts,
              errors: {}
            });
          })
          .catch(err => {
            res.json({
              message: "error occured"
            });
          });
  
    }) }else{
  
    let contact = new Contact({
      name,
      email,
      phone
    });
    contact
      .save()
      .then(() => {
        Contact.find().then(contacts => {
          return res.render("index", {
            contacts,
            errors: {}
          });
        });
      })

      .catch(e => {
        return res.json({
          message: "error occured"
        });
      });
  }
}
};
exports.updateContact = (req, res) => {
  let { name, email, phone } = req.body;
  let { id } = req.params;
  Contact.findByIdAndUpdate(
    {
      _id: id
    },
    {
      $set: {
        name,
        email,
        phone
      }
    },
    {
      new: true
    }
  )
    .then(contact => {
      res.json(contact);
    })
    .catch(err => {
      res.json({
        message: "error occured"
      });
    });
};
exports.deleteContact = (req, res) => {
  const { id } = req.params;

  Contact.findOneAndDelete({
    _id: id
  })
    .then(() => {
      Contact.find().then(contacts => {
        res.render("index", {
          contacts,
          errors: {}
        });
      });
    })
    .catch(err => {
      res.json({
        message: "error occured"
      });
    });
};
