import { renderHook, act } from '@testing-library/react';
import { usePrefecturesCheckBox } from 'components/organisms/Sidebar/hooks';
import { usePrefecturesApi } from 'hooks/api/prefecture/usePrefecturesApi';
import { ChangeEvent } from 'react';
import { PrefectureType } from 'types';

describe('useCheckBoxのテスト', () => {
	let prefecturesMock: PrefectureType[] = [];

	beforeAll(async () => {
		const { result } = renderHook(() => usePrefecturesApi('test'));

		await act(async () => {
			/* usePrefecturesApiからdataが帰ってくるまで待つ */
			await new Promise((resolve) => {
				setTimeout(resolve, 1000);
			});
		});

		prefecturesMock = result.current.data;
	});

	it('prefectureNamesの値がprefectureで初期化されること', () => {
		const prefectureNames = prefecturesMock.map(
			(prefecture) => prefecture.prefName,
		);

		const { result } = renderHook(() =>
			usePrefecturesCheckBox(prefecturesMock),
		);

		expect(result.current.prefectureNames).toEqual(prefectureNames);
	});

	it('setCheckedPrefecturesを実行するとcheckedPrefecturesが更新されること', () => {
		const checkedPrefectures = ['青森県'];

		const { result } = renderHook(() =>
			usePrefecturesCheckBox(prefecturesMock),
		);

		act(() => {
			result.current.actions.setCheckedPrefectures(checkedPrefectures);
		});

		expect(result.current.checkedPrefectures).toEqual(checkedPrefectures);
	});

	it('setCheckedPrefecturesを実行すると適切なprefIdsが返ること', () => {
		const checkedPrefectures = ['岩手県'];
		let prefectureIds: number[] = [];

		const { result } = renderHook(() =>
			usePrefecturesCheckBox(prefecturesMock),
		);

		act(() => {
			prefectureIds =
				result.current.actions.setCheckedPrefectures(checkedPrefectures);
		});

		expect(prefectureIds).toEqual([3]);
	});

	it('checkedPrefecturesに含まれていないラベルのチェックボックスでonChangeを実行するとcheckedPrefecturesが更新されること', () => {
		const changeEventMock = <ChangeEvent<HTMLInputElement>>{
			target: {
				checked: true,
				value: '岩手県',
			},
		};

		const { result } = renderHook(() =>
			usePrefecturesCheckBox(prefecturesMock),
		);

		act(() => {
			result.current.actions.onChange(changeEventMock);
		});

		expect(result.current.checkedPrefectures).toEqual(['岩手県']);
	});

	it('checkedPrefecturesに含まれているラベルのチェックボックスでonChangeを実行するとcheckedPrefecturesが更新されること', () => {
		const changeEventMock = <ChangeEvent<HTMLInputElement>>{
			target: {
				checked: false,
				value: '岩手県',
			},
		};

		const { result } = renderHook(() =>
			usePrefecturesCheckBox(prefecturesMock),
		);

		act(() => {
			result.current.actions.setCheckedPrefectures(['岩手県']);
			result.current.actions.onChange(changeEventMock);
		});

		expect(result.current.checkedPrefectures).toEqual([]);
	});

	it('onChangeを実行すると適切なprefIdsが返ること', () => {
		const changeEventMock = <ChangeEvent<HTMLInputElement>>{
			target: {
				checked: true,
				value: '岩手県',
			},
		};
		let prefectureIds: number[] = [];

		const { result } = renderHook(() =>
			usePrefecturesCheckBox(prefecturesMock),
		);

		act(() => {
			prefectureIds = result.current.actions.onChange(changeEventMock);
		});

		expect(prefectureIds).toEqual([3]);
	});
});
