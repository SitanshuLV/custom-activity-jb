function stop(req, res, next) {
    console.log('in stop', req.body);
    res.status(200).send('stop');
};


module.exports = { stop };