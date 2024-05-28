window.onload = function() {
    console.log('Hello');

    // Tags
    addTagsClickHandler();
}

const addTagsClickHandler = () => {
    document.querySelector('.strategies__tags').addEventListener('click', (e) => {
        if (e.target.classList.contains('tag')) {
            let clickTag = e.target;
        }
    });
}