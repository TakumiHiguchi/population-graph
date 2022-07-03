import { render, screen } from '@testing-library/react';
import DummySidebar from 'components/organisms/DummySidebar';
import '@testing-library/jest-dom';

describe('oragnisms/DummySidebarのテスト', () => {
	it('都道府県の文字が画面上に反映されること', () => {
		render(<DummySidebar className='' />);

		const container = screen.queryByText('都道府県');
		expect(container).toHaveTextContent('都道府県');
	});
});
