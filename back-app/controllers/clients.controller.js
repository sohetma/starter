const client = require('../database/models/Client');

const ResponseFormat = require('../core').ResponseFormat;


//   const create = async (req, res) => {
//     console.log(Client);
//     try {
//       const post = await Client.create(
//         {
//           firstname : req.body.firstname,
//           lastname : req.body.lastname,
//           email : req.body.email
//         }
//       );
//       return res.status(201).json({
//         post
//       });
//     } catch (error) {
//       return res.status(500).json({ error: error.message });
//     }
//   };
//
//   const list = async (req, res) => {
//     try {
//       const posts = await Client.findAll();
//       return res.status(200).json({ posts });
//     } catch (error) {
//       return res.status(500).send(error.message);
//     }
//   };
//
// module.exports = {
//   create,
//   list
// }


module.exports = {
    create(req, res) {
      console.log(client);
        return client.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        })
        .then(client => res.status(201).json(ResponseFormat.build(
            client,
            "Client Create Successfully",
            201,
            "success"
        )))
        .catch(error => res.status(400).json(ResponseFormat.error(
            error,
            "Something went wrong when create Client",
            "error"
        )))
    },
    list(req, res) {
      console.log(client, "clients");
        return client
        .findAll()
        .then(clients => res.status(200).json(ResponseFormat.build(
            clients,
            "Client Information Reterive successfully",
            200,
            "success"
        )))
        .catch(error => res.status(400).send(ResponseFormat.build(
            error,
            "Somthing went wrong when Reterieve Information",
            400,
            "error"
        )));
    },
    getClientDetails (req, res) {
        return client
        .findById(req.params.clientId)
        .then(clients => {

            if(!clients) {
                return res.status(404).json(
                    ResponseFormat.build(
                        {},
                        "No client found",
                        404,
                        "error"
                    )
                )
            }

            return res.status(200).json(
                ResponseFormat.build(
                    clients,
                    "Client information reterieve successfully",
                    200,
                    "success"
                )
            )
        })
        .catch(error => res.status(500).json(
            ResponseFormat.error(
                error,
                "Something went wrong when reterive the client details",
                500,
                "error"
            )
        ));
    },
    update(req, res) {
        return client
        .findById(req.params.clientId)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "Client not found",
                        404,
                        "error"
                    )
                );
            }

            return usr
            .update({
                firstname: req.body.firstname || usr.firstname,
                lastname: req.body.lastname || usr.lastname,
                email:  req.body.email || usr.email
            })
            .then(() => res.status(200).json(
                ResponseFormat.build(
                    usr,
                    "client Update successfully",
                    200,
                    "success"
                )
            ))
            .catch((error) => res.status(500).json(
                ResponseFormat.build(
                    {},
                    "someting went wrong when update the client",
                    500,
                    "error"
                )
            ));
        });
    },
    destroy (req, res) {
        return client
        .findById(req.params.clientId)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "client not found",
                        404,
                        "error"
                    )
                );
            }

            return usr
            .destroy()
            .then(() => res.status(200).json(
               ResponseFormat.build(
                 {},
                 "client deleted successfully",
                 200,
                 "success"
               )
            ))
            .catch(error => res.status(500).json(
                ResponseFormat.error(
                    error,
                    "someting went wrong when delete the client",
                    500,
                    "error"
                )
            ));
        });
    }
}
