/**
 * PetCare Landing Page Interactivity
 * Optimized for Instagram & TikTok Bio Traffic
 */

// ============================================================================
// CONFIGURATION: Replace these with your real Store links when published
// ============================================================================
const APP_CONFIG = {
    // Paste your official Apple App Store URL here (e.g., https://apps.apple.com/app/petcare/id...)
    appStoreUrl: "https://apps.apple.com/app/petcare-companion/id000000000",
    
    // Paste your official Google Play Store URL here (e.g., https://play.google.com/store/apps/details?id=com.example.petcare)
    playStoreUrl: "https://play.google.com/store/apps/details?id=com.example.petcare",
    
    // Direct APK download path (can point to local APK or hosted CDN)
    apkDownloadUrl: "petcare-app.apk",
    
    // Social Handles
    instagramUrl: "https://instagram.com",
    tiktokUrl: "https://tiktok.com"
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
            deviceText.textContent = "🍏 iOS Device Detected • Ready for App Store";
        }
        if (btnAppStore) {
            btnAppStore.classList.add("highlighted-os");
            const highlightBadge = document.getElementById("ios-badge");
            if (highlightBadge) highlightBadge.textContent = "Recommended";
        }
        if (dockActionBtn) {
            dockActionBtn.href = APP_CONFIG.appStoreUrl;
        }
    } else if (isAndroid) {
        if (devicePill && deviceText) {
            devicePill.style.display = "inline-flex";
            deviceText.textContent = "🤖 Android Device Detected • Ready for Google Play";
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
            dockActionBtn.href = "#download";
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
            if (APP_CONFIG.appStoreUrl && !APP_CONFIG.appStoreUrl.includes("id000000000")) {
                btn.href = APP_CONFIG.appStoreUrl;
            } else {
                e.preventDefault();
                showStoreModal("App Store", "PetCare for iOS is preparing for App Store release! You can also test on Android or download the APK below.");
            }
        });
    });

    playStoreBtns.forEach(btn => {
        btn.addEventListener("click", (e) => {
            if (APP_CONFIG.playStoreUrl && !APP_CONFIG.playStoreUrl.includes("com.example.petcare")) {
                btn.href = APP_CONFIG.playStoreUrl;
            } else {
                e.preventDefault();
                showStoreModal("Google Play", "PetCare on Google Play is being published! You can download the direct Android APK right now to try it out immediately.");
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
        position: fixed; inset: 0; background: rgba(0,0,0,0.6); z-index: 10000;
        display: flex; align-items: center; justify-content: center; padding: 20px;
        backdrop-filter: blur(8px); animation: fadeIn 0.2s ease;
    `;

    modal.innerHTML = `
        <div style="background: #FFF; border-radius: 24px; padding: 32px; max-width: 440px; width: 100%; box-shadow: 0 20px 50px rgba(0,0,0,0.2); text-align: center; position: relative;">
            <div style="font-size: 40px; margin-bottom: 12px;">🐾</div>
            <h3 style="font-family: 'Outfit', sans-serif; font-size: 22px; font-weight: 800; margin-bottom: 10px; color: #121826;">${storeName} Notice</h3>
            <p style="font-size: 14.5px; color: #4B5563; line-height: 1.6; margin-bottom: 24px;">${message}</p>
            <div style="display: flex; flex-direction: column; gap: 10px;">
                <a href="petcare-app.apk" download="PetCare.apk" style="display: inline-block; background: #FF6B35; color: #FFF; padding: 12px 20px; border-radius: 12px; font-weight: 700; text-decoration: none; font-size: 14px;">
                    📥 Download APK Directly
                </a>
                <button id="close-modal-btn" style="background: #F3F4F6; border: none; padding: 10px; border-radius: 12px; font-weight: 600; color: #374151; cursor: pointer; font-size: 14px;">
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
