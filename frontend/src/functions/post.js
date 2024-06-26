import axios from "axios";

export const createPost = async (
  type,
  background,
  text,
  images,
  user,
  token
) => {
  try {
    const { data } = await axios.post(
      `${process.env.REACT_APP}/createPost`,
      {
        type,
        background,
        text,
        images,
        user,
        token,
      },
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );  

    return data;
  } catch (error) {
    return error.response.data.message;
  }
};
