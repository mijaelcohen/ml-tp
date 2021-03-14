<script>
	import logo from '/static/Logo_ML.png';
	import search from '/static/ic_Search.png'
	import { Button, Col, Row } from 'sveltestrap';
	let query = "";
	const searchQuery = (e) => {
		e.preventDefault()
		window.location = `/items?search=${query}`;
	}
	//populate field if is refreshed on search
	if (typeof window !== 'undefined') {
		let params = new URLSearchParams(window.location.search);
		query = params.get('search');
	}
</script>

<style>
	nav{
		background-color: var(--yellow);
		padding: 10px;
	}
	input{
		outline: 0;
		border: 0;
		width: 100%;
		font-size: 18px;
		padding: 6px 5px;
		margin-left: 10px;
	}
	img{
		display: block;
	}
	button{
		border-radius: 0;
		background-color: var(--gray-1);
		border: 0px;
		border-top-right-radius : 2px;
		border-bottom-right-radius : 2px;
		padding: 8px 10px;
	}
	.main{
		display: flex;
	}
</style>
<form on:submit={searchQuery}>
	<nav>
		<div class="container">
			<div class="row">
				<div class="col"></div>
				<div class="col-10 main">
					<a href="/">
						<img src={logo} alt="Mercado Libre" />
					</a>
					<input type="text" bind:value={query} placeholder="Buscar productos, marcas y más…"/>
					<button>
						<img src={search} alt="buscar"/>
					</button>
				</div>
				<div class="col"></div>
			</div>
		</div>
			
	</nav>
</form>
