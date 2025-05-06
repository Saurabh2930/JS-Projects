const slides = document.querySelectorAll('.slider');
var counter = 0;

slides.forEach(
    (slide, index) => {
        slide.style.top = `${index * 100}%`
    }
)

const goNext = () => {
    counter++
    slideImage()
}

const goPrev = () => {
    counter--
    slideImage()
}

const slideImage = () => {
    slides.forEach(
        (slide) => {
            slide.style.transform = `translateY(-${counter * 100}%)`
        }
    )
}