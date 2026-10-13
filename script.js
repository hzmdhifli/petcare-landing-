/**
 * PetCare Landing Page Interactivity
 * Optimized for Instagram & TikTok Bio Traffic
 */

// ============================================================================
// CONFIGURATION: Real Store and Social Links
// ============================================================================
const APP_CONFIG = {
    // Official Apple App Store URL (coming soon)
    appStoreUrl: "",
    
    // Official Google Play Store URL
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.hazem.petcare&pcampaignid=web_share",
    
    // Direct APK download path
    apkDownloadUrl: "petcare-app.apk",
    
    // Social Handles
    instagramUrl: "https://instagram.com",
    tiktokUrl: "https://tiktok.com",
    supportEmail: "support@petcare-app.com"
};

// ============================================================================
// DOM Content Loaded Initializer
// ============================================================================
document.addEventListener("DOMContentLoaded", () => {
    initDeviceDetection();
    initMockupSwitcher();
    initReferrerCustomization();
    initStoreLinkHandlers();
    initSmoothScroll();
});

/**
 * 1. Smart Device Detection & OS Highlighting
 * Detects whether the visitor is using an iPhone/iPad or Android device
 */
function initDeviceDetection() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    const isIOS = /iPad|iPhone|iPod/.test(userAgent) && !window.MSStream;
    const isAndroid = /android/i.test(userAgent);

    const devicePill = document.getElementById("device-pill");
    const deviceText = document.getElementById("device-text");
    const btnAppStore = document.getElementById("btn-appstore");
    const btnPlayStore = document.getElementById("btn-playstore");
    const dockActionBtn = document.getElementById("dock-action-btn");

    if (isIOS) {
        if (devicePill && deviceText) {
            devicePill.style.display = "inline-flex";
            deviceText.textContent = "🍏 iOS Version Coming Soon • Available on Android";
        }
        if (btnAppStore) {
            const highlightBadge = document.getElementById("ios-badge");
            if (highlightBadge) highlightBadge.textContent = "Coming Soon";
        }
        if (dockActionBtn) {
            dockActionBtn.href = APP_CONFIG.playStoreUrl;
        }
    } else if (isAndroid) {
        if (devicePill && deviceText) {
            devicePill.style.display = "inline-flex";
            deviceText.textContent = "🤖 Android Device Detected • Live on Google Play";
        }
        if (btnPlayStore) {
            btnPlayStore.classList.add("highlighted-os");
            const highlightBadge = document.getElementById("android-badge");
            if (highlightBadge) highlightBadge.textContent = "Recommended";
        }
        if (dockActionBtn) {
            dockActionBtn.href = APP_CONFIG.playStoreUrl;
        }
    } else {
        // Desktop or other device
        if (dockActionBtn) {
            dockActionBtn.href = APP_CONFIG.playStoreUrl;
        }
    }
}

/**
 * 2. Interactive Smartphone Mockup Switcher
 * Allows visitors to click between Daily Plan, Health, and Add Pet screens
 */
function initMockupSwitcher() {
    const tabs = document.querySelectorAll(".selector-tab");
    const mockupImg = document.getElementById("mockup-img");
    const captionEl = document.getElementById("mockup-caption");

    const screenCaptions = {
        "images/screen_today_plan.png": "✨ Real screen: Check off daily feeding, medicine, and walks effortlessly.",
        "images/screen_pets_list.png": "🩺 Real screen: Overview of pet health scores, vaccines, and grooming status.",
        "images/screen_add_pet.png": "🐾 Real screen: Create custom pet profiles with colorful avatars and breeds."
    };

    let userInteracted = false;
    let currentTabIndex = 0;

    tabs.forEach((tab, index) => {
        tab.addEventListener("click", () => {
            userInteracted = true;
            setActiveScreen(index);
        });
    });

    function setActiveScreen(index) {
        currentTabIndex = index;
        tabs.forEach((t, i) => {
            const isActive = i === index;
            t.classList.toggle("active", isActive);
            t.setAttribute("aria-selected", isActive);
        });

        const selectedTab = tabs[index];
        const screenSrc = selectedTab.getAttribute("data-screen");

        if (mockupImg && screenSrc) {
            mockupImg.style.opacity = "0.4";
            mockupImg.style.transform = "scale(0.98)";
            
            setTimeout(() => {
                mockupImg.src = screenSrc;
                mockupImg.style.opacity = "1";
                mockupImg.style.transform = "scale(1)";
            }, 120);
        }

        if (captionEl && screenCaptions[screenSrc]) {
            captionEl.textContent = screenCaptions[screenSrc];
        }
    }

    // Auto-cycle screen preview every 5 seconds until visitor manually clicks
    setInterval(() => {
        if (!userInteracted && tabs.length > 0) {
            currentTabIndex = (currentTabIndex + 1) % tabs.length;
            setActiveScreen(currentTabIndex);
        }
    }, 5000);
}

/**
 * 3. Referrer & Campaign Awareness (TikTok / Instagram)
 */
function initReferrerCustomization() {
    const urlParams = new URLSearchParams(window.location.search);
    const source = (urlParams.get("utm_source") || "").toLowerCase();
    const referrer = document.referrer.toLowerCase();

    const bannerText = document.querySelector(".social-banner p");
    if (!bannerText) return;

    if (source === "tiktok" || referrer.includes("tiktok")) {
        bannerText.innerHTML = "<strong>🔥 Welcome TikTok Fam!</strong> Get instant free access to PetCare today.";
    } else if (source === "instagram" || referrer.includes("instagram")) {
        bannerText.innerHTML = "<strong>📸 Welcome from Instagram!</strong> Get instant free access to PetCare today.";
    }
}

/**
 * 4. Store Links Click Handler
 */
function initStoreLinkHandlers() {
    const appStoreBtns = document.querySelectorAll('a[href="#appstore"], #btn-appstore');
    const playStoreBtns = document.querySelectorAll('a[href="#googleplay"], #btn-playstore');

    appStoreBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (APP_CONFIG.appStoreUrl && APP_CONFIG.appStoreUrl.length > 5) {
                btn.href = APP_CONFIG.appStoreUrl;
            } else {
                e.preventDefault();
                showStoreModal("Apple App Store", "PetCare for iOS is currently in final development and coming soon to the App Store! If you're on Android, you can get it right now on Google Play or download the APK below.");
            }
        });
    });

    playStoreBtns.forEach(btn => {
        btn.addEventListener("click", () => {
            if (APP_CONFIG.playStoreUrl) {
                btn.href = APP_CONFIG.playStoreUrl;
            }
        });
    });
}

/**
 * Modal Alert for testing or coming soon state
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
            <span style="display: inline-block; background: #FFF0EB; color: #FF6B35; font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.5px; padding: 4px 12px; border-radius: 9999px; margin-bottom: 14px;">Coming Soon for iOS</span>
            <p style="font-size: 14.5px; color: #4B5563; line-height: 1.6; margin-bottom: 24px;">${message}</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <a href="${APP_CONFIG.playStoreUrl}" target="_blank" rel="noopener noreferrer" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #121826; color: #FFF; padding: 13px 20px; border-radius: 14px; font-weight: 700; text-decoration: none; font-size: 14px;">
                    ▶️ View on Google Play
                </a>
                <a href="petcare-app.apk" download="PetCare.apk" style="display: flex; align-items: center; justify-content: center; gap: 8px; background: #FF6B35; color: #FFF; padding: 13px 20px; border-radius: 14px; font-weight: 700; text-decoration: none; font-size: 14px;">
                    📥 Download Android APK Directly
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
 * 5. Smooth Scroll for in-page anchors
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
