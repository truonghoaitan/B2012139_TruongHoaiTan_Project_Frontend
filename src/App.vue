<script>
import AppHeader from "@/components/AppHeader.vue";
export default {
	components: {
		AppHeader,
	},
}
</script>
<template>
		<div id="app">
			<AppHeader />
			<div class="container mt-3">
				<router-view />
			</div>
		</div>
</template>
<style scoped>
	
	#app {
		margin: 0;
		padding: 0;
		max-width: 100%;
	}
	
	
</style>
<style>
.page {
		max-width: 400px;
		margin: auto;
	}
</style>