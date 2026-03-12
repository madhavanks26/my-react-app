import Swal from 'sweetalert2';
// named function for success alert
export const showSuccessAlert = (textMessage) => {
        Swal.fire({
          title: 'Success!',
          text: textMessage,
          icon: 'success',
          confirmButtonText: 'OK'
        });
      };
// named function for failure alert
export const showFailureAlert=(textMessage) =>{
     Swal.fire({
          title: 'Failure',
          html: textMessage,
          icon: 'error',
          confirmButtonText: 'OK'
        });
}
// named function for confirmation alert

export const showConfirmationAlert =  (goodsIDValue,cb) =>{
      return  Swal.fire({
      title: "Are you sure?",
      text: `You want to delete ${goodsIDValue}`,
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result)=> {
      if(result.isConfirmed){
        cb(result.isConfirmed);
      }
    }
    );
    
}


