const user = require('../models/Client');

const ResponseFormat = require('../utils').ResponseFormat;

module.exports = {
    create: (req, res) => {
        return user.create({
            firstname: req.body.firstname,
            lastname: req.body.lastname,
            email: req.body.email
        })
        .then(user => res.status(201).json(ResponseFormat.build(
            user,
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

    list: (req, res) => {
      console.log(user, "users");
        return user
        .findAll()
        .then(users => res.status(200).json(ResponseFormat.build(
            users,
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

    show: (req, res) => {
        return user
        .findById(req.params.id)
        .then(users => {

            if(!users) {
                return res.status(404).json(
                    ResponseFormat.build(
                        {},
                        "No user found",
                        404,
                        "error"
                    )
                )
            }

            return res.status(200).json(
                ResponseFormat.build(
                    users,
                    "Client information reterieve successfully",
                    200,
                    "success"
                )
            )
        })
        .catch(error => res.status(500).json(
            ResponseFormat.error(
                error,
                "Something went wrong when reterive the user details",
                500,
                "error"
            )
        ));
    },

    update: (req, res) => {
        return user
        .findById(req.params.id)
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
                    "user Update successfully",
                    200,
                    "success"
                )
            ))
            .catch((error) => res.status(500).json(
                ResponseFormat.build(
                    {},
                    "someting went wrong when update the user",
                    500,
                    "error"
                )
            ));
        });
    },

    destroy: (req, res) => {
        return user
        .findById(req.params.id)
        .then(usr => {
            if(!usr) {
                return res.status(404).json(
                    ResponseFormat.error(
                        {},
                        "user not found",
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
                 "user deleted successfully",
                 200,
                 "success"
               )
            ))
            .catch(error => res.status(500).json(
                ResponseFormat.error(
                    error,
                    "someting went wrong when delete the user",
                    500,
                    "error"
                )
            ));
        });
    }
}
