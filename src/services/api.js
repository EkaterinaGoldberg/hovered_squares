import axios from "axios";

const client = axios.create({
  baseURL: "https://demo1030918.mockable.io/",
});

export async function getMode() {
  try {
    const response = await client.get();
    console.log(response);
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
}
