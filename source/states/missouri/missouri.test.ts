// Spec (as of 2008-06-16):
// - Format: `XA1 B2C`, where `X` corresponds to month of expiration

import missouri from './missouri';
import {testSerialFormat} from '../../../tests/helpers';

describe('Missouri', () => {
	testSerialFormat(missouri(), /^[A-HJ-NPR-Z][A-Z]\d [A-Z]\d[A-Z]$/);
});
