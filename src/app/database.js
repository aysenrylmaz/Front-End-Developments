const mysql=require('mysql2');
const connection=mysql.createConnection({
host:'localhost',
user:'root',
database:'mod_school',
password:'767272Ay.*'
});
console.log('dee')
module.exports=connection.promise();