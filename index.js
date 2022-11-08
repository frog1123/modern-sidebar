const openSidebar = () => {
  document.getElementById('sidebar-container').style.transform = 'translateX(0)';
  document.getElementById('sidebar-container').style.boxShadow = '0px 8px 24px #191919';
  document.getElementById('overlay').style.display = 'block';
};

const closeSidebar = () => {
  document.getElementById('sidebar-container').style.transform = 'translateX(-100%)';
  document.getElementById('sidebar-container').style.boxShadow = 'none';
  document.getElementById('overlay').style.display = 'none';
};

const switchPage = page => {
  document.getElementById('page-1').style.display = 'none';
  document.getElementById('page-2').style.display = 'none';

  document.getElementById(page).style.display = 'block';
};

document.getElementById('open-sidebar-container').onclick = () => openSidebar();
document.getElementById('close-sidebar-container').onclick = () => closeSidebar();

document.getElementById('switch-page-1').onclick = () => switchPage('page-1');
document.getElementById('switch-page-2').onclick = () => switchPage('page-2');

document.getElementById('overlay').onclick = () => closeSidebar();

// ok bye
