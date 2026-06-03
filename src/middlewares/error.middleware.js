// Making a funciton to handle the errors gloablly
function errorMiddleware(err, req, res, next) {
console.log("========== ERROR ==========");
    console.log(err);
    console.log("===========================");
    // sending the error
    res.status(err.statusCode || 500).json({
        success: false,
        message: err.message || "Internal Server Error"
    });

}

export default errorMiddleware;