<script>
  import fshiping from '/static/ic_shipping.png';
  //Product object
  export let product;
</script>
<style>
  .product{
    background-color: white;
    display: flex;
    border-top: 1px solid var(--gray-1);
    text-decoration: none;
    color: var(--gray-4)
  }
  .image img{
    height: 180px;
    width: 180px;
    border-radius: 4px;
  }
  .price{
    font-size: 24px;
    display: flex;
    margin-left: 10px
  }
  .price img{
    width: 25px;
    height: 25px;
    margin-left: 10px;
    padding-top: 3px;
  }
  .title{
    font-size: 18px;
  }
  span{
    margin-left: auto;
    align-self: center;
  }
</style>
<a class="product mt-1" href="/items/{product.id}">
  <div class="image p-1">
    <img src={product.picture} alt={product.title}/>
  </div>
  <div class="info mt-1">
    <h2 class="mt-1 price">${product.price.amount}
      
        <img src={fshiping}  alt="Envio gratis!"/>
      
    </h2>
    <h1 class="mt-2 title">{product.title}</h1>
  </div>
  <span class="p-1">
    {product.city}
  </span>
</a>