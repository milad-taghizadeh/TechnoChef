const joi = require('joi');

// USER JOI MODEL  (A model for validation)
const model = joi.object({
	shortName: joi.string().max(10),
	productName: joi.string(),
	price: joi.number().positive(),
	categories: joi.array(),
	colors: joi.object({
		gradin: joi.array().max(2),
		title: joi.array().max(1),
		productColor: joi.array()
	}),
	QTY: joi.number().positive(),
	discount: joi.number().min(0).max(100),
	images: joi.array().max(5),
	description: joi.string(),
	best_seller: joi.boolean(),
	_id: joi.object()
});

// export the models
module.exports = model;
