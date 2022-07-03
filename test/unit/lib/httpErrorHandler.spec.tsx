import { httpErrorHandler } from 'lib/httpErrorHandler';
import { ResasAPIFaildResponseType } from 'types';
import { screen, render } from '@testing-library/react';
import { ToastContainer } from 'react-toastify';
import '@testing-library/jest-dom';
import { AxiosError } from 'axios';

describe('httpErrorhandlerのテスト', () => {
	it('errorがResasAPIFaildResponseTypeで403の時「APIKeyが不正です。🤔」と表示されること', async () => {
		const text = 'APIKeyが不正です。🤔';
		const error: ResasAPIFaildResponseType = {
			statusCode: '403',
			message: '',
			description: '',
		};
		render(<ToastContainer />);

		httpErrorHandler(error);
		const container = await screen.findByText(text);
		expect(container).toHaveTextContent(text);
	});

	it('errorがAxiosErrorの時「{error.message} 😭」と表示されること', async () => {
		const text = 'テストテストです 😭';
		const error = {
			message: 'テストテストです',
		};

		render(<ToastContainer />);

		httpErrorHandler(error as AxiosError);
		const container = await screen.findByText(text);
		expect(container).toHaveTextContent(text);
	});
});
