import axios from 'axios';
import config from '../config'
import author from './author';

export function get(req, res, next){
  const search = req.query.q;
  getMlSearch(search)
  .then(function(response){
    const formatedResponse = parseResponse(response.data)
    res.end(JSON.stringify(formatedResponse))
  })
  .catch(function(error){
    res.end(JSON.stringify(error))
  })
}
//api call
function getMlSearch(query){
	return axios.get(`${config.api}/sites/MLA/search?q=${query}`)
}

//reformat json response
function parseResponse(data){
  //filter categories only and trim the fat
  let categories = []
  let filters = data.filters.find(obj=>{
    return obj.id === "category"
    }
  )
  let available_filters = data.available_filters.find(obj=>{
    return obj.id === "category"
    }
  )
  //this is so confusing
  if(filters){
    categories = filters.values[0].path_from_root.map((obj)=>{
      return obj.name
    }); 
  }else{
    categories = filter.values.map((obj)=>{
      return obj.name
    })
  }
  
  //trim fat for products
  const items = data.results.map((item)=>{
    return {
      id: item.id,
      price : {
        currency: item.prices.presentation.display_currency,
        amount: item.price,
        decimals: item.price,//lol
      },
      title: item.title, //not in document but in spec
      city: item.seller_address.state.name, //same here
      picture: item.thumbnail,
      condition: item.condition,
      free_shipping: item.shipping.free_shipping
    }
  }).slice(0, 4)
  return {
    author,
    categories,
    items
  };

}