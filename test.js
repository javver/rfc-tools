import test from 'ava';
import tools from './';

test('exposes the factory and validator submodules', t => {

	t.ok(tools.factory);
	t.ok(tools.validator);

});

test('public api for factory', t => {

	var factory = tools.factory;

	t.ok(factory.createPersonaMoral);
	t.ok(factory.createPersonaMoral.constructor === Function);

	t.ok(factory.createPersonaFisica);
	t.ok(factory.createPersonaFisica.constructor === Function);

});

test('public api for validator', t => {

	var validator = tools.validator;

	t.ok(validator.validatePersonaMoral);
	t.ok(validator.validatePersonaMoral.constructor === Function);

	t.ok(validator.validatePersonaFisica.constructor === Function);

});
