/** Error Handling Functions */


const handle404 = (req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
};

const handleGeneral = (err, req, res, next) => {
    res.status = err.status;
    console.log(err.message, err.status);
    res.render('error', { err });
};

module.exports = { handle404, handleGeneral };