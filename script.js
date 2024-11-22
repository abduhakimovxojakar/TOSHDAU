// Scroll Animation
window.addEventListener('scroll', function() {
    var elements = document.querySelectorAll('.scroll-effect');
    elements.forEach(function(element) {
        if (element.getBoundingClientRect().top < window.innerHeight) {
            element.classList.add('visible');
        }
    });
});

// Modalni ochish
var modal = document.getElementById("myModal");
var btn = document.getElementById("openModalBtn");
var span = document.getElementsByClassName("close")[0];

// Modalni ochish
btn.onclick = function() {
    modal.style.display = "block";
}

// Modalni yopish
span.onclick = function() {
    modal.style.display = "none";
}

// Agar foydalanuvchi modal tashqarisiga bossa, uni yopish
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// Hamburger Menu
function toggleMenu() {
    const navMenu = document.querySelector('.main-nav ul');
    navMenu.classList.toggle('active');
}
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();

    // Foydalanuvchi ma'lumotlarini olish
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;




    let index = 0;
    const testimonials = document.querySelectorAll('.testimonial');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');

    function showTestimonial(i) {
        const total = testimonials.length;
        if (i >= total) index = 0;
        if (i < 0) index = total - 1;
        testimonials.forEach((testimonial, idx) => {
            testimonial.style.transform = `translateX(${(idx - index) * 100}%)`;
        });
    }

    prevButton.addEventListener('click', () => {
        index--;
        showTestimonial(index);
    });

    nextButton.addEventListener('click', () => {
        index++;
        showTestimonial(index);
    });

    // Dastlabki testimonialni ko'rsatish
    showTestimonial(index);
    // Telegram Bot API URL
    let botToken = "7555842956:AAF8ukY_3-6ETgiD3zqVvplCN0jTsLHvoIQ";  // Sizning bot tokeningiz
    let chatId = "@TOSHDAU_bot_bot";  // Telegram bot username (chat ID o'rniga username qo'yiladi)

    // Yuboriladigan xabarni yaratish
    let text = `Yangi kontakt formasi:\nIsm: ${name}\nEmail: ${email}\nXabar: ${message}`;

    // Telegram API orqali so'rov yuborish
    fetch(`https://api.telegram.org/bot${'7555842956:AAF8ukY_3-6ETgiD3zqVvplCN0jTsLHvoIQ'}/sendMessage?chat_id=${'@TOSHDAU_bot_bot'}&text=${encodeURIComponent(text)}`)
        .then(response => response.json())
        .then(data => {
            if (data.ok) {
                alert("Xabar yuborildi!");
            } else {
                alert("Xabar yuborishda xato yuz berdi.");
            }
        })
        .catch(error => {
            alert("Xato: " + error);
        });
});


