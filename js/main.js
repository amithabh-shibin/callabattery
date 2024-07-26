document.querySelectorAll('.faq-question').forEach(button => {
  button.addEventListener('click', () => {
      const faqAnswer = button.nextElementSibling;

      button.classList.toggle('active');

      if (button.classList.contains('active')) {
          faqAnswer.style.display = 'block';
      } else {
          faqAnswer.style.display = 'none';
      }
  });
});
  // Drop Down Menu
document.addEventListener('DOMContentLoaded', function() {
  // Handle main dropdown menu toggle for mobile
  const mainDropdowns = document.querySelectorAll('.dropdown-toggle');
  mainDropdowns.forEach(dropdown => {
    dropdown.addEventListener('click', function(e) {
      e.preventDefault();
      // Hide all dropdown menus except the clicked one
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        if (menu !== this.nextElementSibling) {
          menu.style.display = 'none';
        }
      });
      // Reset all toggle icons to '+' except the clicked one
      document.querySelectorAll('.toggle-icon').forEach(icon => {
        if (icon !== this.querySelector('.toggle-icon')) {
          icon.textContent = '+';
        }
      });
      // Toggle the clicked dropdown menu
      const dropdownMenu = this.nextElementSibling;
      dropdownMenu.style.display = (dropdownMenu.style.display === 'block') ? 'none' : 'block';
    });
  });
  // Handle submenu toggle
  const submenuToggles = document.querySelectorAll('.submenu-toggle .toggle-icon');
  submenuToggles.forEach(toggle => {
    toggle.addEventListener('click', function(e) {
      e.preventDefault();
      const submenu = this.parentElement.nextElementSibling;
      const isSubmenuVisible = submenu.style.display === 'block';
      // Hide all other submenus
      document.querySelectorAll('.dropdown-submenu > ul').forEach(submenu => {
        submenu.style.display = 'none';
      });
      // Reset all toggle icons to '+'
      document.querySelectorAll('.toggle-icon').forEach(icon => {
        icon.textContent = '+';
      });
      // Toggle the clicked submenu only if it was not already visible
      if (!isSubmenuVisible) {
        submenu.style.display = 'block';
        this.textContent = '-';
      } else {
        submenu.style.display = 'none';
        this.textContent = '+';
      }
    });
  });
  // Hide all dropdowns and submenus when clicking outside
  document.addEventListener('click', function(e) {
    const isClickInsideDropdown = e.target.closest('.dropdown') || e.target.closest('.dropdown-submenu');
    if (!isClickInsideDropdown) {
      // Hide all dropdown menus
      document.querySelectorAll('.dropdown-menu').forEach(menu => {
        menu.style.display = 'none';
      });
      // Reset all toggle icons to '+'
      document.querySelectorAll('.toggle-icon').forEach(icon => {
        icon.textContent = '+';
      });
    }
  });
  // Prevent dropdown and submenu from closing when clicking inside
  document.querySelectorAll('.dropdown, .dropdown-submenu').forEach(element => {
    element.addEventListener('click', function(e) {
      e.stopPropagation();
    });
  });
});