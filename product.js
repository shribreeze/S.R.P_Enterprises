// Toggle mobile menu visibility
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const closeMobileMenuBtn = document.getElementById('close-mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');

mobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.toggle('hidden');
});

closeMobileMenuBtn.addEventListener('click', () => {
  mobileMenu.classList.add('hidden');
});

//navbar scroll effect
document.onreadystatechange = function() {
  let lastScrollPosition = 0;
  const navbar = document.querySelector('.navbar');
  window.addEventListener('scroll', function(e) {
    lastScrollPosition = window.scrollY;
    
    if (lastScrollPosition > 20)
      navbar.classList.add('navbar-red');
    else
      navbar.classList.remove('navbar-red');
  });
}

var filters = {
  type: 'all'
};

function toggleFilter(type, value) {
  if (filters[type] === value) {
    // If the same button is clicked again, reset the filter for that type
    filters[type] = 'all';
  } else {
    filters[type] = value;
  }

  applyFilters();
}
function applyFilters() {
  var items = document.querySelectorAll('.item');

  items.forEach(function (item) {
    var itemType = item.getAttribute('data-type');
    // var itemSize = item.getAttribute('data-size');

    var typeCondition = filters.type === 'all' || filters.type === itemType;
    // var sizeCondition = filters.size === 'all' || filters.size === itemSize;

    if (typeCondition) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
}

function resetFilters() {
  filters.type = 'all';
  // filters.size = 'all';
  applyFilters();
}