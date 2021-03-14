<script>
	import axios from 'axios';
	import ProductItem from '../../components/ProductItem.svelte';
	import Breadcrumb from '../../components/Breadcrumb.svelte';
	
	let query = "";
	//this is SSR, lets avoid a trainwreck
	if (typeof window !== 'undefined') {
		let params = new URLSearchParams(window.location.search);
		query = params.get('search');
	}
	// this is the state, crazy, right?
	
	let products = [];
	let categories = [];
	let error;
	let loading = false;

	if(query!=""){
		loading = true;
		axios.get(`/api/items?q=${query}`)
		.then(function(response){
			loading = false;
			products = response.data.items;
			categories = response.data.categories;
		})
		.catch(function(error){
			loading = false;
			error = error;
		})
	}
</script>

<style>
	h1 {
		text-align: center;
		color: var(--gray-2);
	}
</style>

<svelte:head>
	<title>Resultados de "{query}"</title>
</svelte:head>
<div class="container">
	<Breadcrumb {categories} ></Breadcrumb>
	{#if loading}
		<span>Cargando ...</span>
	{:else}
			{#each products as product}
				<ProductItem {product} />
			{:else}
				<h1> No hay resultados para mostrar :(</h1>
			{/each}
			{#if error}
				<span>{error}</span>
			{/if}
	{/if}
</div>