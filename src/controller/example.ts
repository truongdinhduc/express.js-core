import express from 'express'
import { mysqlConnection } from '../databases/connectToMysqlDatabase'

const exampleRoute = async (req: express.Request, res: express.Response) => {
    try {
        res.send('Connect to server successfully.')
    } catch (error) { }
}

const mysqlQueryExample = async (req: express.Request, res: express.Response) => {
    try {
        mysqlConnection.query("SELECT * FROM city", function (err:any, result:any, fields:any) {
            if (err) throw err;
            res.send(result)
        });
    } catch (error) { }
}

export {
    exampleRoute,
    mysqlQueryExample
}