import { toast } from 'react-toastify';

type UseNotif = {
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

const useNotif = ({
  message,
  type = 'success',
  position = 'top-right'
}: UseNotif) => {
  toast[type](message, {
    position,
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: false,
    draggable: true,
    progress: undefined,
  });
}

export default useNotif;
