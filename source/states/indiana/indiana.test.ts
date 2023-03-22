// Spec, as of 2017:
// - Format:
//   - `123A`
//   - `123AB`
//   - `123ABC`

import {testSerialFormat} from '../../../tests/helpers/index.js';
import indiana from './indiana.js';

describe('Indiana', () => {
	testSerialFormat(indiana(), /^\d{3}[A-Z]{1,3}$/);
});
