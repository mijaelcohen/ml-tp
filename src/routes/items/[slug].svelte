<script context="module">
	export async function preload({ params }) {
		const res = await this.fetch(`api/items/${params.slug}.json`);
		const data = await res.json();

		if (res.status === 200) {
			return { product: data.item };
		} else {
			this.error(res.status, data.message);
		}
	}
</script>
<script>
	export let product;
	//this was the hardest thing
	const formatDecimals = (decimals) =>{
		if(decimals){
			if(decimals.length > 1){
				return decimals
			}else{
				return decimals+"0"
			}
		}else{
			return "00"
		}
	}
</script>
<style>
	.product{
		background-color: white;
	}
	.product-detail{
		display: flex;
	}
	.product-image img{
		width: 680px;
	}
	.product-description h1{
		font-size: 28px;
	}
	.product-description p{
		font-size: 16px;
	}
	.product-info small{
		font-size: 14px;
	}
	.price{
		font-size: 46px;
	}
	.title{
		font-size: 24px;
	}
	.buy{
		font-size: 16px;
		background-color: var(--blue);
		color: white;
		padding: 10px 50px;
		border: 0;
		border-radius: 4px;
	}
</style>
<svelte:head>
	<title>{product.title} | Mercado Libre</title>
</svelte:head>
<div class="container">
	<div class="product">
		<div class="product-detail">
			<div class="product-image">
				<img class="p-1" src={product.picture} alt={product.title}/>
			</div>
			<div class="product-info mt-2"> 
				<small>
					{product.condition == "new" ? "Nuevo" : "Usado"} - {product.sold_quantity} 
					{product.sold_quantity > 1 ? "vendidos" : "vendido"}
				</small>
				<h2 class="mt-2 title">{product.title}</h2>
				<h1 class="mt-1 price">${parseFloat(product.price.amount)} 
					<small>
						{formatDecimals(product.price.decimals)}
					</small>
				</h1>
				<button class="buy">Comprar</button>
			</div>
		</div>
		<div class="p-2 product-description">
			<h1>Descripción del producto</h1>
			<p class="mt-2">{product.description}</p>
		</div>
	</div>
</div>