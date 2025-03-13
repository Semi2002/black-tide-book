document.addEventListener("DOMContentLoaded", function() {
    const cover = document.getElementById("cover");
    const book = document.getElementById("book");
    const startBtn = document.getElementById("start-btn");
    const pageImage = document.getElementById("page-image");
    const prevPageBtn = document.getElementById("prev-page");
    const nextPageBtn = document.getElementById("next-page");
    const backHomeBtn = document.getElementById("back-home");
    const pageNumber = document.getElementById("page-number");

    let currentPage = 1;
    const totalPages = 3;  // 根據你的內頁數量調整
    const imagesPath = "images/";
    
    function fadeToBlack(callback) {
        book.style.opacity = "0";
        setTimeout(() => {
            callback();
            book.style.opacity = "1";
        }, 300);
    }

    function updatePage() {
        if (currentPage > totalPages) {
            pageImage.src = imagesPath + "封底背景圖.jpg";
            pageNumber.textContent = "旅途結束 回到開始";
            nextPageBtn.style.display = "none";
        } else {
            pageImage.src = imagesPath + `內頁.${currentPage}.jpg`;
            pageNumber.textContent = `第 ${currentPage} 頁`;
            nextPageBtn.style.display = "block";
        }
    }

    startBtn.addEventListener("click", function() {
        cover.style.display = "none";
        book.classList.remove("hidden");
        fadeToBlack(() => {
            currentPage = 1;
            updatePage();
        });
    });

    prevPageBtn.addEventListener("click", function() {
        if (currentPage > 1) {
            currentPage--;
            fadeToBlack(updatePage);
        }
    });

    nextPageBtn.addEventListener("click", function() {
        if (currentPage <= totalPages) {
            currentPage++;
            fadeToBlack(updatePage);
        }
    });

    backHomeBtn.addEventListener("click", function() {
        book.classList.add("hidden");
        cover.style.display = "flex";
    });

    updatePage();
});
