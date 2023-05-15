const menuIcon = document.querySelector('.header-top i');
const menuBar = document.querySelector('.header-top ul');
menuIcon.addEventListener('click', () => {
  // Kiểm tra trạng thái hiện tại của thanh menu
  if (menuBar.style.display === 'none') {
    // Nếu đang ẩn, hiển thị thanh menu
    menuBar.style.display = 'block';
  } else {
    // Nếu đang hiển thị, ẩn thanh menu
    menuBar.style.display = 'none';
  }
});
