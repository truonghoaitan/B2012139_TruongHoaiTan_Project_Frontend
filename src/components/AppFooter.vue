<template>
	<footer class="mt-120px">
        <div class="wrap">
			<a href="#">
            <img src="../assets/img/logo.png" alt="" class="footer-logo">
        </a>
        <div class="footer-address">
           
            <p class="footer-phar addre">
               
				Chào mừng bạn đến với HuynhZ Library, HuynhZ Library là một nền tảng nội dung số trên internet, nơi thành viên có thể tự do xuất bản những nội dung tiếng Việt như: Tiểu tHuynhZết, light novel, truyện ngắn hoặc thơ văn khác. Với những chức năng được cải tiến liên tục, HuynhZ Library sẽ mang lại cho Tác giả sáng tác truyện, Dịch giả đăng truyện và Người đọc truyện online những trải nghiệm tuyệt vời nhất. Đừng ngại đăng ký tài khoản tại HuynhZ Library, chỉ mất 30s và hoàn toàn miễn phí.
			</p>
        </div>
        
		</div>
	</footer>
</template>
<style scoped>
	.mt-120px {
		margin-top: 120px;
	}
	footer {
		border-top: 1px solid #161a21;
		position: relative;
		bottom: 0;
		right: 0;
		left: 0;
		color: #161a21;
		background-color: rgba(61, 70, 85,0.25) ;

	}
	.wrap {
		display: flex;
		width: 1200px;
		margin: 0 auto;
		margin-top: 12px;
	}
	a:hover {
		text-decoration: none;
		background-color: transparent;	
	}
	.footer-logo {
		height: 120px;
	}
	.footer-heading {
		text-transform: uppercase;
		letter-spacing: 2px;
		margin: 20px 0 ;
	}
	.footer-phar {
		width: 800px;
		margin-left: 40px;
		margin-top: 12px;
	}
	.footer-phar a {
		color: #fff;
		text-decoration: none;
		margin-bottom: 8px;
		transition: all linear .3s;
	}
	.footer-phar a:hover {
		color: rgba(255, 255 , 255, 0.6);
	}
	.footer-phar a i {
		width: 24px;
	}
	.conact-icon {
		font-size: 32px;
		margin-right: 32px;
	}
</style>