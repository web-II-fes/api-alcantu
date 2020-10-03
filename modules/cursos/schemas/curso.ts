import { Schema, model } from 'mongoose';

const schemaCurso = new Schema({
	nombreCurso: { type: String, lowercase: true},
	profesor: { type: String, lowercase: true},
    anio: Number,
    estado: { type: String, lowercase: true}
});

export let cursoSchema = model('schemaCurso', schemaCurso, 'cursos');