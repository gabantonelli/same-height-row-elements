(function equalHeights(parentClass, childClass, breakPoint) {
    const WIDTH_LIMIT = breakPoint;

    const fixHeights = () => {
        const rowsCollection = document.getElementsByClassName(parentClass);
        const rows = [...rowsCollection];
        const arr = rows.map(block => block.getElementsByClassName(childClass))[0];
        if (window.innerWidth > WIDTH_LIMIT) {
            let maxHeight = 0;
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].offsetHeight > maxHeight) maxHeight = arr[i].offsetHeight;
            }
            for (let i = 0; i < arr.length; i++) {
                if (arr[i].offsetHeight < maxHeight) arr[i].style.height = maxHeight + 'px';
            }
            console.log('resized big');
        } else {
            for (let i = 0; i < arr.length; i++) {
                arr[i].style.height = 'auto';
            }
            console.log('resized small');
        }
    };

    fixHeights();

    window.addEventListener('resize', function (e) {
        console.log(window.innerWidth);
        fixHeights();
    });


})('riga-notizie', 'news-thumb-title', 767); //Set here the class of the row, the class of the elements to fix, and the breakpoint width
