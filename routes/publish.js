function publish(req, res, next) {
    console.log('in publish', req.body);
    res.status(200).send('publish');
};


module.exports = { publish };