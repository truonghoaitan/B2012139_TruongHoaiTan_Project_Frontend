<template>
	<div class="page row">
		<div class="col-md-10">
			<InputSearch v-model="searchText" />
		</div>
		<div class="mt-3 text-center col-md-6">
			<h4>
				Rho Library
				<img src="../assets/img/logo9pblue.png" class="img-logo" alt="">
			</h4>
			<BookList
				v-if="filteredLibrariesCount > 0"
				:libraries="filteredLibraries"
				v-model:activeIndex="activeIndex"
			/>
			<p v-else>Không có liên hệ nào.</p>
			<div class="mt-3 row justify-content-around align-items-center">
				<button class="btn btn-sm btn-info" @click="refreshList()">
					<i class="ti-reload"></i> Làm mới
				</button>
				<button class="btn btn-sm btn-success" @click="goToAddLibrary()">
					<i class="fas fa-plus"></i> Thêm mới
				</button>
				<button
				class="btn btn-sm btn-danger"
				@click="removeAllLibraries()"
					>
					<i class="ti-trash"></i> Xóa tất cả
				</button>
			</div>
		</div>
		<div class="mt-3 text-center col-md-6">
			<div v-if="activeLibrary">
				<h4>
					Thông tin chi tiết
					<i class="ti-bookmark-alt"></i>
				</h4>
				<BookInfo :library="activeLibrary" />
			</div>
		</div>
	</div>
</template>
<script>
import BookInfo from "@/components/BookInfo.vue";
import InputSearch from "@/components/InputSearch.vue";
import BookList from "@/components/BookList.vue";
import LibraryService from "@/services/library.service";
export default {
	components: {
		BookInfo,
		InputSearch,
		BookList,
	},
	data() {
		return {
			libraries: [],
			activeIndex: -1,
			searchText: "",
		};
	},
	watch: {
		searchText() {
			this.activeIndex = -1;
		},
	},
	computed: {
		libraryStrings() {
			return this.libraries.map((library) => {
				const { name, text, author, number, image } = library;
				return [name, text, author, number, image ].join("");
			});
		},
		filteredLibraries() {
			if (!this.searchText) return this.libraries;
			return this.libraries.filter((_library, index) =>
				this.libraryStrings[index].includes(this.searchText)
			);
		},
		activeLibrary() {
			if (this.activeIndex < 0) return null;
			return this.filteredLibraries[this.activeIndex];
		},
		filteredLibrariesCount() {
			return this.filteredLibraries.length;
		},
	},
	methods: {
		async retrieveLibraries() {
			try {
				this.libraries = await LibraryService.getAll();
			} catch (error) {
				console.log(error);
			}
		},
		refreshList() {
			this.retrieveLibraries();
			this.activeIndex = -1;
		},
		async removeAllLibraries() {
			if (confirm("Bạn muốn xóa tất cả Liên hệ?")) {
				try {
					await LibraryService.deleteAll();
					this.refreshList();
				} catch (error) {
					console.log(error);
				}
			}
		},
		goToAddLibrary() {
			this.$router.push({ name: "library.add" });
		},
	},
	mounted() {
		this.refreshList();
	},
};
</script>
<style scoped>
	.page {
		text-align: left;
		max-width: 1200px;
		margin: auto;
	}
	.img-logo {
		width: 40px;
	}
	.text-center {
		text-align: center;
	}
	.col-md-10 {
		max-width: 100%;
		flex:  0 0 100%;
	}
</style>