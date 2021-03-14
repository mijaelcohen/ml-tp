import axios from 'axios';
import author from './author';
import config from '../config';

export function get(req, res, next){
  const { id } = req.params;
  //execute parallel power
  axios.all([getProduct(id), getProductDescription(id)])
  .then((responses)=>{
    const parsed = parseResponses(responses)
    res.end(JSON.stringify(parsed))
  })
  .catch((error)=>{
    console.log(error)
    res.end(JSON.stringify(error))
  })
}

function getProduct(id){
	return axios.get(`${config.api}/items/${id}`)
}

function getProductDescription(id){
	return axios.get(`${config.api}/items/${id}/description`)
}

function parseResponses(responses){
  // lets trim some fat
  const product = responses[0].data;
  const description = responses[1].data;
  const price = (product.price+"").split(".");
  const item = {
    id: product.id,
    title: product.title,
    price : {
      currency : product.currency_id,
      amount: price[0],
      decimals: price[1]//lolx2
    },
    picture : product.thumbnail,
    condition: product.condition,
    free_shipping: product.shipping.free_shipping,
    sold_quantity: product.sold_quantity,
    description: description.plain_text
  }
  return {
    author,
    item
  }
}