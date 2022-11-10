<script>
export default {
	props: {
		//change libraries to libraries
		libraries: { type: Array, default: [] },
		activeIndex: { type: Number, default: -1 },
	},
	emits: ["update:activeIndex"],
	methods: {
		updateActiveIndex(index) {
			this.$emit("update:activeIndex", index);
		}
	}
};
</script>
<template>
	<ul class="list-group">
		<li
			class="list-group-item"
			v-for="(library, index) in libraries"
			:key="library._id"
			:class="{ active: index === activeIndex }"
			@click="updateActiveIndex(index)"
		>
		{{ library.name }}
	</li>
</ul>
</template>