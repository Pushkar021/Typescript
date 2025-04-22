// Enum declaration mixing string and numeric values
enum Options {
    // This member is auto-initialized to 0 (numeric)
    "PO",                          // PO = 0

    // This is a string enum member
    Up = "sfdss",

    // This is a numeric enum member
    Down = 69,

    // This will be auto-initialized to 70, since the previous numeric value was 69
    "po",                          // po = 70

    // Another string enum member
    Right = "You pressed the right key",

    // If you try to write something like: Left, or Left == 
    // without a value (after a string enum), it causes an error
    // because once a string enum member is used, all members below must be explicitly initialized
    // "Left"     ❌ Error: Enum member must have initializer
}

// Function that takes an enum value and logs a message based on the value
function keyPressed(args: Options) {
    if (args == Options.Up) {
        console.log("up here ")
    }
    else if (args == Options.Right) {
        console.log(Options.Right)
    }
    else if (args == Options.Down) {
        console.log("down here")
    }
    else if (args == Options.po) {
        console.log(Options.po) // This will print 70
    }
}

// Get the value of the enum member 'po', which is 70
const direction = Options.po;

// Call the function with 'po' as argument
keyPressed(direction);  // This prints: 70


//example of enum with express 
// enum ResponseStatus {
//     Success = 200,
//     NotFound = 404,
//     Error = 500
// }

// app.get("/', (req, res) => {
//     if (!req.query.userId) {
// 			res.status(ResponseStatus.Error).json({})
//     }
//     // and so on...
// 		res.status(ResponseStatus.Success).json({});
// })