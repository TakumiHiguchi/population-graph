import { renderHook, act } from '@testing-library/react';
import { useCheckBox } from 'hooks/useInput';
import { ChangeEvent } from 'react';
import { CheckBoxType, CheckBoxPropsType } from 'types/input';

describe('useCheckBoxのテスト', () => {
	it('checkedの値が第1引数で初期化できること', () => {
		const checked = false;
		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(checked, '', '', false),
		);
		expect(result.current.checked).toBe(checked);
	});

	it('valueの値が第2引数で初期化できること', () => {
		const value = 'value';
		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(false, value, '', false),
		);
		expect(result.current.value).toBe(value);
	});

	it('labelの値が第3引数で初期化できること', () => {
		const label = 'テスト';
		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(false, '', label, false),
		);
		expect(result.current.label).toBe(label);
	});

	it('requiredの値が第3引数で初期化できること', () => {
		const required = true;
		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(false, '', '', required),
		);
		expect(result.current.required).toBe(required);
	});

	it('onChangeを呼ぶとcheckedが期待通りの値に変更されること', () => {
		const event = {
			target: {
				checked: true,
			},
		};

		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(false, '', '', false),
		);

		act(() => {
			result.current.onChange(event as ChangeEvent<HTMLInputElement>);
		});

		expect(result.current.checked).toBe(event.target.checked);
	});
});
