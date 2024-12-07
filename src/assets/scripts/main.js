/**
 * Import dependencies from node_modules
 * see commented examples below
 */

// import 'some-node-module';
// import SomeModule from 'some-node-module';
import * as bootstrap from 'bootstrap';

/**
 * Write any other JavaScript below
 */

+( function() {
  const university = "UOC";
  console.log(`Hello, ${university}!`);
} )();

function highlightCurrentLink(){
  const currentUrl = window.location.href;
  const navLinks = document.querySelectorAll('header nav ul li a');
  
  navLinks.forEach((link) => {
    if (link.href === currentUrl) {
      link.parentElement.classList.add('active');
    }
  });
}

highlightCurrentLink();
