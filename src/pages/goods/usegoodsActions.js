import { useState } from "react";
import { listGoods,deleteGood } from "../../util/api";
import {
  showConfirmationAlert,
  showSuccessAlert,
  showFailureAlert,
} from "../../util/alert";
// export custom hook for goods Actions
export const useGoodsActions = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // function to call the listgoods API and get it displayed
  const displayGoods = async () => {
    try {
      const listGoodsResponse = await listGoods();
      console.log(listGoodsResponse);
      setPosts(listGoodsResponse.data[0]);
    } catch (err) {
      setError(err.message);
    }
  };

  // function to call delete goods
  const deleteGoodByID = (value) => {
    console.log(value);
    const deleteGoodId = { goodsId: value };
    showConfirmationAlert(value, function (responseOfConfirmation) {
      try {
        console.log(responseOfConfirmation);
        if (responseOfConfirmation) {
          const deleteAPIResponse = deleteGood(deleteGoodId);
          console.log(deleteAPIResponse.data);
          showSuccessAlert(`Good with ID ${value} deleted Successfully`);
          displayGoods();
        }
      } catch (error) {
        console.error("Status:", error.response?.status);
        console.error("Message:", error.response?.data?.error);
        //alert("Failed to submit form");
        const html =
          "<h3>" +
          error.response?.status +
          "</h3><br/><h4>" +
          error.response?.data?.error +
          "</h4>";
        showFailureAlert(html);
      }
    });
  };
  return { posts, error, displayGoods, deleteGoodByID };
};
