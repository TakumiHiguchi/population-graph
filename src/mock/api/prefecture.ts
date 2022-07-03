import { MockedRequest, ResponseResolver, restContext } from 'msw';

export const prefectures: ResponseResolver<MockedRequest, typeof restContext> =
	(req, res, ctx) => {
		if (
			!req.headers.get('X-API-KEY') ||
			req.headers.get('X-API-KEY') == 'error'
		) {
			return res(
				ctx.status(200),
				ctx.json({ statusCode: '403', message: 'Forbidden.', description: '' }),
			);
		}
		return res(
			ctx.status(200),
			ctx.json({
				message: '',
				result: [
					{ prefCode: 1, prefName: '北海道' },
					{ prefCode: 2, prefName: '青森県' },
					{ prefCode: 3, prefName: '岩手県' },
					{ prefCode: 4, prefName: '宮城県' },
					{ prefCode: 5, prefName: '秋田県' },
					{ prefCode: 46, prefName: '鹿児島県' },
					{ prefCode: 47, prefName: '沖縄県' },
				],
			}),
		);
	};
