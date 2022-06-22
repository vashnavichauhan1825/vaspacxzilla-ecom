import axios from "axios";

export const useSignUp = async () => {
  try {
    const response = await axios.post(`/api/auth/signup`, {
      firstName: "vashnavi",
      lastName: "chauhan",
      email: "vaspacx@gmail.com",
      password: "7ur9r8",
    });
    // saving the encodedToken in the localStorage
    localStorage.setItem("token", response.data.encodedToken);
  } catch (error) {
    console.log(error);
  }
};
