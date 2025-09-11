import Swal from 'sweetalert2';
// named function
export const showSuccessAlert = (textMessage) => {
        Swal.fire({
          title: 'Success!',
          text: textMessage,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      };
// named function
export const showFailureAlert=(textMessage) =>{
     Swal.fire({
          title: 'Failure',
          html: textMessage,
          icon: 'error',
          confirmButtonText: 'OK'
        });
}

