import { toast } from 'react-toastify';

const useNotif = (
  {
    message,
    type = 'success',
    position = 'top-right'
  }: {
    message: string;
    type?: 'success' | 'error' | 'info' | 'warning';
    position?:
      'top-right' |
      'top-center' |
      'top-left' |
      'bottom-right' |
      'bottom-center' |
      'bottom-left';
  }
) => {
  toast[type](message, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
};

export default useNotif;
