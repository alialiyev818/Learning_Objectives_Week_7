document.addEventListener('DOMContentLoaded', function() {

    var headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');

    
    headings.forEach(function(heading, index) {
        
        if (index % 2 === 0) {
            heading.style.color = 'blue';
        } else {
            heading.style.color = 'red';
        }
    });
});
