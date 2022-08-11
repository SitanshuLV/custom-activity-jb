function validate(req, res, next) {
    console.log('in validate', req.body);
    res.status(200).send('validate');
};


module.exports = { validate };