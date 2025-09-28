import API from "../index";

export const getProducts = async () => {
  try {
    const response = await API.get(
      `${process.env.REACT_APP_BASE_URL}/products`
    );
    return response.data;
  } catch (error) {
    if(error.response) {
      return error.response.data;
    } else {
      const res = {
        message: "Internal Server Error"
      };
      return res;
    }
  }
};
