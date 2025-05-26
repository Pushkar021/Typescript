// Importing Express and required types
import express, { Request, Response } from 'express';

enum statuscode{
    Success=200,
    err=500
}

// Creating an instance of Express
const app = express();

// Defining a simple route
app.get('/', (req: Request, res: Response) => {
    if(!req.query.userID){
        res.status(statuscode.err).json({
            msg:"an Error occured!"
        })
    }
    res.status(statuscode.Success).json({
        msg:"hello world!"
    })
    
});

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
