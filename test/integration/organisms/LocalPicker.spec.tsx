import { render, screen, fireEvent } from '@testing-library/react';
import LocalPicker from 'components/organisms/LocalPicker';
import '@testing-library/jest-dom';
import { localNames } from 'utils/local';
import { backGroundColor } from 'styles/color';

describe('organisms/localPickerのテスト', () => {
	it('全ての地方が表示されていること', () => {
		const checkedPrefectures: string[] = [];
		render(
			<LocalPicker
				checkedPrefectures={checkedPrefectures}
				append={() => jest.fn()}
				remove={() => jest.fn()}
			/>,
		);
		Object.keys(localNames).map((key: string) => {
			const container = screen.getByText(localNames[key]);
			expect(container).toHaveTextContent(localNames[key]);
		});
	});

	it('地方に含まれる都道府県が全て選択されている時ボタン背景が変わること', () => {
		const checkedPrefectures: string[] = [
			'青森県',
			'秋田県',
			'岩手県',
			'山形県',
			'宮城県',
			'福島県',
		];

		render(
			<LocalPicker
				checkedPrefectures={checkedPrefectures}
				append={() => jest.fn()}
				remove={() => jest.fn()}
			/>,
		);

		const container0 = screen.getAllByRole('button')[0];
		const container1 = screen.getAllByRole('button')[1];
		expect(container0).toHaveStyle(
			`background-color: ${backGroundColor.pastel.bluePurple.bluePurple15}`,
		);
		expect(container1).toHaveStyle(
			`background-color: ${backGroundColor.primary}`,
		);
	});

	it('地方に含まれる都道府県が全て選択されている時ボタンをクリックするとremovedが実行されること', () => {
		const testMock = jest.fn();
		const checkedPrefectures: string[] = [
			'青森県',
			'秋田県',
			'岩手県',
			'山形県',
			'宮城県',
			'福島県',
		];

		render(
			<LocalPicker
				checkedPrefectures={checkedPrefectures}
				append={() => jest.fn()}
				remove={() => testMock()}
			/>,
		);

		const container = screen.getAllByRole('button')[0];
		expect(container).toHaveStyle(
			`background-color: ${backGroundColor.pastel.bluePurple.bluePurple15}`,
		);

		fireEvent.click(container);

		expect(testMock).toHaveBeenCalled();
	});

	it('地方に含まれる都道府県が全て選択されていない時ボタンをクリックするとappendが実行されること', () => {
		const testMock = jest.fn();
		const checkedPrefectures: string[] = [];

		render(
			<LocalPicker
				checkedPrefectures={checkedPrefectures}
				append={() => testMock()}
				remove={() => jest.fn()}
			/>,
		);

		const container = screen.getAllByRole('button')[0];
		expect(container).toHaveStyle(
			`background-color: ${backGroundColor.primary}`,
		);

		fireEvent.click(container);

		expect(testMock).toHaveBeenCalled();
	});
});
