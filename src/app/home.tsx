import React from 'react';
import { Platform, StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { WebView } from 'react-native-webview';

export default function HomeScreen() {
  const htmlContent = `
    <!DOCTYPE html>

    <html lang="en"><head>
    <meta charset="utf-8"/>
    <meta content="width=device-width, initial-scale=1.0" name="viewport"/>
    <title>Sproutly - Household Services</title>
    <link href="https://fonts.googleapis.com" rel="preconnect"/>
    <link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet"/>
    <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@100..900&display=swap" rel="stylesheet"/>
    <script src="https://cdn.tailwindcss.com?plugins=forms,container-queries"></script>
    <script id="tailwind-config">
        tailwind.config = {
        darkMode: "class",
        theme: {
            extend: {
            colors: {
                "surface": "#e6fff5",
                "primary": "#38645a",
                "tertiary-container": "#8b704b",
                "on-tertiary-fixed": "#291800",
                "on-tertiary": "#ffffff",
                "on-surface-variant": "#404846",
                "on-surface": "#081f19",
                "on-background": "#081f19",
                "on-primary": "#ffffff",
                "surface-variant": "#cee8de",
                "secondary": "#356853",
                "primary-container": "#507d72",
                "background": "#e6fff5",
                "surface-bright": "#e6fff5",
                "error": "#ba1a1a",
                "inverse-surface": "#1e352e",
                "tertiary": "#705835",
                "on-secondary-container": "#396c57",
                "surface-tint": "#3a665c",
                "secondary-fixed-dim": "#9cd2b8",
                "inverse-on-surface": "#dcf7ec",
                "secondary-fixed": "#b8eed4",
                "surface-dim": "#c6e0d6",
                "on-tertiary-fixed-variant": "#594322",
                "surface-container-high": "#d4eee4",
                "surface-container-highest": "#cee8de",
                "outline-variant": "#c0c8c5",
                "on-primary-container": "#f4fffa",
                "on-secondary": "#ffffff",
                "on-primary-fixed": "#00201b",
                "secondary-container": "#b5ecd1",
                "tertiary-fixed": "#ffddb1",
                "surface-container": "#d9f4e9",
                "on-error-container": "#93000a",
                "primary-fixed": "#bdecdf",
                "on-secondary-fixed-variant": "#1b503c",
                "on-tertiary-container": "#fffbff",
                "on-primary-fixed-variant": "#214e45",
                "error-container": "#ffdad6",
                "surface-container-lowest": "#ffffff",
                "on-secondary-fixed": "#002115",
                "tertiary-fixed-dim": "#e2c196",
                "on-error": "#ffffff",
                "outline": "#717976",
                "primary-fixed-dim": "#a1d0c4",
                "inverse-primary": "#a1d0c4",
                "surface-container-low": "#dffaef"
            },
            borderRadius: {
                "DEFAULT": "0.25rem",
                "lg": "0.5rem",
                "xl": "0.75rem",
                "full": "9999px"
            },
            spacing: {
                "gutter": "1rem",
                "space-xs": "0.25rem",
                "space-lg": "1.5rem",
                "space-sm": "0.5rem",
                "margin": "1.25rem",
                "space-xl": "2rem",
                "space-md": "1rem"
            },
            fontFamily: {
                "label-md": ["Plus Jakarta Sans"],
                "headline-sm": ["Plus Jakarta Sans"],
                "label-sm": ["Plus Jakarta Sans"],
                "label-lg": ["Plus Jakarta Sans"],
                "body-sm": ["Plus Jakarta Sans"],
                "body-md": ["Plus Jakarta Sans"],
                "headline-md": ["Plus Jakarta Sans"],
                "body-lg": ["Plus Jakarta Sans"],
                "headline-lg": ["Plus Jakarta Sans"],
                "headline-xl": ["Plus Jakarta Sans"]
            },
            fontSize: {
                "label-md": ["12px", { lineHeight: "16px", letterSpacing: "0.02em", fontWeight: "600" }],
                "headline-sm": ["18px", { lineHeight: "24px", fontWeight: "600" }],
                "label-sm": ["11px", { lineHeight: "14px", letterSpacing: "0.03em", fontWeight: "700" }],
                "label-lg": ["14px", { lineHeight: "20px", letterSpacing: "0.01em", fontWeight: "600" }],
                "body-sm": ["12px", { lineHeight: "16px", fontWeight: "400" }],
                "body-md": ["14px", { lineHeight: "20px", fontWeight: "400" }],
                "headline-md": ["22px", { lineHeight: "28px", letterSpacing: "-0.01em", fontWeight: "600" }],
                "body-lg": ["16px", { lineHeight: "24px", fontWeight: "400" }],
                "headline-lg": ["26px", { lineHeight: "34px", letterSpacing: "-0.015em", fontWeight: "700" }],
                "headline-xl": ["32px", { lineHeight: "40px", letterSpacing: "-0.02em", fontWeight: "700" }]
            }
            },
        },
        }
    </script>
    <style>
        .material-symbols-outlined {
        font-variation-settings: 'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 24;
        display: inline-block;
        vertical-align: middle;
        line-height: 1;
        }
        .custom-shadow-soft {
        box-shadow: 0 4px 16px rgba(38, 61, 54, 0.08);
        }
        .custom-shadow-elevated {
        box-shadow: 0 8px 24px -2px rgba(38, 61, 54, 0.12);
        }
        .hide-scrollbar::-webkit-scrollbar {
        display: none;
        }
        .hide-scrollbar {
        -ms-overflow-style: none;
        scrollbar-width: none;
        }
    </style>
    <style>
        body {
        min-height: 100dvh;
        }
        #app-shell {
        width: 100%;
        max-width: 1200px;
        min-height: 100dvh;
        }
        @media (min-width: 900px) {
        #app-shell > main {
        display: grid;
        grid-template-columns: repeat(2, minmax(0, 1fr));
        align-content: start;
        }
        #app-shell > main > section:first-child,
        #app-shell > main > section:nth-child(4),
        #app-shell > main > section:nth-child(5) {
        grid-column: 1 / -1;
        }
        #app-shell > header {
        padding-left: 2rem;
        padding-right: 2rem;
        }
        }
    </style>
    </head>
    <body class="bg-[#E6F2DD] text-[#263D36] min-h-screen antialiased flex justify-center selection:bg-secondary-container">
    <div id="app-shell" class="w-full min-h-screen bg-[#E6F2DD] relative pb-28 flex flex-col">
    <!-- TopAppBar -->
    <header class="sticky top-0 z-40 bg-[#E6F2DD] px-5 pt-3 pb-2 backdrop-blur-md bg-opacity-95">
    <div class="flex justify-between items-center w-full">
    <div class="flex items-center gap-2.5">
    <div class="w-10 h-10 rounded-full overflow-hidden border border-[#88BDA4]/40 custom-shadow-soft flex-shrink-0 bg-white">
    <img class="w-full h-full object-cover" data-alt="A bright high-key portrait of Alex smiling gently, illuminated by natural morning sunlight against a softly blurred neutral interior wall. The image features natural fresh tones with organic botanical greenery subtly visible in the background, exuding a trustworthy and relaxed domestic lifestyle aesthetic." src="https://lh3.googleusercontent.com/aida-public/AB6AXuCRQl61VRhebKkf-wcsfPHPfoO-LgVMzgtonDhBRoQzqXqVE0m2aye8G8eOZECIR8eN4yAVtstc-kTRfmtyJHx6qGsrnllcn3MXphdRtBhGiEZk4WSwJZdnPH3gW9HgRzh3gZ-VexAVd8KY_b94Psx0PdNr7ruL2Aqi-b1fKmKQHLB4XwiyMF2EYSUPpahHjgbuN05bymVpEGbavrj3cjYZb2C04rEZ1EbgE10c4LmNxjVR7KoAW-2ZQg"/>
    </div>
    <div>
    <div class="font-label-sm text-label-sm text-[#4A685E] tracking-tight flex items-center gap-1">
    <span>Good morning, Alex</span>
    <span class="text-sm">👋</span>
    </div>
    <button class="flex items-center gap-1 text-left group">
    <span class="material-symbols-outlined text-[17px] text-[#659287]" data-icon="location_on">location_on</span>
    <span class="font-headline-sm text-[14px] leading-tight font-bold text-[#263D36] truncate max-w-[190px]">142 Greenview Lane, Apt 4B</span>
    <span class="material-symbols-outlined text-[16px] text-[#4A685E] group-hover:translate-y-0.5 transition-transform" data-icon="keyboard_arrow_down">keyboard_arrow_down</span>
    </button>
    </div>
    </div>
    <div class="flex items-center gap-2">
    <button aria-label="Notifications" class="relative w-10 h-10 rounded-full bg-white flex items-center justify-center text-[#263D36] custom-shadow-soft active:scale-95 transition-transform">
    <span class="material-symbols-outlined text-[22px] text-[#263D36]" data-icon="notifications">notifications</span>
    <span class="absolute top-2 right-2 w-2.5 h-2.5 rounded-full bg-[#FFDDB0] border-2 border-white"></span>
    </button>
    </div>
    </div>
    </header>
    <!-- Main Content Canvas -->
    <main class="px-5 flex flex-col gap-5 pt-1">
    <!-- Search & Filter Bar -->
    <section class="flex items-center gap-2.5">
    <div class="relative flex-1 flex items-center">
    <span class="material-symbols-outlined absolute left-3.5 text-[#659287] text-[20px]" data-icon="search">search</span>
    <input class="w-full h-[50px] pl-10 pr-4 bg-white rounded-2xl border border-[#88BDA4]/30 font-body-md text-body-md text-[#263D36] placeholder-[#4A685E]/70 focus:outline-none focus:border-[#659287] custom-shadow-soft transition-all" placeholder='Search "deep cleaning", "plumber"...' type="text"/>
    </div>
    <button aria-label="Filters" class="w-[50px] h-[50px] rounded-2xl bg-[#659287] text-white flex items-center justify-center custom-shadow-soft active:scale-95 transition-transform flex-shrink-0">
    <span class="material-symbols-outlined text-[22px]" data-icon="tune">tune</span>
    </button>
    </section>
    <!-- Active Booking Status Card (Ongoing tracker) -->
    <section class="w-full">
    <div class="bg-white rounded-[22px] p-4 border border-[#B1D3B9] custom-shadow-elevated relative overflow-hidden">
    <div class="absolute -right-6 -bottom-6 w-24 h-24 bg-[#E6F2DD]/60 rounded-full blur-xl pointer-events-none"></div>
    <div class="flex items-center justify-between gap-2 mb-3">
    <div class="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-[#FFDDB0] text-[#263D36] font-label-sm text-label-sm">
    <span class="w-1.5 h-1.5 rounded-full bg-[#263D36] animate-pulse"></span>
                Upcoming Service Today
                </div>
    <span class="font-label-sm text-label-sm text-[#4A685E] font-medium">Order #SP-8491</span>
    </div>
    <div class="flex items-start justify-between gap-3 mb-3.5">
    <div>
    <h3 class="font-headline-sm text-[16px] text-[#263D36] font-bold leading-snug">AC Maintenance & Filter Swap</h3>
    <p class="font-body-sm text-body-sm text-[#4A685E] mt-0.5 flex items-center gap-1.5">
    <span>Marcus Vance</span>
    <span class="inline-flex items-center text-[#263D36] font-bold font-label-sm text-[11px] bg-[#E6F2DD] px-1.5 py-0.5 rounded-md">
                    4.9 <span class="material-symbols-outlined text-[12px] text-[#705835] ml-0.5" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
    </span>
    </p>
    </div>
    <div class="w-11 h-11 rounded-xl bg-[#E6F2DD] flex items-center justify-center text-[#659287] flex-shrink-0">
    <span class="material-symbols-outlined text-[24px]" data-icon="mode_fan">mode_fan</span>
    </div>
    </div>
    <div class="bg-[#E6F2DD]/50 rounded-xl p-2.5 flex items-center justify-between mb-3.5 border border-[#88BDA4]/20">
    <div class="flex items-center gap-2">
    <span class="material-symbols-outlined text-[#659287] text-[18px]" data-icon="schedule">schedule</span>
    <span class="font-label-md text-label-md text-[#263D36]">Today, 2:30 PM</span>
    </div>
    <div class="flex items-center gap-1.5 text-[#38645a] font-label-md text-label-md font-semibold">
    <span>Technician on the way</span>
    <span class="text-sm">🛵</span>
    </div>
    </div>
    <div class="grid grid-cols-2 gap-2">
    <button class="h-[40px] rounded-full bg-[#659287] text-white font-label-lg text-label-lg flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform">
    <span class="material-symbols-outlined text-[18px]" data-icon="near_me">near_me</span>
                Track
                </button>
    <button class="h-[40px] rounded-full bg-[#B1D3B9]/35 text-[#263D36] font-label-lg text-label-lg flex items-center justify-center gap-1.5 active:scale-[0.98] transition-transform hover:bg-[#B1D3B9]/50">
    <span class="material-symbols-outlined text-[18px] text-[#263D36]" data-icon="call">call</span>
                Call
                </button>
    </div>
    </div>
    </section>
    <!-- Hero Offer Banner -->
    <section class="w-full">
    <div class="rounded-[22px] p-5 text-white relative overflow-hidden custom-shadow-elevated" style="background: linear-gradient(135deg, #659287 0%, #4A685E 55%, #38645a 100%);">
    <!-- Abstract organic foliage decorations -->
    <div class="absolute -right-8 -top-8 w-36 h-36 rounded-full bg-[#88BDA4]/25 blur-lg pointer-events-none"></div>
    <div class="absolute right-4 bottom-2 opacity-15 pointer-events-none">
    <span class="material-symbols-outlined text-[110px]" data-icon="potted_plant">potted_plant</span>
    </div>
    <div class="relative z-10 max-w-[260px]">
    <div class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#FFDDB0] text-[#263D36] font-label-sm text-label-sm font-bold tracking-wider mb-2">
                CODE: FRESH25
                </div>
    <h2 class="font-headline-lg text-[22px] leading-tight font-extrabold text-white mb-1.5">
                Spring Home Refresh ✨
                </h2>
    <p class="font-body-sm text-body-sm text-[#e6fff5] mb-4 leading-relaxed">
                Get 25% off deep cleaning & garden care this week.
                </p>
    <button class="h-[42px] px-5 rounded-full bg-white text-[#659287] font-label-lg text-label-lg font-bold inline-flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform">
    <span>Book Now</span>
    <span class="material-symbols-outlined text-[18px]" data-icon="arrow_forward">arrow_forward</span>
    </button>
    </div>
    </div>
    </section>
    <!-- Service Categories Grid -->
    <section class="w-full">
    <div class="flex items-center justify-between mb-3 px-0.5">
    <h2 class="font-headline-sm text-headline-sm font-bold text-[#263D36]">Popular Services</h2>
    <button class="font-label-md text-label-md font-bold text-[#659287] hover:underline flex items-center">
                See All
                <span class="material-symbols-outlined text-[16px] ml-0.5" data-icon="chevron_right">chevron_right</span>
    </button>
    </div>
    <div class="grid grid-cols-4 gap-2.5">
    <!-- 1. Cleaning -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/cleaning.jpg"
    alt="Cleaning"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Cleaning</span>
    </div>
    <!-- 2. Plumbing -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 flex items-center justify-center custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/plumbing.jpeg"
    alt="Plumbing"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Plumbing</span>
    </div>
    <!-- 3. Electrical -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 flex items-center justify-center custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/electrical.jpg"
    alt="Electrical"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Electrical</span>
    </div>
    <!-- 4. Gardening -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 flex items-center justify-center custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/gardening.jpg"
    alt="Gardening"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Gardening</span>
    </div>
    <!-- 5. Painting -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 flex items-center justify-center custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/painting.jpg"
    alt="Painting"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Painting</span>
    </div>
    <!-- 6. Appliances -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 flex items-center justify-center custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/appliances.jpg"
    alt="Appliances"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Appliances</span>
    </div>
    <!-- 7. Handyman -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 flex items-center justify-center custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/handyman.jpg"
    alt="Handyman"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Handyman</span>
    </div>
    <!-- 8. Pest Control -->
    <div class="group flex flex-col items-center cursor-pointer active:scale-95 transition-transform">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 flex items-center justify-center custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <div class="w-full aspect-square rounded-[18px] bg-white border border-[#88BDA4]/25 p-2 custom-shadow-soft group-hover:bg-[#B1D3B9]/20 transition-colors">
    <img
    src="./images/pestcontrol.jpg"
    alt="Pest Control"
    class="block h-full w-full rounded-[12px] object-cover"
    />
    </div>
    </div>
    <span class="font-label-md text-[12px] font-semibold text-[#263D36] mt-2 text-center truncate w-full">Pest Control</span>
    </div>
    </div>
    </section>
    <!-- Trusted Pros Near You -->
    <section class="w-full">
    <div class="flex items-center justify-between mb-3 px-0.5">
    <div>
    <h2 class="font-headline-sm text-headline-sm font-bold text-[#263D36]">Trusted Pros Near You</h2>
    <p class="font-body-sm text-[12px] text-[#4A685E]">Vetted background-checked specialists</p>
    </div>
    <button class="font-label-md text-label-md font-bold text-[#659287] hover:underline flex items-center">
                View All
            </button>
    </div>
    <div class="flex gap-3 overflow-x-auto hide-scrollbar pb-2 -mx-5 px-5">
    <!-- Card 1: Elena Rostova -->
    <div class="w-[280px] flex-shrink-0 bg-white rounded-[20px] p-4 border border-[#88BDA4]/25 custom-shadow-soft flex flex-col justify-between">
    <div>
    <div class="flex items-start gap-3 mb-3">
    <div class="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#88BDA4]/30">
    <img class="w-full h-full object-cover" data-alt="A portrait of Elena Rostova, a smiling female professional deep cleaner wearing a tidy apron with a neutral clean domestic background. Warm, natural diffused daylight highlights her approachable expression, maintaining an organic and dependable biophilic aesthetic with sage green accents." src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-euvNKZ5aFNIbPS0kC6uDzZU_GLCZXso5vlTbWxpVheW1h8Y8AFGgydfKquJVRDdrTC0QFh50QKn2FIN7J7PsXtw-ennm8yvCU_qZhpEdVYSvEuNH89mN6kZOMr99GR9zMy8hdCurjZSPpp7DeNjSXWjyZ3SvkKQoBsBL1lgJ-S4Rn4moHY8NyfWmHqCsCVgFpl0VM6eL9Re4MprjiwCh6Jr0gDdZuQqLKZMxP6bPQ5fDibVRrVDZLg"/>
    <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#659287] rounded-full border-2 border-white flex items-center justify-center">
    <span class="material-symbols-outlined text-[9px] text-white font-bold" data-icon="check">check</span>
    </span>
    </div>
    <div class="flex-1 min-w-0">
    <div class="flex items-center gap-1">
    <h4 class="font-headline-sm text-[15px] font-bold text-[#263D36] truncate">Elena Rostova</h4>
    <span class="material-symbols-outlined text-[16px] text-[#659287]" data-icon="verified" data-weight="fill" style="font-variation-settings: 'FILL' 1;">verified</span>
    </div>
    <p class="font-body-sm text-[12px] text-[#4A685E] truncate">Certified Deep Cleaner</p>
    <div class="flex items-center gap-1 mt-1">
    <span class="material-symbols-outlined text-[14px] text-[#705835]" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
    <span class="font-label-sm text-[11px] font-bold text-[#263D36]">4.9</span>
    <span class="font-body-sm text-[11px] text-[#4A685E]">(128 reviews)</span>
    </div>
    </div>
    </div>
    <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#E6F2DD] text-[#263D36] font-label-sm text-[11px] font-semibold mb-3">
    <span class="material-symbols-outlined text-[13px] text-[#659287]" data-icon="eco">eco</span>
                    Eco-Friendly Supplies
                </div>
    </div>
    <div class="pt-3 border-t border-[#88BDA4]/20 flex items-center justify-between">
    <div>
    <span class="font-headline-sm text-[17px] font-extrabold text-[#263D36]">$35</span>
    <span class="font-body-sm text-[11px] text-[#4A685E]">/hr</span>
    </div>
    <button class="h-[34px] px-4 rounded-full bg-[#659287] text-white font-label-md text-label-md font-semibold active:scale-95 transition-transform flex items-center gap-1">
    <span>Book</span>
    </button>
    </div>
    </div>
    <!-- Card 2: David Miller -->
    <div class="w-[280px] flex-shrink-0 bg-white rounded-[20px] p-4 border border-[#88BDA4]/25 custom-shadow-soft flex flex-col justify-between">
    <div>
    <div class="flex items-start gap-3 mb-3">
    <div class="relative w-12 h-12 rounded-full overflow-hidden flex-shrink-0 border border-[#88BDA4]/30">
    <img class="w-full h-full object-cover" data-alt="A portrait of David Miller, an experienced male plumber and technician with a warm confident expression in clean work attire against a soft neutral studio backdrop. Soft atmospheric natural light casts subtle shadows, reflecting dependability and modern domestic service quality." src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCQJ4sWA5v5jJURXBHgTyM9wASdLiZtd4DmxIGtnffawxEAgxRX3FtrtZNm9Zo7TO0tfbdFk6vDjF596heIvJoF1O1LENLLZJ_-HigsjOkIj6m4209CtLK2yHrRgjvlBpc4w2mkKGpMdgdsKmkWdGrKcW5wvgjXyDw8M75EQlig2IIzg2J-XcNHABCXiOeOjdRTvlfsUsYMzTbVI230hxOxOuecdzyd5onNzt_VEAQYcp09jZ1Ej1oag"/>
    <span class="absolute bottom-0 right-0 w-3.5 h-3.5 bg-[#659287] rounded-full border-2 border-white flex items-center justify-center">
    <span class="material-symbols-outlined text-[9px] text-white font-bold" data-icon="check">check</span>
    </span>
    </div>
    <div class="flex-1 min-w-0">
    <div class="flex items-center gap-1">
    <h4 class="font-headline-sm text-[15px] font-bold text-[#263D36] truncate">David Miller</h4>
    <span class="material-symbols-outlined text-[16px] text-[#659287]" data-icon="verified" data-weight="fill" style="font-variation-settings: 'FILL' 1;">verified</span>
    </div>
    <p class="font-body-sm text-[12px] text-[#4A685E] truncate">Master Plumber & Pipe Specialist</p>
    <div class="flex items-center gap-1 mt-1">
    <span class="material-symbols-outlined text-[14px] text-[#705835]" data-icon="star" data-weight="fill" style="font-variation-settings: 'FILL' 1;">star</span>
    <span class="font-label-sm text-[11px] font-bold text-[#263D36]">4.8</span>
    <span class="font-body-sm text-[11px] text-[#4A685E]">(94 reviews)</span>
    </div>
    </div>
    </div>
    <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-[#FFDDB0] text-[#263D36] font-label-sm text-[11px] font-semibold mb-3">
    <span class="material-symbols-outlined text-[13px] text-[#263D36]" data-icon="bolt">bolt</span>
                    Fast Response
                </div>
    </div>
    <div class="pt-3 border-t border-[#88BDA4]/20 flex items-center justify-between">
    <div>
    <span class="font-headline-sm text-[17px] font-extrabold text-[#263D36]">$45</span>
    <span class="font-body-sm text-[11px] text-[#4A685E]">/hr</span>
    </div>
    <button class="h-[34px] px-4 rounded-full bg-[#659287] text-white font-label-md text-label-md font-semibold active:scale-95 transition-transform flex items-center gap-1">
    <span>Book</span>
    </button>
    </div>
    </div>
    </div>
    </section>
    </main>
    <!-- BottomNavBar (Docked Flutter mobile bottom navigation) -->
    <nav class="fixed bottom-0 left-0 w-full z-50 flex justify-center pointer-events-none">
    <div class="w-full max-w-[1200px] bg-white rounded-t-2xl custom-shadow-elevated px-4 py-2 pointer-events-auto flex justify-around items-center">
    <!-- Home (Active Item based on Shared Components JSON) -->
    <button class="flex flex-col items-center justify-center bg-secondary-container text-on-secondary-container rounded-full px-4 py-1.5 transition-all duration-200">
    <span class="material-symbols-outlined text-[22px]" data-icon="home" data-weight="fill" style="font-variation-settings: 'FILL' 1;">home</span>
    <span class="font-label-sm text-label-sm mt-0.5">Home</span>
    </button>
    <!-- Bookings -->
    <button class="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1.5 hover:bg-surface-container transition-all duration-200 rounded-full">
    <span class="material-symbols-outlined text-[22px]" data-icon="calendar_today">calendar_today</span>
    <span class="font-label-sm text-label-sm mt-0.5">Bookings</span>
    </button>
    <!-- Messages -->
    <button class="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1.5 hover:bg-surface-container transition-all duration-200 rounded-full relative">
    <span class="material-symbols-outlined text-[22px]" data-icon="chat_bubble">chat_bubble</span>
    <span class="absolute top-1.5 right-3 w-2 h-2 rounded-full bg-[#659287]"></span>
    <span class="font-label-sm text-label-sm mt-0.5">Messages</span>
    </button>
    <!-- Profile -->
    <button class="flex flex-col items-center justify-center text-on-surface-variant px-3 py-1.5 hover:bg-surface-container transition-all duration-200 rounded-full">
    <span class="material-symbols-outlined text-[22px]" data-icon="person">person</span>
    <span class="font-label-sm text-label-sm mt-0.5">Profile</span>
    </button>
    </div>
    </nav>
    </div>
    </body></html>
  `;

  if (Platform.OS === 'web') {
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.webview}>
          {React.createElement('iframe', {
            srcDoc: htmlContent,
            title: 'Sproutly household services',
            style: { border: 0, width: '100%', height: '100%', display: 'block' },
          })}
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.container}>
      <WebView
        originWhitelist={['*']}
        source={{ html: htmlContent }}
        style={styles.webview}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  webview: {
    flex: 1,
  },
});
