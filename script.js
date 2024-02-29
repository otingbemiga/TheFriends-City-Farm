function toggleMenu() {
    const nav_list = document.querySelector('.nav_list');
    nav_list.classList.toggle('show');
}




var additionalContent = [
    // "<p>Additional products_1</p>",
    // "<p>Additional products_1/p>",
    // Add more content as needed
];

function loadMore() {
    var products_1 = document.getElementById('products_1');
    var loadMoreBtn = document.getElementById('load-more-btn');

    // Append additional content to the existing content
    for (var i = 0; i < additionalContent.length; i++) {
        products_1.innerHTML += additionalContent[i];
    }

    // Toggle the max-height property to show/hide content
    if (products_1.style.maxHeight) {
        products_1.style.maxHeight = null; // Show all content
        loadMoreBtn.textContent = 'Show Less';
    } else {
        products_1.style.maxHeight = '100%'; // Show all content
        loadMoreBtn.textContent = 'Load More';
    }
}


// var additionalContent = [
//     "<p>Additional Product 1</p>",
//     "<p>Additional Product 2</p>",
//     // Add more content as needed
// ];

// function loadMore() {
//     var products_1 = document.getElementById('products_1');
//     var loadMoreBtn = document.getElementById('load-more-btn');

//     // Check if additional content is currently displayed
//     var isAdditionalContentDisplayed = products_1.scrollHeight > products_1.clientHeight;

//     // Toggle the max-height property to show/hide content
//     if (isAdditionalContentDisplayed) {
//         products_1.style.maxHeight = '100px'; // Hide additional content
//         loadMoreBtn.textContent = 'Load More';
//     } else {
//         // Append additional content to the existing content
//         for (var i = 0; i < additionalContent.length; i++) {
//             products_1.innerHTML += additionalContent[i];
//         }
//         products_1.style.maxHeight = products_1.scrollHeight + 'px'; // Show all content
//         loadMoreBtn.textContent = 'Show Less';
//     }
// }