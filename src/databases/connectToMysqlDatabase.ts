import { createConnection } from 'mysql'

var mysqlConnection:any = {}

const connectToMysqlDatabase = () => {
    mysqlConnection = createConnection({
        host: process.env.MYSQL_HOST ?? "localhost",
        user: process.env.MYSQL_USER ?? "root",
        password: process.env.MYSQL_PASSWORD ?? "truongdinhduc",
        database: process.env.MYSQL_DATABASE ?? "sakila"
    });

    mysqlConnection.connect(function (err:any) {
        if (err) throw err;
        console.log("Connect to MySQL database successfully!");
    });
}

export {
    connectToMysqlDatabase,
    mysqlConnection
};