const router = require("express").Router();
const {
  getAllContacts,
  getSingleContact,
  createContact,
  updateContact,
  deleteContact
} = require("./controllers.js");

router.get("/",getAllContacts);
router.post("/",createContact);
router.get("/:id", getSingleContact);
//router.put("/:id",updateContact);
router.get("/delete/:id",deleteContact);

module.exports = router;
