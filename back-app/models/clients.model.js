module.exports = async () => {

  const Client = require("../stores/client.js");

  const errHandler = (err) => {
    console.log("error", err);
  }

  const client = await Client.create({
    firstname : "max",
    lastname : "sohet",
    email : "test@sequelize"
  })
  .catch(errHandler);

  // Client.create = (newClient, result) => {
  //   result(null,{id:res.insertId,newClient})
  // }

    const clients = await Client.findAll({where : {username : "max"}})

    console.log("clients" , clients);

}
