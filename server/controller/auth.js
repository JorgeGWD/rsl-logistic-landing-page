exports.register = (req, res) => {
    console.log(req.body);
    res.sent('Form submitted');
};