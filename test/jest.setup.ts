import '@testing-library/jest-dom/extend-expect';
import { renderHook, act } from '@testing-library/react';
import { server } from 'mock/worker';
import { useSWRConfig } from 'swr';

beforeAll(() => {
	server.listen();
});

afterEach(() => {
	const { result } = renderHook(() => useSWRConfig());
	act(() => result.current.cache.clear());
	server.resetHandlers();
	jest.resetAllMocks();
});

afterAll(() => {
	server.close();
});
