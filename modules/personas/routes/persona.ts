import * as express from 'express';
import { personaSchema } from './../schemas/persona';

const router = express.Router();

router.get('/persona', (req, res, next) => {
	personaSchema.find(function(err, persona) {
		if (err) {
			return err;
		}

		res.send(persona);
	 });

});

router.post('/persona', (req, res) => {
	const persona = new personaSchema(req.body);

	persona.save(function(err, persona) {
		if (err) {
			return err;
		}
		res.json(persona);
	});
});

router.put('/persona/:_id', (req, res, next) => {
	personaSchema.findByIdAndUpdate(req.params._id, req.body, { new: true }, (err, persona) => {
		if (err) {
			return err;
		}

		return res.send(persona);
	});
});

router.delete('/persona/:_id', (req, res, next) =>{
	personaSchema.findByIdAndRemove(req.params._id, function(err, persona) {
    if(err){
        console.log("Error", err);
	}
	console.log('Persona Borrada: ', persona);
});
});

export = router;