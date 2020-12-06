const UserModel = require("../models/User");

exports.get_users = async (req, res, next) => {
  //get users from db
  try {
    const userList = await UserModel.findAll({});
    res.render("users", { userList });
  } catch (error) {
    res.send("An error occured");
  }
};
//get request icin bu
exports.show_add_user_form = (req, res) => {
  res.render("addUser");
};

  //get db from db
  // findAll = SQL deki yildiz


  //on post request

  exports.add_user = async (req,res) => {
    //add tp db
    
    try {
      const newUser = await UserModel.create({
        firstName : req.body.firstName,
        lastName : req.body.lastName,
      });
      //res.send({user : newUser})
      res.redirect("/users");
      
    } catch (error) {
      
    }
  }

  exports.delete_user = async (req,res) => {
    
    try {
      await UserModel.destroy({
        where : {
          id : req.params.id,
        }
      })
    } catch (error) {
      
    }
  }
