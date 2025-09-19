import API from "../index";

export const postLogin = async (body) => {
  try {
    const response = await API.post(
      `${process.env.REACT_APP_BASE_URL}/auth/login`,
      body,
      {}
    );
    return response.data;
  } catch (error) {
    if (error.response) {
      return error.response.data;
    } else {
      const res = {
        messsage: "Internal Server Error",
      };
      return res;
    }
  }
};
