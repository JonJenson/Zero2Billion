import supabase from '../config/configuration.js';

const insertApi = async (title, array) => {
  try {
    const { data, error } = await supabase.from(title).insert(array).select();
    if (data) {
      return true;
    } else {
      console.error(error);
      return null;
    }
  } catch (err) {
    console.error(err);
    return false;
  }
};

const selectApi = async (title) => {
  try {
    const { data, error } = await supabase.from(title).select('*');
    if (error) {
      throw new Error(error.message);
    }
    return data;
  } catch (error) {
    console.error(error);
    throw new Error(`Failed to fetch data for ${title}`);
  }
};

const MODULE = {
  insertApi,
  selectApi,
};

export default MODULE;
