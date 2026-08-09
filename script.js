// Navbar scroll effect
window.addEventListener('scroll', () => {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 40) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile menu toggle
const mobileToggle = document.getElementById('mobileToggle');
const navMenu = document.getElementById('navMenu');

if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Pricing Toggle (Monthly vs Annual)
const pricingToggle = document.getElementById('pricingToggle');
const amounts = document.querySelectorAll('.amount');
const monthlyLabel = document.getElementById('monthlyLabel');
const annualLabel = document.getElementById('annualLabel');

if (pricingToggle) {
    pricingToggle.addEventListener('change', (e) => {
        const isAnnual = e.target.checked;
        
        if (isAnnual) {
            monthlyLabel.style.color = 'var(--text-muted)';
            annualLabel.style.color = 'var(--text-main)';
        } else {
            monthlyLabel.style.color = 'var(--text-main)';
            annualLabel.style.color = 'var(--text-muted)';
        }

        amounts.forEach(amountEl => {
            const monthlyVal = amountEl.getAttribute('data-monthly');
            const annualVal = amountEl.getAttribute('data-annual');
            amountEl.textContent = isAnnual ? annualVal : monthlyVal;
        });
    });
}

// Interactive AI Suggestion Demo Button
const applyAiBtn = document.getElementById('applyAiBtn');
const activityText = document.getElementById('activityText');

if (applyAiBtn && activityText) {
    applyAiBtn.addEventListener('click', () => {
        applyAiBtn.textContent = '✓ ROI Clause Inserted';
        applyAiBtn.style.background = '#10b981';
        activityText.textContent = 'AI updated proposal: Guaranteed 24% ROI terms added to Acceptance section.';
        
        setTimeout(() => {
            applyAiBtn.textContent = 'Apply Suggestion';
            applyAiBtn.style.background = 'var(--primary)';
        }, 4000);
    });
}
