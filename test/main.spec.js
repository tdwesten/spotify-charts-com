const amply = require('./../src/main');
const assert = require('assert');

describe('The main module', function () {
	describe('The function getCharts', function () {
		it('Resolves the promise with a count high then 0', function () {
			//Act
			return amply.getCharts().then((result) => {
				assert.notStrictEqual(
					result.count,
					0,
					'The result count is not zero.'
				);
			});
		});

		it('Resolves the promise with a list item count high then 0', function () {
			//Act
			return amply.getCharts().then((result) => {
				assert.notStrictEqual(
					result.list.length,
					0,
					'The result list items count is not zero.'
				);
			});
		});

		it('Resolves the promise with a expected count of objects', function () {
			//Act
			return amply.getCharts().then((result) => {
				assert.strictEqual(
					result.count,
					200,
					'The result count is correct.'
				);
			});
		});

		it('Resolves the promise with a list of item with the expexted keys', function () {
			//Act
			return amply.getCharts().then((result) => {
				assert(Object.keys(result.list[0]), [
					'place',
					'title',
					'artist',
					'streams',
					'url',
				]);
			});
		});
	});
});
