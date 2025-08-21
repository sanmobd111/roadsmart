import axios from "axios";

const GETFetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return { data: response.data, error: null };
  } catch (err) {
    return { data: null, error: err.message || "Fetch failed" };
  }
};

export { GETFetchData };
