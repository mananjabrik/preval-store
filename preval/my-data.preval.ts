import preval from 'next-plugin-preval';
import axios from 'axios';

async function getData() {
  try {
    const res = await axios.get('https://fakestoreapi.com/products');
    return res.data;
  } catch (e) {
    console.log(e);
  }
}

export default preval(getData());
