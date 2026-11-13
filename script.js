// تفعيل تبديل النمط (الوضع الليلي والنهاري)
const themeBtn = document.getElementById('themeBtn');
if (themeBtn) {
    themeBtn.addEventListener('click', () => {
        document.body.classList.toggle('dark');
        themeBtn.textContent = document.body.classList.contains('dark') ? '☀️' : '🌙';
    });
}

// تبديل لغة الواجهة تجريبياً
const langBtn = document.getElementById('langBtn');
if (langBtn) {
    langBtn.addEventListener('click', () => {
        const isArabic = document.documentElement.lang === 'ar';
        const newLang = isArabic ? 'en' : 'ar';
        document.documentElement.lang = newLang;
        document.documentElement.dir = newLang === 'ar' ? 'rtl' : 'ltr';
        langBtn.textContent = newLang === 'ar' ? 'EN' : 'AR';
    });
}

// التحقق من صحة المدخلات في نموذج الاتصال وإدارته برمجياً
const form = document.getElementById('contactForm');
if (form) {
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        let isValid = true;

        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        // التحقق من الاسم
        const nameError = document.getElementById('nameError');
        if (name === '') {
            nameError.textContent = 'حقل الاسم الكامل مطلوب.';
            isValid = false;
        } else {
            nameError.textContent = '';
        }

        // التحقق من البريد الإلكتروني
        const emailError = document.getElementById('emailError');
        if (!emailRegex.test(email)) {
            emailError.textContent = 'الرجاء إدخال بريد إلكتروني صحيح وصالح.';
            isValid = false;
        } else {
            emailError.textContent = '';
        }

        // التحقق من الرسالة
        const messageError = document.getElementById('messageError');
        if (message === '') {
            messageError.textContent = 'حقل الرسالة مطلوب ولا يمكن تركه فارغاً.';
            isValid = false;
        } else {
            messageError.textContent = '';
        }

        // في حال كانت كافة المدخلات صحيحة
        if (isValid) {
            form.style.display = 'none';
            document.getElementById('thankYou').classList.remove('hidden');
        }
    });
}