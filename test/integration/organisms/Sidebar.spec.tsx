import {
	fireEvent,
	render,
	renderHook,
	screen,
	act,
} from '@testing-library/react';
import Sidebar from 'components/organisms/Sidebar';
import '@testing-library/jest-dom';
import { PrefectureType } from 'types';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';

describe('oragnisms/Sidebarのテスト', () => {
	let prefecturesMock: PrefectureType[] = [];

	beforeAll(async () => {
		const { result } = renderHook(() => usePrefecturesApi('test'));

		await act(async () => {
			await new Promise((resolve) => {
				setTimeout(resolve, 1000);
			});
		});

		prefecturesMock = result.current.data;
	});

	it('都道府県の文字が画面上に反映されること', () => {
		act(() => {
			render(
				<Sidebar
					className=''
					prefectures={prefecturesMock}
					handleChangeCheckBoxState={() => jest.fn()}
				/>,
			);
		});

		const container = screen.queryByText('都道府県');
		expect(container).toHaveTextContent('都道府県');
	});

	it('apiから取得してきた都道府県のデータ全てが画面上に反映されること', () => {
		act(() => {
			render(
				<Sidebar
					className=''
					prefectures={prefecturesMock}
					handleChangeCheckBoxState={() => jest.fn()}
				/>,
			);
		});
		prefecturesMock.map((prefecture) => {
			const container = screen.queryByText(prefecture.prefName);
			expect(container).toHaveTextContent(prefecture.prefName);
		});
	});

	it('チェックボックスクリック時にhandleCheckBoxClickが実行されること', () => {
		const handleCheckBoxClickMock = jest.fn();

		act(() => {
			render(
				<Sidebar
					className=''
					prefectures={prefecturesMock}
					handleChangeCheckBoxState={() => handleCheckBoxClickMock()}
				/>,
			);
		});

		const container = screen.getByText(prefecturesMock[0].prefName);

		act(() => {
			fireEvent.click(container);
		});

		expect(handleCheckBoxClickMock).toHaveBeenCalled();
	});
});
