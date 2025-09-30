import API from "../index";

export const getProducts = async (params) => {
  let query = []

  if (params.q.length > 0) {
    query.push(`q=${params.q}`)
  }
  if (params.skip > 0) {
    query.push(`skip=${params.skip}`)
  }
  if (params.limit > 0) {
    query.push(`limit=${params.limit}`)
  }

  let finalParam = query.length > 0 ? `?${query.join('&')}` : ""

  try {
    const response = await API.get(
      `${process.env.REACT_APP_BASE_URL}/products${finalParam}`
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
