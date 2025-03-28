let counterContainer = document.querySelector(".website-counter");
fetch("https://gowacode.github.io/Portfolio/")
.then(response=>response.json())
.then(data=>{
    counterContainer.innerHTML = data.count;
});

document.addEventListener('DOMContentLoaded', function() {
    const viewCountElement = document.getElementById('viewCount');
    let count = localStorage.getItem('viewCount') || 0;
    count = parseInt(count) + 1;
    localStorage.setItem('viewCount', count);
    viewCountElement.textContent = count;
});




















