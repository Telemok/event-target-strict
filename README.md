# valda (VALiDAtor)

[valda] https://github.com/Telemok/valda is a JavaScript ES6 library for fast short easy analyse, assert, check, parse, validate input fields and json responses.

## Features

- Function arguments parsing, validation and assertion
- Form fields parsing, validation and assertion
- JSON REST parsing
- Type checking and converting
- Fast and easy to learn
- No schemas
- NodeJs and browser Javascript support

## Instalation:
1. Create your NodeJs, Browser or Webview app.
2. import { valda } from ".../valda.min.js"

## Functionality:

```javascript

// valda.*** return true if OK, false if not OK
valda.defined.is = (value);
valda.boolean.is = (value);
valda.number.is = (value);
valda.numberMinMax.is = (value, minimal = Number.NEGATIVE_INFINITY, maximal = Number.POSITIVE_INFINITY);
valda.numberMin.is = (value, minimal = Number.NEGATIVE_INFINITY);
valda.numberMax.is = (value, maximal = Number.POSITIVE_INFINITY);
valda.integerMinMax.is = (value, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER);
valda.integer.is = (value);
valda.integerMin.is = (value, minimal = Number.MIN_SAFE_INTEGER);
valda.integerMax.is = (value, maximal = Number.MAX_SAFE_INTEGER);
valda.object.is = (value);
valda.array.is = (value);
valda.uint8Array.is = (value);
valda.string.is = (value);
valda.function.is = (value);
valda.extends.is = (value, ParentClass);
valda.instance.is = (value, Class);
valda.varName.is = (value);
valda.hex.is = (value);
valda.hexFixed.is = (value, sizeBytes);

// valda.*** return false if OK, description why wrong if not OK
valda.defined.whyNot = (value);
valda.boolean.whyNot = (value);
valda.number.whyNot = (value);
valda.numberMinMax.whyNot = (value, minimal = Number.NEGATIVE_INFINITY, maximal = Number.POSITIVE_INFINITY);
valda.numberMin.whyNot = (value, minimal = Number.NEGATIVE_INFINITY);
valda.numberMax.whyNot = (value, maximal = Number.POSITIVE_INFINITY);
valda.integerMinMax.whyNot = (value, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER);
valda.integer.whyNot = (value);
valda.integerMin.whyNot = (value, minimal = Number.MIN_SAFE_INTEGER);
valda.integerMax.whyNot = (value, maximal = Number.MAX_SAFE_INTEGER);
valda.object.whyNot = (value);
valda.array.whyNot = (value);
valda.uint8Array.whyNot = (value);
valda.string.whyNot = (value);
valda.function.whyNot = (value);
valda.extends.whyNot = (value, ParentClass);
valda.instance.whyNot = (value, Class);
valda.varName.whyNot = (value);
valda.hex.whyNot = (value);
valda.hexFixed.whyNot = (value, sizeBytes);

// valda.*** return false if OK, codeWhyNot why wrong if not OK
valda.defined.codeWhyNot = (value);
valda.boolean.codeWhyNot = (value);
valda.number.codeWhyNot = (value);
valda.numberMinMax.codeWhyNot = (value, minimal = Number.NEGATIVE_INFINITY, maximal = Number.POSITIVE_INFINITY);
valda.numberMin.codeWhyNot = (value, minimal = Number.NEGATIVE_INFINITY);
valda.numberMax.codeWhyNot = (value, maximal = Number.POSITIVE_INFINITY);
valda.integerMinMax.codeWhyNot = (value, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER);
valda.integer.codeWhyNot = (value);
valda.integerMin.codeWhyNot = (value, minimal = Number.MIN_SAFE_INTEGER);
valda.integerMax.codeWhyNot = (value, maximal = Number.MAX_SAFE_INTEGER);
valda.object.codeWhyNot = (value);
valda.array.codeWhyNot = (value);
valda.uint8Array.codeWhyNot = (value);
valda.string.codeWhyNot = (value);
valda.function.codeWhyNot = (value);
valda.extends.codeWhyNot = (value, ParentClass);
valda.instance.codeWhyNot = (value, Class);
valda.varName.codeWhyNot = (value);
valda.hex.codeWhyNot = (value);
valda.hexFixed.codeWhyNot = (value, sizeBytes);

// valda.*** return fixed value if OK, throw description if not OK
valda.defined.assert = (value, callback);
valda.boolean.assert = (value, callback);
valda.number.assert = (value, callback);
valda.numberMinMax.assert = (value, minimal = Number.NEGATIVE_INFINITY, maximal = Number.POSITIVE_INFINITY, callback);
valda.numberMin.assert = (value, minimal = Number.NEGATIVE_INFINITY, callback);
valda.numberMax.assert = (value, maximal = Number.POSITIVE_INFINITY, callback);
valda.integerMinMax.assert = (value, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER, callback);
valda.integer.assert = (value, callback);
valda.integerMin.assert = (value, minimal = Number.MIN_SAFE_INTEGER, callback);
valda.integerMax.assert = (value, maximal = Number.MAX_SAFE_INTEGER, callback);
valda.object.assert = (value, callback);
valda.array.assert = (value, callback);
valda.uint8Array.assert = (value, callback);
valda.string.assert = (value, callback);
valda.function.assert = (value, callback);
valda.extends.assert = (value, ParentClass, callback);
valda.instance.assert = (value, Class, callback);
valda.varName.assert = (value, callback);
valda.hex.assert = (value, callback);
valda.hexFixed.assert = (value, sizeBytes, callback);

// valda.*** return fixed value if OK, throw description if not OK
valda.defined.parse = (parameters, key, callback);
valda.boolean.parse = (parameters, key, callback);
valda.number.parse = (parameters, key, callback);
valda.numberMinMax.parse = (parameters, key, minimal = Number.NEGATIVE_INFINITY, maximal = Number.POSITIVE_INFINITY, callback);
valda.numberMin.parse = (parameters, key, minimal = Number.NEGATIVE_INFINITY, callback);
valda.numberMax.parse = (parameters, key, maximal = Number.POSITIVE_INFINITY, callback);
valda.integerMinMax.parse = (parameters, key, minimal = Number.MIN_SAFE_INTEGER, maximal = Number.MAX_SAFE_INTEGER, callback);
valda.integer.parse = (parameters, key, callback);
valda.integerMin.parse = (parameters, key, minimal = Number.MIN_SAFE_INTEGER, callback);
valda.integerMax.parse = (parameters, key, maximal = Number.MAX_SAFE_INTEGER, callback);
valda.object.parse = (parameters, key, callback);
valda.array.parse = (parameters, key, callback);
valda.uint8Array.parse = (parameters, key, callback);
valda.string.parse = (parameters, key, callback);
valda.function.parse = (parameters, key, callback);
valda.extends.parse = (parameters, key, ParentClass, callback);
valda.instance.parse = (parameters, key, Class, callback);
valda.varName.parse = (parameters, key, callback);
valda.hex.parse = (parameters, key, callback);
valda.hexFixed.parse = (parameters, key, sizeBytes, callback);
```

## Examples:

1. Parsing students database

  ```javascript
  import { valda } from "http://127.0.0.1:8080/lib/valda.js"

function parseStudents(json, count, sort = "AGE") {
	json = valda.string.assert(json); /* json must be string or throw */
	count = valda.integerMin.assert(count, 1); /* count must be 16 <= integer or throw */
	sort = valda.enum.assert(sort, ['AGE', 'MARKS', 'NAME']); /* sort must be 'AGE', 'MARKS', 'NAME' or throw */

	let obj = JSON.parse(json); /* json must be json or throw */
	let timestamp = valda.number.parse(obj, 'timestamp'); /* json must be number or throw */
	let data = valda.array.parse(obj, 'data'); /* data must be array or throw */
	//for (let line of Object.values(data)) {
	for (let i = 0; i < count && i < data.length; i++)
	{
		let line = data[i];
		let age = valda.integerMinMax.parse(line, 'age', 16, 150); /* age must be  16 <= integer <= 150 or throw */
		let name = valda.string.parse(line, 'name'); /* name must be sting or throw */
		if (name.length > 100)
			throw new Error(`Wrong student name length (${name.length}) > 100`);
		let averageMark = valda.numberMinMax.parse(line, 'averageMark', 0, 10);
		let studentId = valda.integerMin.parse(line, 'studentId', 1);
		console.log(`Parsed student #${studentId} with name "${name}" age (${age}) and average mark (${averageMark})! Timestamp is: ${timestamp}.`)
	}
}

let exampleObject = {
	timestamp: 1600000000,
	data: [{
		age: 20,
		name: "John Smith",
		averageMark: 7.7,
		studentId: 0x6354,
	},{
		age: 19,
		name: "Bogdan Hmelnitskiy",
		averageMark: 8.7,
		studentId: 0x1596,
	},]
};

parseStudents(JSON.stringify(exampleObject), 2)
  ```

