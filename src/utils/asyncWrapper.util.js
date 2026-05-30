// Higher-order function that wraps async controllers
// and forwards errors to Express error middleware.

function asyncwrapper(fn) {

    //returning the Promise
    return (req,res,next) => {
         
        // Made the promise to handle the async and non async controller
        Promise.resolve(fn(req,res,next))
         .catch(err => next(err))
    }
}

export default asyncwrapper