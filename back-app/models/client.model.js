const sql = require("../config.js");

// constructor
class Client {
  constructor(client) {
    this.firstname = client.firstname;
    this.lastname = client.lastname;
    this.email = client.email;
  }

    create = (newClient, result) => {
        sql.query("INSERT INTO clients SET ?", newClient, (err, res) => {
        if (err) {
            console.log("error: ", err);
            result(err, null);
            return;
        }

        console.log("created client: ", {...newClient });
        result(null, {...newClient });
        });
    };


    findById = (clientId, result) => {
      sql.query(`SELECT * FROM clients WHERE id = ${clientId}`, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(err, null);
          return;
        }

        if (res.length) {
          console.log("found client: ", res[0]);
          result(null, res[0]);
          return;
        }

        // not found client with the id
        result({ kind: "not_found" }, null);
      });
    };


    getAll = result => {
      sql.query("SELECT * FROM clients", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        console.log("clients: ", res);
        result(null, res);
      });
    };


    updateById = (id, client, result) => {
      sql.query(
        "UPDATE clients SET firstname = ?, lastname = ?, email = ? WHERE id = ?",
        [client.firstname, client.lastname, client.email, id],
        (err, res) => {
          if (err) {
            console.log("error: ", err);
            result(null, err);
            return;
          }

          if (res.affectedRows == 0) {
            // not found Customer with the id
            result({ kind: "not_found" }, null);
            return;
          }

          console.log("updated client: ", { id: id, ...client });
          result(null, { id: id, ...client });
        }
      );
    };


    remove = (id, result) => {
      sql.query("DELETE FROM clients WHERE id = ?", id, (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        if (res.affectedRows == 0) {
          // not found Customer with the id
          result({ kind: "not_found" }, null);
          return;
        }

        console.log("deleted client with id: ", id);
        result(null, res);
      });
    };


    removeAll = result => {
      sql.query("DELETE FROM clients", (err, res) => {
        if (err) {
          console.log("error: ", err);
          result(null, err);
          return;
        }

        console.log(`deleted ${res.affectedRows} clients`);
        result(null, res);
      });
    };
}


module.exports = Client;
