function save(req, res, next) {
    console.log('in save', req.body);
    res.status(200).send('Saved');
};


module.exports = { save };