/**
 * PetCare Landing Page Interactivity
 */

const APP_CONFIG = {
    // Official Google Play Store URL
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hazem.petcare",
    
    // Direct APK download path
    apkDownloadUrl: "petcare-app.apk",
    
    // Support Contact Placeholder
    supportEmail: "SUPPORT_EMAIL"
};

document.addEventListener("DOMContentLoaded", () => {
    initStoreLinkHandlers();
    initSmoothScroll();
});

/**
 * 1. Store Links Click Handler
 */
function initStoreLinkHandlers() {
    const appStoreBtns = document.querySelectorAll('a[href="#appstore"], #btn-appstore, .coming-soon-btn');

    appStoreBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            showStoreModal(
                "Apple App Store",
                "PetCare for iOS is currently in development and coming soon to the App Store. The Android version is live on Google Play!"
            );
        });
    });
}

/**
 * 2. Modal Alert for App Store Coming Soon state
 */
function showStoreModal(storeName, message) {
    const existing = document.getElementById("store-modal");
    if (existing) existing.remove();

    const modal = document.createElement("div");
    modal.id = "store-modal";
    modal.style.cssText = `
        position: fixed; inset: 0; background: rgba(0,0,0,0.65); z-index: 10000;
        display: flex; align-items: center; justify-content: center; padding: 20px;
        backdrop-filter: blur(8px); animation: fadeIn 0.2s ease;
    `;

    modal.innerHTML = `
        <div style="background: #FFF; border-radius: 28px; padding: 36px 28px; max-width: 440px; width: 100%; box-shadow: 0 25px 60px rgba(0,0,0,0.25); text-align: center; position: relative;">
            <div style="font-size: 42px; margin-bottom: 12px;">🐾</div>
            <h3 style="font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; margin-bottom: 10px; color: #121826;">${storeName} Notice</h3>
            <span style="display: inline-block; background: #FFF0EB; color: #FF6B35; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 12px; border-radius: 9999px; margin-bottom: 14px;">Coming Soon on iOS</span>
            <p style="font-size: 14.5px; color: #4B5563; line-height: 1.6; margin-bottom: 24px;">${message}</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <a href="${APP_CONFIG.playStoreUrl}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #121826; color: #FFF; padding: 13px 20px; border-radius: 14px; font-weight: 700; text-decoration: none; font-size: 14px;">
                    ▶️ View on Google Play
                </a>
                <button id="close-modal-btn" style="background: #F3F4F6; border: none; padding: 11px; border-radius: 14px; font-weight: 600; color: #374151; cursor: pointer; font-size: 14px; margin-top: 4px;">
                    Close
                </button>
            </div>
        </div>
    `;

    document.body.appendChild(modal);

    document.getElementById("close-modal-btn").addEventListener("click", () => modal.remove());
    modal.addEventListener("click", (e) => {
        if (e.target === modal) modal.remove();
    });
}

/**
 * 3. Smooth Scroll for in-page anchors
 */
function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            if (targetId && targetId !== '#' && !targetId.includes('store')) {
                const targetEl = document.querySelector(targetId);
                if (targetEl) {
                    e.preventDefault();
                    targetEl.scrollIntoView({ behavior: 'smooth' });
                }
            }
        });
    });
}
