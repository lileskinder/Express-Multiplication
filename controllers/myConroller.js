module.exports.multiplication = function(req, res) {
    
    let num1 = parseInt(req.params.num1);
    let num2 = parseInt(req.query.num2);

    const multipy = num1 * num2;

    console.log("num1 * num2 ", multipy);

    res.status(200).json({"Result": multipy});

};