const connection=require('./database');
  connection.execute('SELECT * FROM')
  .then((result) => {
    console.log(result[0]);
    
  }).catch((err) => {
    console.log(err);
  });