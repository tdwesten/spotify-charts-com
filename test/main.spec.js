const amply = require("./../src/main");
const assert = require("assert");

describe("The main module", function () {
	describe("The function getCharts", function () {
		it("Resolves the promise with a count high then 0", function () {
			//Act
			return amply.getCharts().then((result) => {
				assert.notStrictEqual(
					result.count,
					0,
					"The returned playlist is correct."
				);
			});
		});

		it("Resolves the promise with a expected count of objects", function () {
			//Act
			return amply.getCharts().then((result) => {
				assert.strictEqual(
					result.count,
					200,
					"The returned playlist is correct."
				);
			});
		});
	});
});
