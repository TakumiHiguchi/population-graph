import { render, screen, fireEvent } from '@testing-library/react';
import { renderHook, act } from '@testing-library/react';
import { useCheckBox } from 'hooks/useInput';
import { CheckBoxType, CheckBoxPropsType } from 'types/input';
import { Primary } from 'components/molecules/CheckBox';
import '@testing-library/jest-dom';

describe('molecules/CheckBox/Primaryのテスト', () => {
	it('useCheckBoxのcheckedによってcheck状態が反映されること', () => {
		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(true, '', 'テスト', false),
		);
		render(<Primary id='test' name='test' {...result.current} />);

		const checkboxRole = screen.getByLabelText('テスト');
		expect(checkboxRole).toBeChecked();
	});

	it('useCheckBoxのlabelによってラベルが反映されること', () => {
		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(false, '', 'テスト', false),
		);
		act(() => {
			render(<Primary id='test' name='test' {...result.current} />);
		});
		const labelRole = screen.queryByText('テスト');
		expect(labelRole).toHaveTextContent('テスト');
	});

	it('ラベルをクリック時にuseCheckBoxチェック状態が変更されること', () => {
		const { result } = renderHook<CheckBoxType, CheckBoxPropsType>(() =>
			useCheckBox(false, '', 'テスト', false),
		);

		act(() => {
			render(<Primary id='test' name='test' {...result.current} />);
		});

		const labelRole = screen.getByLabelText('テスト');

		fireEvent.click(labelRole);

		expect(result.current.checked).toBe(true);
	});
});
