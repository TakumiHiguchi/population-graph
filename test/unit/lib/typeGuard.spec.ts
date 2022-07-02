import { isResasAPIFaildResponseType } from 'lib/typeGuard/api';
import { ResasAPIFaildResponseType } from 'types';

describe('typeGuard/apiのテスト', () => {
	it('ResasAPIFaildResponseTypeが判定できること', () => {
		const faildResponse: ResasAPIFaildResponseType = {
			statusCode: '404',
			message: '',
			description: '',
		};
		expect(isResasAPIFaildResponseType(faildResponse)).toBe(true);
		expect(isResasAPIFaildResponseType({ des: '' })).toBe(false);
	});
});
