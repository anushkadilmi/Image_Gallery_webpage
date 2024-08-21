document.getElementById('show-gallery').addEventListener('click', function() {
    document.getElementById('landing-page').classList.add('hidden');
    document.getElementById('gallery-container').style.display = 'block';
});

const galleryThumbs = document.querySelectorAll('.gallery-thumb');
const fullViewContainer = document.getElementById('full-view-container');
const fullViewImage = document.getElementById('full-view-image');

let currentImageIndex = 0;

galleryThumbs.forEach((thumb, index) => {
    thumb.addEventListener('click', () => {
        currentImageIndex = index;
        showFullViewImage(currentImageIndex);
    });
});

function showFullViewImage(index) {
    fullViewImage.src = galleryThumbs[index].src;
    fullViewContainer.classList.remove('hidden');
}

function nextImage() {
    currentImageIndex = (currentImageIndex + 1) % galleryThumbs.length;
    showFullViewImage(currentImageIndex);
}

function prevImage() {
    currentImageIndex = (currentImageIndex - 1 + galleryThumbs.length) % galleryThumbs.length;
    showFullViewImage(currentImageIndex);
}


document.addEventListener('keydown', function(event) {
    if (fullViewContainer.classList.contains('hidden')) return; 

    if (event.key === 'ArrowRight') {
        nextImage();
    } else if (event.key === 'ArrowLeft') {
        prevImage();
    }
});

document.getElementById('back-to-gallery').addEventListener('click', function() {
    fullViewContainer.classList.add('hidden');
});
