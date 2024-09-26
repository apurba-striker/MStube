const ansyncHandler = (requestHandler) => {
    (req, res, next) => {
        Promise.response(requestHandler(req, res, next)).catch((err) =>next(err))
    }
}





export {ansyncHandler}