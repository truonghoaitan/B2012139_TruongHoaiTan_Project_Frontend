<template>
	<div class="nav-wrap bg-dark">
		<nav class="navbar navbar-expand navbar-dark ">
			<a href="/" class="navbar-brand">
				<img src="../assets/img/rhowebw.png" class="img-logo-text" alt="">
				Library
	
			</a>
			<div class="  navbar-nav">
	
				<li class="nav-item">
					<router-link :to="{ name: 'rholibrary' }" class="nav-link">
						Rho Library
						<img src="../assets/img/logo9pw.png" class="img-logo" alt="">
					</router-link>
				</li>
			</div>
		</nav>
	</div>
</template>
<style scoped>
	.navbar {
		max-width: 1200px;
		margin: auto;
	}
	.navbar-expand {
		justify-content: space-between;
	}
	
	.img-logo {
		width: 40px;
		filter: brightness(60%);
	}
	.img-logo-text {
		width: 80px;
	}
	.navbar-brand {
		font-size: 40px;
	}
</style>