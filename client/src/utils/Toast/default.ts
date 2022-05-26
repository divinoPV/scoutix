import { toast as origin } from 'react-toastify';
import { ToastOptions } from 'react-toastify/dist/types';

const options: ToastOptions = {
  position: 'top-right',
  autoClose: 5000,
  hideProgressBar: false,
  closeOnClick: true,
  pauseOnHover: true,
  draggable: true,
  progress: undefined,
};

export const toast = (
  content: string,
  type: 'info' | 'success' | 'error' | 'warning' | 'default' = 'default',
) => ({
  'info': origin.info,
  'success': origin.success,
  'error': origin.error,
  'warning': origin.warning,
  'default': origin,
}[type](content, options));

export default toast;
