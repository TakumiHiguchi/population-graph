import { isResasAPIFaildResponseType } from 'lib/typeGuard/api';
import { ResasAPIFaildResponseType } from 'types';
import { toast } from 'react-toastify';
import { AxiosError } from 'axios';

export const httpErrorHandler = (
	error: ResasAPIFaildResponseType | AxiosError,
) => {
	if (isResasAPIFaildResponseType(error)) {
		switch (error.statusCode) {
			case '403':
				toast.error('APIKeyが不正です。🤔', {
					position: 'top-right',
					autoClose: 5000,
					hideProgressBar: false,
					closeOnClick: true,
					pauseOnHover: true,
					draggable: true,
					progress: undefined,
				});
		}
	} else {
		toast.error(`${error.message} 😭`, {
			position: 'top-right',
			autoClose: 5000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
		});
	}
};
