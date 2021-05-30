const express = require('express');
const {fork} = require('child_process');

const app = express();

app.get('/fibonacci', (req,res) => {
  const childProcess= fork('./child.js');

  childProcess.send({"number" : parseInt(req.query.number)});
  childProcess.on('message', message => res.send(message));
});

app.listen(3001, () => {
  console.log("Server Running");
})