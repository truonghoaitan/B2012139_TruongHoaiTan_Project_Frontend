<script>
export default {
	props: {
		// change contact to library
		library: { type: Object, required: true },
	},
	computed: {
		
	}
};
</script>
<template>
<div>
	<div class="p-1">
		<strong>Image:</strong>
		{{ library.image }}
	</div>
	<div class="p-1">
		<strong>Tên:</strong>
		{{ library.name }}
	</div>
	<div class="p-1">
		<strong>Tác giả:</strong>
		{{ library.author }}
	</div>
	<div class="p-1">
		<strong>Thông tin:</strong>
		{{ library.text }}
	</div>
	
	<div class="p-1">
		<strong>Số tập:</strong>
		{{ library.number }}
	</div>
	
	<div class="p-1">
		<strong>Like:&nbsp;</strong>
		<i v-if="library.favorite" class="ti-check"></i>
		<i v-else class="ti-close"></i>
	</div>
</div>
</template>