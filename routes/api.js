var express = require('express');
var router = express.Router();

router.get('/:resource', function(req, res, next) {
	var resource = req.params.resource
	if(resource == 'starwars'){
		console.log('nam?  ')

		res.json({
			confirmation: 'success',
			resource: resource
		});
	};
});

module.exports = router;
