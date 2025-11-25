// Eligible addresses list
const ELIGIBLE_ADDRESSES = [
    "1612 N 19TH AVE","1719 N 22ND AVE","1901 W HOLLY ST","1901 W MONTE VISTA RD","1901 W PALM LN","1901 W VIRGINIA AVE","1902 W GRANADA RD","1902 W HOLLY ST","1902 W MONTE VISTA RD","1902 W PALM LN","1903 W GRANADA RD","1903 W HOLLY ST","1903 W MONTE VISTA RD","1903 W PALM LN","1904 W GRANADA RD","1904 W HOLLY ST","1904 W PALM LN","1905 W CAMBRIDGE AVE","1905 W GRANADA RD","1905 W HOLLY ST","1905 W MONTE VISTA RD","1905 W PALM LN","1906 W CAMBRIDGE AVE","1906 W GRANADA RD","1906 W HOLLY ST","1906 W MONTE VISTA RD","1906 W PALM LN","1907 W GRANADA RD","1907 W HOLLY ST","1907 W MONTE VISTA RD","1907 W PALM LN","1907 W VIRGINIA AVE","1908 W GRANADA RD","1908 W HOLLY ST","1908 W MONTE VISTA RD","1908 W PALM LN","1909 W GRANADA RD","1909 W HOLLY ST","1909 W MONTE VISTA RD","1909 W PALM LN","1910 W GRANADA RD","1910 W HOLLY ST","1910 W MONTE VISTA RD","1910 W PALM LN","1911 W GRANADA RD","1911 W HOLLY ST","1911 W MONTE VISTA RD","1911 W PALM LN","1911 W WILSHIRE DR","1912 W GRANADA RD","1912 W HOLLY ST","1912 W MONTE VISTA RD","1912 W PALM LN","1913 W GRANADA RD","1913 W HOLLY ST","1913 W MONTE VISTA RD","1913 W PALM LN","1913 W VIRGINIA AVE","1914 W GRANADA RD","1914 W HOLLY ST","1914 W MONTE VISTA RD","1914 W PALM LN","1914 W VIRGINIA AVE","1914 W WILSHIRE DR","1915 W CAMBRIDGE AVE","1915 W GRANADA RD","1915 W HOLLY ST","1915 W MONTE VISTA RD","1915 W PALM LN","1916 W CAMBRIDGE AVE","1916 W HOLLY ST","1916 W MONTE VISTA RD","1916 W PALM LN","1917 W ASHLAND AVE","1917 W GRANADA RD","1917 W HOLLY ST","1917 W MONTE VISTA RD","1917 W PALM LN","1917 W WILSHIRE DR","1918 W ASHLAND AVE","1918 W GRANADA RD","1918 W HOLLY ST","1918 W MONTE VISTA RD","1918 W PALM LN","1918 W VIRGINIA AVE","1919 W ASHLAND AVE","1919 W GRANADA RD","1919 W HOLLY ST","1919 W MONTE VISTA RD","1919 W PALM LN","1919 W VIRGINIA AVE","1920 W GRANADA RD","1920 W HOLLY ST","1920 W MONTE VISTA RD","1920 W PALM LN","1921 W GRANADA RD","1921 W HOLLY ST","1921 W MONTE VISTA RD","1921 W PALM LN","1922 W GRANADA RD","1922 W HOLLY ST","1922 W MONTE VISTA RD","1922 W PALM LN","1923 W ASHLAND AVE","1923 W GRANADA RD","1923 W HOLLY ST","1923 W MONTE VISTA RD","1923 W PALM LN","1924 W ASHLAND AVE","1924 W GRANADA RD","1924 W HOLLY ST","1924 W MONTE VISTA RD","1924 W PALM LN","1924 W VIRGINIA AVE","1924 W WILSHIRE DR","1925 W HOLLY ST","1925 W PALM LN","1925 W VIRGINIA AVE","1925 W WILSHIRE DR","1926 W GRANADA RD","1926 W HOLLY ST","1927 W GRANADA RD","1927 W HOLLY ST","1927 W PALM LN","1927 W VIRGINIA AVE","1928 W HOLLY ST","1928 W MONTE VISTA RD","1928 W VIRGINIA AVE","1930 W ASHLAND AVE","1931 W ASHLAND AVE","1934 W VIRGINIA AVE","1937 W VIRGINIA AVE","1938 W VIRGINIA AVE","1948 W VIRGINIA AVE","1950 W PALM LN","1953 W GRANADA RD","1953 W MONTE VISTA RD","1954 W GRANADA RD","1954 W PALM LN","2001 W ALVARADO RD","2001 W CYPRESS ST","2001 W EDGEMONT AVE","2001 W ENCANTO BLVD","2001 W MONTE VISTA RD","2002 W ALVARADO RD","2002 W CYPRESS ST","2002 W EDGEMONT AVE","2002 W HOLLY ST","2002 W MONTE VISTA RD","2003 W CYPRESS ST","2004 W CYPRESS ST","2005 W CYPRESS ST","2005 W MONTE VISTA RD","2006 W HOLLY ST","2006 W MONTE VISTA RD","2007 W ALVARADO RD","2007 W CYPRESS ST","2007 W EDGEMONT AVE","2008 W ALVARADO RD","2008 W EDGEMONT AVE","2009 W CYPRESS ST","2009 W MONTE VISTA RD","2009 W VIRGINIA AVE","2010 W CAMBRIDGE AVE","2010 W HOLLY ST","2010 W MONTE VISTA RD","2010 W VIRGINIA AVE","2011 W CAMBRIDGE AVE","2011 W CYPRESS ST","2012 W WINDSOR AVE","2013 W ALVARADO RD","2013 W WINDSOR AVE","2014 W ALVARADO RD","2014 W CYPRESS ST","2014 W EDGEMONT AVE","2015 W MONTE VISTA RD","2015 W VIRGINIA AVE","2016 W HOLLY ST","2016 W MONTE VISTA RD","2016 W VIRGINIA AVE","2017 W EDGEMONT AVE","2018 W CAMBRIDGE AVE","2019 W ALVARADO RD","2019 W MONTE VISTA RD","2019 W VIRGINIA AVE","2020 W ALVARADO RD","2020 W CYPRESS ST","2020 W EDGEMONT AVE","2020 W HOLLY ST","2020 W MONTE VISTA RD","2020 W VIRGINIA AVE","2020 W WINDSOR AVE","2021 W CAMBRIDGE AVE","2022 W WILSHIRE DR","2023 W MONTE VISTA RD","2023 W WILSHIRE DR","2023 W WINDSOR AVE","2024 W HOLLY ST","2025 W ALVARADO RD","2025 W VIRGINIA AVE","2026 W ALVARADO RD","2026 W CAMBRIDGE AVE","2026 W CYPRESS ST","2026 W MONTE VISTA RD","2026 W VIRGINIA AVE","2026 W WILSHIRE DR","2027 W EDGEMONT AVE","2027 W MONTE VISTA RD","2028 W EDGEMONT AVE","2028 W HOLLY ST","2028 W WINDSOR AVE","2029 W CAMBRIDGE AVE","2029 W VIRGINIA AVE","2029 W WILSHIRE DR","2030 W MONTE VISTA RD","2030 W VIRGINIA AVE","2030 W WILSHIRE DR","2031 W ALVARADO RD","2031 W WINDSOR AVE","2032 W ALVARADO RD","2032 W CAMBRIDGE AVE","2032 W CYPRESS ST","2033 W EDGEMONT AVE","2033 W WILSHIRE DR","2034 W CYPRESS ST","2034 W EDGEMONT AVE","2034 W HOLLY ST","2034 W MONTE VISTA RD","2034 W WINDSOR AVE","2035 W MONTE VISTA RD","2035 W VIRGINIA AVE","2036 W VIRGINIA AVE","2036 W WILSHIRE DR","2037 W ALVARADO RD","2037 W CAMBRIDGE AVE","2037 W CYPRESS ST","2038 W ALVARADO RD","2038 W CYPRESS ST","2038 W HOLLY ST","2038 W MONTE VISTA RD","2038 W WINDSOR AVE","2039 W MONTE VISTA RD","2039 W VIRGINIA AVE","2039 W WILSHIRE DR","2039 W WINDSOR AVE","2040 W CAMBRIDGE AVE","2040 W VIRGINIA AVE","2040 W WILSHIRE DR","2041 W EDGEMONT AVE","2042 W EDGEMONT AVE","2046 W WINDSOR AVE","2047 W CAMBRIDGE AVE","2047 W EDGEMONT AVE","2047 W WINDSOR AVE","2048 W CAMBRIDGE AVE","2048 W EDGEMONT AVE","2051 W CAMBRIDGE AVE","2051 W WINDSOR AVE","2055 W EDGEMONT AVE","2055 W WINDSOR AVE","2056 W EDGEMONT AVE","2056 W WINDSOR AVE","2057 W CAMBRIDGE AVE","2058 W CAMBRIDGE AVE","2060 W WINDSOR AVE","2061 W WINDSOR AVE","2065 W CAMBRIDGE AVE","2066 W CAMBRIDGE AVE","2101 W CAMBRIDGE AVE","2101 W VIRGINIA AVE","2101 W WINDSOR AVE","2102 W CAMBRIDGE AVE","2102 W LEWIS AVE","2102 W VIRGINIA AVE","2102 W WILSHIRE DR","2104 W LEWIS AVE","2104 W WILSHIRE DR","2106 W LEWIS AVE","2107 W ALVARADO RD","2107 W CAMBRIDGE AVE","2107 W WILSHIRE DR","2108 W CAMBRIDGE AVE","2108 W VIRGINIA AVE","2109 W ALVARADO RD","2109 W WINDSOR AVE","2111 W WILSHIRE DR","2112 W VIRGINIA AVE","2112 W WILSHIRE DR","2113 W ALVARADO RD","2113 W CAMBRIDGE AVE","2114 W CAMBRIDGE AVE","2114 W LEWIS AVE","2114 W WILSHIRE DR","2115 W ALVARADO RD","2115 W VIRGINIA AVE","2116 W VIRGINIA AVE","2116 W WINDSOR AVE","2117 W WILSHIRE DR","2117 W WINDSOR AVE","2118 W LEWIS AVE","2118 W WILSHIRE DR","2119 W CAMBRIDGE AVE","2119 W EDGEMONT AVE","2120 W CAMBRIDGE AVE","2120 W WILSHIRE DR","2121 N 23RD AVE","2121 W WILSHIRE DR","2122 W LEWIS AVE","2122 W VIRGINIA AVE","2122 W WILSHIRE DR","2122 W WINDSOR AVE","2123 W WINDSOR AVE","2124 W WILSHIRE DR","2125 W CAMBRIDGE AVE","2125 W EDGEMONT AVE","2125 W VIRGINIA AVE","2126 W CAMBRIDGE AVE","2126 W VIRGINIA AVE","2128 W LEWIS AVE","2128 W WINDSOR AVE","2129 W VIRGINIA AVE","2129 W WINDSOR AVE","2130 W EDGEMONT AVE","2131 W CAMBRIDGE AVE","2132 W CAMBRIDGE AVE","2132 W VIRGINIA AVE","2133 W EDGEMONT AVE","2133 W WILSHIRE DR","2134 W WINDSOR AVE","2135 W WINDSOR AVE","2136 W LEWIS AVE","2136 W VIRGINIA AVE","2137 W CAMBRIDGE AVE","2137 W THOMAS RD","2138 W CAMBRIDGE AVE","2138 W LEWIS AVE","2139 W WILSHIRE DR","2139 W WINDSOR AVE","2140 W LEWIS AVE","2140 W WINDSOR AVE","2141 W CAMBRIDGE AVE","2141 W WILSHIRE DR","2142 W CAMBRIDGE AVE","2143 W WILSHIRE DR","2144 W LEWIS AVE","2146 W VIRGINIA AVE","2148 W ENCANTO BLVD","2148 W LEWIS AVE","2201 W CAMBRIDGE AVE","2201 W EDGEMONT AVE","2201 W MONTE VISTA RD","2201 W THOMAS RD","2201 W WINDSOR AVE","2202 GRAND AVE","2202 W EDGEMONT AVE","2202 W VIRGINIA AVE","2202 W WINDSOR AVE","2204 W VIRGINIA AVE","2205 W CAMBRIDGE AVE","2207 W EDGEMONT AVE","2207 W THOMAS RD","2207 W WINDSOR AVE","2208 W CAMBRIDGE AVE","2208 W WINDSOR AVE","2210 W EDGEMONT AVE","2211 W CAMBRIDGE AVE","2211 W WINDSOR AVE","2212 W CAMBRIDGE AVE","2212 W VIRGINIA AVE","2213 W THOMAS RD","2214 W MCDOWELL RD","2214 W WINDSOR AVE","2215 W CAMBRIDGE AVE","2215 W EDGEMONT AVE","2217 W WINDSOR AVE","2218 W CAMBRIDGE AVE","2218 W EDGEMONT AVE","2218 W VIRGINIA AVE","2221 W CAMBRIDGE AVE","2221 W THOMAS RD","2222 W MCDOWELL RD","2222 W VIRGINIA AVE","2223 W WINDSOR AVE","2224 W CAMBRIDGE AVE","2225 W CAMBRIDGE AVE","2225 W THOMAS RD","2227 W CAMBRIDGE AVE","2228 W VIRGINIA AVE","2229 W CAMBRIDGE AVE","2230 W CAMBRIDGE AVE","2231 W WINDSOR AVE","2234 W CAMBRIDGE AVE","2234 W VIRGINIA AVE","2236 W VIRGINIA AVE","2237 W CAMBRIDGE AVE","2237 W WINDSOR AVE","2240 W CAMBRIDGE AVE","2241 W CAMBRIDGE AVE","2242 N 21ST DR","2244 N 21ST DR","2244 W CAMBRIDGE AVE","2244 W WINDSOR AVE","2245 W THOMAS RD","2246 N 21ST DR","2246 W VIRGINIA AVE","2249 W VIRGINIA AVE","2256 N 21ST DR","2401 N 20TH AVE","2401 N 20TH DR","2401 N 21ST AVE","2402 N 19TH AVE","2402 N 19TH DR","2402 N 20TH AVE","2402 N 20TH DR","2407 N 20TH AVE","2407 N 20TH DR","2407 N 21ST AVE","2408 N 19TH DR","2408 N 20TH AVE","2408 N 20TH DR","2408 N 21ST AVE","2411 N 20TH DR","2412 N 20TH AVE","2413 N 20TH AVE","2413 N 21ST AVE","2414 N 19TH DR","2414 N 20TH DR","2414 N 21ST AVE","2417 N 20TH AVE","2417 N 20TH DR","2417 N 21ST AVE","2418 N 19TH DR","2418 N 20TH AVE","2418 N 20TH DR","2421 N 20TH DR","2422 N 20TH AVE","2423 N 20TH AVE","2424 N 19TH DR","2427 N 20TH AVE","2427 N 20TH DR","2428 N 20TH AVE","2428 N 21ST AVE","2430 N 19TH DR","2431 N 20TH DR","2431 N 23RD AVE","2433 N 20TH AVE","2433 N 23RD AVE","2434 N 19TH DR","2434 N 20TH AVE","2434 N 22ND AVE","2435 N 20TH DR","2435 N 23RD AVE","2436 N 22ND AVE","2437 N 20TH AVE","2437 N 23RD AVE","2438 N 20TH AVE","2438 N 22ND AVE","2439 N 23RD AVE","2440 N 19TH DR","2440 N 22ND AVE","2441 N 23RD AVE","2442 N 22ND AVE","2443 N 20TH AVE","2443 N 23RD AVE","2444 N 20TH AVE","2444 N 22ND AVE","2445 N 23RD AVE","2446 N 22ND AVE","2447 N 20TH AVE","2447 N 23RD AVE","2448 N 20TH AVE","2448 N 22ND AVE","2449 N 23RD AVE","2450 N 22ND AVE","2501 N 22ND DR","2501 N 23RD AVE","2502 N 22ND AVE","2502 N 22ND DR","2503 N 22ND DR","2503 N 23RD AVE","2504 N 22ND AVE","2504 N 22ND DR","2505 N 22ND DR","2505 N 23RD AVE","2506 N 22ND AVE","2506 N 22ND DR","2507 N 22ND DR","2507 N 23RD AVE","2508 N 22ND AVE","2508 N 22ND DR","2509 N 22ND DR","2509 N 23RD AVE","2510 N 22ND AVE","2510 N 22ND DR","2511 N 22ND DR","2511 N 23RD AVE","2512 N 22ND AVE","2512 N 22ND DR","2513 N 22ND DR","2513 N 23RD AVE","2514 N 22ND AVE","2514 N 22ND DR","2515 N 22ND DR","2515 N 23RD AVE","2516 N 22ND AVE","2516 N 22ND DR","2517 N 22ND DR","2517 N 23RD AVE","2518 N 22ND AVE","2518 N 22ND DR","2519 N 22ND DR","2519 N 23RD AVE","2520 N 19TH AVE","2520 N 22ND AVE","2520 N 22ND DR","2521 N 22ND DR","2521 N 23RD AVE","2522 N 22ND AVE","2522 N 22ND DR","2523 N 22ND DR","2523 N 23RD AVE","2524 N 19TH AVE","2524 N 22ND AVE","2524 N 22ND DR","2525 N 22ND DR","2525 N 23RD AVE","2526 N 22ND AVE","2526 N 22ND DR","2527 N 22ND DR","2527 N 23RD AVE","2528 N 19TH AVE","2528 N 22ND AVE","2528 N 22ND DR","2529 N 22ND DR","2529 N 23RD AVE","2530 N 22ND AVE","2530 N 22ND DR","2531 N 22ND DR","2531 N 23RD AVE","2532 N 22ND AVE","2532 N 22ND DR","2533 N 22ND DR","2533 N 23RD AVE","2534 N 19TH AVE","2534 N 22ND AVE","2534 N 22ND DR","2535 N 22ND DR","2535 N 23RD AVE","2536 N 22ND DR","2537 N 22ND DR","2537 N 23RD AVE","2538 N 22ND DR","2539 N 22ND DR","2540 N 19TH AVE","2540 N 22ND DR","2541 N 22ND DR","2542 N 22ND DR","2543 N 22ND DR","2544 N 22ND DR","2545 N 22ND DR","2546 N 22ND DR","2547 N 22ND DR","2548 N 22ND DR","2549 N 22ND DR","2550 N 22ND DR","2551 N 22ND DR","2552 N 22ND DR","2553 N 22ND DR","2554 N 22ND DR","2555 N 22ND DR","2557 N 22ND DR","2559 N 22ND DR","2561 N 22ND DR","2563 N 22ND DR","2565 N 22ND DR","2602 N 20TH AVE","2607 N 23RD AVE","2610 N 20TH AVE","2611 N 20TH AVE","2614 N 19TH AVE","2614 N 20TH AVE","2618 N 20TH AVE","2621 N 20TH AVE","2622 N 20TH AVE","2623 N 20TH AVE","2624 N 19TH AVE","2624 N 22ND AVE","2626 N 19TH AVE","2627 N 20TH AVE","2630 N 20TH AVE","2631 N 20TH AVE","2634 N 20TH AVE","2635 N 20TH AVE","2635 N 23RD AVE","2638 N 20TH AVE","2639 N 23RD AVE","2640 N 20TH AVE","2646 N 20TH AVE","2647 N 20TH AVE","2650 N 19TH AVE","2652 N 20TH AVE","2653 N 20TH AVE","2658 N 19TH AVE","2701 N 20TH AVE","2701 N 21ST AVE","2702 N 19TH AVE","2702 N 20TH AVE","2702 N 21ST AVE","2702 N 22ND DR","2707 N 20TH AVE","2707 N 23RD AVE","2708 N 21ST AVE","2710 N 22ND DR","2712 N 19TH AVE","2712 N 20TH DR","2713 N 20TH DR","2713 N 21ST AVE","2713 N 23RD AVE","2715 N 20TH AVE","2716 N 21ST AVE","2716 N 22ND DR","2719 N 23RD AVE","2721 N 20TH AVE","2721 N 21ST AVE","2722 N 20TH DR","2722 N 21ST AVE","2724 N 22ND DR","2725 N 23RD AVE","2727 N 20TH DR","2727 N 21ST AVE","2727 N 21ST DR","2730 N 20TH DR","2730 N 21ST AVE","2731 N 23RD AVE","2732 N 21ST DR","2733 N 21ST DR","2735 N 21ST AVE","2736 N 20TH DR","2736 N 21ST AVE","2739 N 21ST DR","2740 N 21ST DR","2744 N 20TH DR","2744 N 21ST AVE","2745 N 21ST AVE","2747 N 21ST DR","2748 N 21ST DR","2810 N 19TH AVE","2814 N 19TH AVE","2818 N 19TH AVE","2826 N 19TH AVE","2830 N 19TH AVE","2834 N 19TH AVE"
];

// Tree catalog data from screenshots
const NATIVE_TREES = [
    { name: 'Blue Palo Verde', size: 'LARGE', growth: 'Fast', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Palo Brea', size: 'MEDIUM', growth: 'Fast', water: 'Low', thorny: true, powerline: true, beauty: true, shade: true, wildlife: true },
    { name: 'Cascalote', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Velvet Mesquite', size: 'MEDIUM', growth: 'Slow', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Thornless Hybrid Palo Verde', size: 'LARGE', growth: 'Fast', water: 'Low', thorny: false, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Thornless Mesquite', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: false, powerline: false, beauty: true, shade: true, wildlife: true },
    { name: 'Desert Willow', size: 'SMALL', growth: 'Fast', water: 'Low', thorny: false, powerline: true, beauty: true, shade: false, wildlife: true },
    { name: 'Ironwood', size: 'LARGE', growth: 'Slow', water: 'Low', thorny: true, powerline: false, beauty: true, shade: true, wildlife: true }
];

const NON_NATIVE_TREES = [
    { name: 'Chaste Tree', size: 'SMALL', growth: 'Fast', water: 'Low', thorny: false, powerline: true, beauty: true, shade: false, wildlife: true },
    { name: 'Red Push Pistache', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Chinese Elm', size: 'LARGE', growth: 'Fast', water: 'Moderate', thorny: false, powerline: false, beauty: true, shade: true, wildlife: false },
    { name: 'Shoestring Acacia', size: 'MEDIUM', growth: 'Fast', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Mastic Tree', size: 'MEDIUM', growth: 'Slow', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Texas Olive', size: 'SMALL', growth: 'Slow', water: 'Low', thorny: false, powerline: true, beauty: true, shade: false, wildlife: false },
    { name: 'Mulga Acacia', size: 'MEDIUM', growth: 'Moderate', water: 'Low', thorny: false, powerline: true, beauty: true, shade: true, wildlife: false },
    { name: 'Olive Tree', size: 'MEDIUM', growth: 'Slow', water: 'Low', thorny: false, powerline: false, beauty: true, shade: true, wildlife: false }
];

// Conversation state
const state = {
    currentStep: 'welcome',
    data: {},
    progress: 0
};

// Update progress indicator
function updateProgress(step, percentage) {
    state.progress = percentage;
    const progressDiv = document.getElementById('progressIndicator');
    if (progressDiv) {
        progressDiv.remove();
    }

    const messagesDiv = document.getElementById('chatMessages');
    const newProgress = document.createElement('div');
    newProgress.id = 'progressIndicator';
    newProgress.className = 'progress-indicator';
    newProgress.innerHTML = `
        <div><strong>${step}</strong></div>
        <div class="progress-bar">
            <div class="progress-fill" style="width: ${percentage}%"></div>
        </div>
    `;
    messagesDiv.insertBefore(newProgress, messagesDiv.firstChild);
}

// Add message to chat and scroll
function addMessage(text, isUser = false) {
    const messagesDiv = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${isUser ? 'user' : 'bot'}`;

    const bubble = document.createElement('div');
    bubble.className = 'message-bubble';
    bubble.innerHTML = text;

    messageDiv.appendChild(bubble);
    messagesDiv.appendChild(messageDiv);

    // Smooth scroll to bottom with slight delay to ensure rendering
    setTimeout(() => {
        messagesDiv.scrollTo({
            top: messagesDiv.scrollHeight,
            behavior: 'smooth'
        });
    }, 100);
}

// Clear input area
function clearInput() {
    document.getElementById('inputArea').innerHTML = '';
}

// Show buttons
function showButtons(buttons) {
    clearInput();
    const inputArea = document.getElementById('inputArea');
    const buttonGroup = document.createElement('div');
    buttonGroup.className = 'button-group';

    buttons.forEach(btn => {
        const button = document.createElement('button');
        button.textContent = btn.text;
        button.onclick = btn.action;
        if (btn.className) {
            button.className = btn.className;
        }
        buttonGroup.appendChild(button);
    });

    inputArea.appendChild(buttonGroup);
}

// Show text input
function showTextInput(placeholder, onSubmit) {
    clearInput();
    const inputArea = document.getElementById('inputArea');

    const input = document.createElement('input');
    input.type = 'text';
    input.placeholder = placeholder;
    input.id = 'userInput';

    const button = document.createElement('button');
    button.textContent = 'Submit';
    button.className = 'submit-btn';
    button.onclick = () => {
        const value = input.value.trim();
        if (value) {
            addMessage(value, true);
            onSubmit(value);
        }
    };

    input.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') button.click();
    });

    inputArea.appendChild(input);
    inputArea.appendChild(button);
    input.focus();
}

// Normalize address for fuzzy matching
function normalizeAddress(address) {
    let normalized = address.toUpperCase().trim();

    // Remove periods and extra spaces
    normalized = normalized.replace(/\./g, '').replace(/\s+/g, ' ');

    // Expand common abbreviations
    const abbreviations = {
        ' ST': ' STREET',
        ' AVE': ' AVENUE',
        ' RD': ' ROAD',
        ' DR': ' DRIVE',
        ' LN': ' LANE',
        ' BLVD': ' BOULEVARD',
        ' PL': ' PLACE',
        ' CT': ' COURT',
        ' N ': ' NORTH ',
        ' S ': ' SOUTH ',
        ' E ': ' EAST ',
        ' W ': ' WEST ',
    };

    // Apply abbreviation expansions
    for (const [abbr, full] of Object.entries(abbreviations)) {
        if (normalized.includes(abbr)) {
            normalized = normalized.replace(abbr, full);
        }
    }

    return normalized.trim();
}

// Calculate similarity score between two strings (0 = identical, higher = more different)
function calculateDistance(str1, str2) {
    const s1 = str1.toLowerCase();
    const s2 = str2.toLowerCase();

    // If one string contains the other, give it a good score
    if (s1.includes(s2) || s2.includes(s1)) {
        return Math.abs(s1.length - s2.length) * 0.1;
    }

    // Levenshtein distance calculation
    const matrix = [];
    for (let i = 0; i <= s2.length; i++) {
        matrix[i] = [i];
    }
    for (let j = 0; j <= s1.length; j++) {
        matrix[0][j] = j;
    }
    for (let i = 1; i <= s2.length; i++) {
        for (let j = 1; j <= s1.length; j++) {
            if (s2.charAt(i - 1) === s1.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(
                    matrix[i - 1][j - 1] + 1,
                    matrix[i][j - 1] + 1,
                    matrix[i - 1][j] + 1
                );
            }
        }
    }

    // Normalize by length to get a score between 0 and 1
    const maxLength = Math.max(s1.length, s2.length);
    return matrix[s2.length][s1.length] / maxLength;
}

// Lookup address in local list with fuzzy matching
function lookupAddress(address) {
    const normalized = normalizeAddress(address);

    console.log('Looking up address:', address);
    console.log('Normalized:', normalized);
    console.log('Total addresses in list:', ELIGIBLE_ADDRESSES.length);

    // Try exact match first
    const exactMatch = ELIGIBLE_ADDRESSES.find(addr => addr === normalized);
    if (exactMatch) {
        console.log('Exact match found:', exactMatch);
        return { success: true, address: exactMatch };
    }

    // Fuzzy match with threshold (similar to Fuse.js threshold: 0.3)
    const threshold = 0.3;
    let bestMatch = null;
    let bestScore = Infinity;

    for (const eligibleAddr of ELIGIBLE_ADDRESSES) {
        const normalizedEligible = normalizeAddress(eligibleAddr);
        const score = calculateDistance(normalized, normalizedEligible);

        if (score < bestScore) {
            bestScore = score;
            bestMatch = eligibleAddr;
        }
    }

    console.log('Best match:', bestMatch, 'Score:', bestScore);

    if (bestScore <= threshold) {
        console.log('Fuzzy match found:', bestMatch);
        return { success: true, address: bestMatch };
    }

    console.log('No match found for:', normalized, '(best score was', bestScore, ')');
    return { success: false };
}

// Get tree recommendations based on quiz answers
function getTreeRecommendations() {
    const { preferredSize, nativePreference, primaryGoal } = state.data;
    const trees = nativePreference === 'native' ? NATIVE_TREES : NON_NATIVE_TREES;

    let filtered = trees.filter(tree => {
        // Match size preference
        if (preferredSize && tree.size !== preferredSize) return false;

        // Match goal
        if (primaryGoal === 'BEAUTY' && !tree.beauty) return false;
        if (primaryGoal === 'WILDLIFE' && !tree.wildlife) return false;
        if (primaryGoal === 'SHADE' && !tree.shade) return false;

        return true;
    });

    // If no exact matches, return all trees of that type
    if (filtered.length === 0) filtered = trees;

    return filtered.slice(0, 3);
}

// Conversation flows
async function startWelcome() {
    updateProgress('Step 1: Address Verification', 10);
    addMessage(`Great! Let's check if your address qualifies.

Please enter your street address:

<div class="important-box">
<strong>GOOD EXAMPLES:</strong><br>
• 4302 North 20th St<br>
• 2133 W Edgemont Ave<br>
• 9012 West Pine Road<br><br>

<strong>IMPORTANT:</strong><br>
• Single-family homes or duplexes/triplexes only<br>
• No apartments or condos with 4+ units<br>
• <strong>Trees must be planted in the FRONT YARD only</strong>
</div>`);

    showTextInput('Enter your address...', (address) => {
        state.data.userAddress = address;
        addMessage(address, true);

        const result = lookupAddress(address);

        if (result.success) {
            state.data.confirmedAddress = result.address;
            state.data.eligible = true;
            askAddressConfirmation(result.address);
        } else {
            showNotEligible();
        }
    });
}

function askAddressConfirmation(matchedAddress) {
    addMessage(`I found this address:<br><br><strong>${matchedAddress}</strong><br><br>Is this correct?`);
    showButtons([
        { text: "Yes, that's correct", action: () => {
            addMessage("Yes, that's correct", true);
            askFrontYardConfirmation();
        }},
        { text: "No, try again", action: () => {
            addMessage("No, try again", true);
            startWelcome();
        }}
    ]);
}

function askFrontYardConfirmation() {
    addMessage(`Perfect! Just to confirm:<br><br><strong>The tree(s) will be planted in your FRONT YARD, correct?</strong><br><br>This is a requirement of the program.`);
    showButtons([
        { text: "Yes, front yard", action: () => {
            addMessage("Yes, front yard", true);
            state.data.frontYard = true;
            askHomeowner();
        }},
        { text: "No, I need backyard", action: () => {
            addMessage("No, I need backyard", true);
            addMessage(`I'm sorry, but this program only covers trees planted in the <strong>front yard</strong>. This helps with neighborhood beautification and heat reduction.

Would you like to explore other programs that might help?`);
            showNotEligible();
        }}
    ]);
}

function askHomeowner() {
    updateProgress('Step 2: Homeowner Verification', 30);
    addMessage(`Real quick, are you the homeowner, or do you rent this property?`);
    showButtons([
        { text: "I'm the homeowner", action: () => {
            addMessage("I'm the homeowner", true);
            state.data.homeownerStatus = 'homeowner';
            showMainMenu();
        }},
        { text: "I rent and have landlord permission", action: () => {
            addMessage("I rent and have landlord permission", true);
            state.data.homeownerStatus = 'renter_approved';
            askLandlordInfo();
        }},
        { text: "I rent but don't have permission yet", action: () => {
            addMessage("I rent but don't have permission yet", true);
            state.data.homeownerStatus = 'renter_pending';
            showLandlordLetter();
        }}
    ]);
}

function askLandlordInfo() {
    addMessage(`Great! I'll need your landlord's contact information to verify.<br><br>Please provide their name:`);
    showTextInput("Landlord name", (name) => {
        state.data.landlordName = name;
        addMessage(`And their email address:`);
        showTextInput("landlord@email.com", (email) => {
            state.data.landlordEmail = email;
            addMessage(`Finally, their phone number:`);
            showTextInput("(555) 555-5555", (phone) => {
                state.data.landlordPhone = phone;
                addMessage(`Perfect! We'll verify with ${name} before proceeding.`);
                showMainMenu();
            });
        });
    });
}

function showLandlordLetter() {
    addMessage(`No problem! Here's a letter template you can send to your landlord:

<div class="important-box">
<strong>Subject: Permission Request - Phoenix Free Tree Grant</strong><br><br>

Dear [Landlord Name],<br><br>

I'm writing to request permission to participate in the Phoenix Free Tree Grant - Canopy Tree Care Program.<br><br>

This is a FREE program that plants trees at no cost. Benefits:<br><br>

• Free planting (January 24, 2026)<br>
• Increased property value<br>
• Reduced cooling costs<br><br>

Deadline: December 31, 2025<br><br>

Learn more: <a href="https://www.phoenix.gov/administration/departments/heat/heat-response-programs.html" target="_blank">Phoenix Heat Response Programs</a><br><br>

If you approve, please reply to <strong>cckphx@gmail.com</strong> with your confirmation.<br><br>

Thank you,<br>
[Your Name]<br>
[${state.data.confirmedAddress}]
</div>

Would you like me to email this to you?`);

    showButtons([
        { text: "Yes, email it to me", action: () => {
            addMessage("Yes, email it to me", true);
            addMessage(`Please enter your email address:`);
            showTextInput("your@email.com", (email) => {
                state.data.userEmail = email;
                addMessage(`Great! I'll send the letter template to ${email}. Once you have landlord approval, come back and start over!`);
                addMessage(`Thank you for your interest in making Phoenix greener.`);
                clearInput();
            });
        }},
        { text: "I'll handle it myself", action: () => {
            addMessage("I'll handle it myself", true);
            addMessage(`Sounds good! Come back once you have landlord approval. Thanks for your interest!`);
            clearInput();
        }}
    ]);
}

function showNotEligible() {
    addMessage(`Your address isn't in our grant zone, but you're not out of luck!

<div class="important-box">
<strong>WHY NOT ELIGIBLE?</strong><br>
This grant covers a specific neighborhood boundary.<br><br>

<strong>WHAT TO DO:</strong><br><br>

<strong>Apply with the City:</strong><br>
<a href="https://www.phoenix.gov/parks/trees" class="link" target="_blank">phoenix.gov/parks/trees</a><br><br>

<strong>Trees Matter:</strong><br>
<a href="https://treesmatter.org" class="link" target="_blank">treesmatter.org</a><br><br>

<strong>SRP Program:</strong><br>
<a href="https://www.srpnet.com/trees" class="link" target="_blank">srpnet.com/trees</a><br><br>

<strong>QUESTIONS?</strong><br>
Visit: <a href="https://www.phoenix.gov/administration/departments/heat/heat-response-programs.html" class="link" target="_blank">Phoenix Heat Response Programs</a>
</div>

Thanks for wanting to grow green in Phoenix!`);
    clearInput();
}

function showMainMenu() {
    addMessage(`Wonderful! Let's go!<br><br>What would you like to do?`);
    showButtons([
        { text: "Take tree quiz", action: () => {
            addMessage("Take tree quiz", true);
            startTreeQuiz();
        }},
        { text: "View FAQ", action: () => {
            addMessage("View FAQ", true);
            showFAQ();
        }},
        { text: "Submit application", action: () => {
            addMessage("Submit application", true);
            collectPropertyInfo();
        }},
        { text: "Start over", action: () => {
            addMessage("Start over", true);
            location.reload();
        }}
    ]);
}

function startTreeQuiz() {
    updateProgress('Step 3: Tree Selection Quiz', 50);
    addMessage(`Great! Let's find the best tree for you.<br><br>First, do you prefer <strong>native</strong> or <strong>non-native</strong> trees?<br><br><strong>Native trees</strong> are adapted to Arizona's climate and support local wildlife.<br><strong>Non-native trees</strong> offer different aesthetics and may have different care requirements.`);
    showButtons([
        { text: "Native (Arizona adapted)", action: () => {
            addMessage("Native (Arizona adapted)", true);
            state.data.nativePreference = 'native';
            askTreeSize();
        }},
        { text: "Non-native (Ornamental)", action: () => {
            addMessage("Non-native (Ornamental)", true);
            state.data.nativePreference = 'non-native';
            askTreeSize();
        }}
    ]);
}

function askTreeSize() {
    addMessage(`How large would you like your tree to grow?<br><br><em>Trees are provided as 15-gallon or 25-gallon sizes. The mature height varies by species.</em>`);
    showButtons([
        { text: "Small (5-15 ft at maturity)", action: () => {
            addMessage("Small (5-15 ft at maturity)", true);
            state.data.preferredSize = 'SMALL';
            askPrimaryGoal();
        }},
        { text: "Medium (15-30 ft at maturity)", action: () => {
            addMessage("Medium (15-30 ft at maturity)", true);
            state.data.preferredSize = 'MEDIUM';
            askPrimaryGoal();
        }},
        { text: "Large (30+ ft at maturity)", action: () => {
            addMessage("Large (30+ ft at maturity)", true);
            state.data.preferredSize = 'LARGE';
            askPrimaryGoal();
        }}
    ]);
}

function askPrimaryGoal() {
    addMessage(`What's your most important reason for planting?`);
    showButtons([
        { text: "Beauty and flowering", action: () => {
            addMessage("Beauty and flowering", true);
            state.data.primaryGoal = 'BEAUTY';
            showTreeRecommendations();
        }},
        { text: "Wildlife habitat", action: () => {
            addMessage("Wildlife habitat", true);
            state.data.primaryGoal = 'WILDLIFE';
            showTreeRecommendations();
        }},
        { text: "Shade and cooling", action: () => {
            addMessage("Shade and cooling", true);
            state.data.primaryGoal = 'SHADE';
            showTreeRecommendations();
        }},
        { text: "All of the above", action: () => {
            addMessage("All of the above", true);
            state.data.primaryGoal = 'ALL';
            showTreeRecommendations();
        }}
    ]);
}

function showTreeRecommendations() {
    const recommendations = getTreeRecommendations();

    let recommendationHTML = `Based on your preferences, here are your recommended trees:<br><br>`;

    recommendations.forEach(tree => {
        recommendationHTML += `<div class="tree-option">
            <strong>${tree.name}</strong><br>
            <small>Size: ${tree.size} | Growth: ${tree.growth} | Water: ${tree.water}${tree.powerline ? ' | Powerline Friendly' : ''}</small>
        </div>`;
    });

    recommendationHTML += `<br>You can select up to 2 trees for your property.<br><br>
<a href="https://www.phoenix.gov/administration/departments/heat/tree-shade-programs/tree-grant-programs.html" class="link" target="_blank">Learn more about tree options and the program</a>`;

    addMessage(recommendationHTML);

    showButtons([
        { text: "Select my trees", action: () => {
            addMessage("Select my trees", true);
            askTreeSelection(recommendations);
        }},
        { text: "Retake quiz", action: () => {
            addMessage("Retake quiz", true);
            startTreeQuiz();
        }},
        { text: "Back to menu", action: () => {
            addMessage("Back to menu", true);
            showMainMenu();
        }}
    ]);
}

function askTreeSelection(recommendations) {
    // Initialize selectedTrees array if it doesn't exist
    if (!state.data.selectedTrees) {
        state.data.selectedTrees = [];
        addMessage(`Please select your tree(s) - you can choose up to 2 trees:`);
    }

    // Create buttons for each tree
    const buttons = recommendations.map(tree => {
        const isSelected = state.data.selectedTrees.includes(tree.name);
        return {
            text: tree.name,
            className: isSelected ? 'selected' : '',
            action: () => {
                handleTreeSelection(tree.name, recommendations);
            }
        };
    });

    // Add a "Done selecting" button
    buttons.push({
        text: state.data.selectedTrees.length > 0
            ? `Done selecting trees (${state.data.selectedTrees.length} selected)`
            : "Done selecting trees",
        className: 'done-button',
        action: () => {
            if (state.data.selectedTrees.length === 0) {
                addMessage("Please select at least one tree before continuing.");
                return;
            } else {
                const treeList = state.data.selectedTrees.join(', ');
                addMessage("Done selecting trees", true);
                state.data.treeChoices = treeList;
                addMessage(`Great! You selected: <strong>${treeList}</strong>`);
                collectPropertyInfo();
            }
        }
    });

    showButtons(buttons);
}

function handleTreeSelection(treeName, recommendations) {
    if (!state.data.selectedTrees) {
        state.data.selectedTrees = [];
    }

    if (state.data.selectedTrees.includes(treeName)) {
        // Deselect the tree
        state.data.selectedTrees = state.data.selectedTrees.filter(t => t !== treeName);
        addMessage(`Removed: ${treeName}`, true);
    } else {
        // Check if limit reached
        if (state.data.selectedTrees.length >= 2) {
            addMessage("You can only select up to 2 trees. Please deselect one first or click 'Done selecting trees'.");
            return;
        }
        // Add the tree
        state.data.selectedTrees.push(treeName);
        addMessage(`Selected: ${treeName}`, true);
    }

    // Show current selection
    const currentSelection = state.data.selectedTrees.length > 0
        ? `Current selection: <strong>${state.data.selectedTrees.join(', ')}</strong> (${state.data.selectedTrees.length}/2)`
        : 'No trees selected yet';
    addMessage(currentSelection);

    // Re-show the selection buttons
    clearInput();
    askTreeSelection(recommendations);
}

function collectPropertyInfo() {
    updateProgress('Step 4: Property Information', 70);
    addMessage(`Now, a few questions about your property:<br><br><strong>Do you need stumps or fully dead trees removed?</strong>`);
    showButtons([
        { text: "Yes", action: () => {
            addMessage("Yes", true);
            state.data.stumpRemoval = true;
            askComplexInstall();
        }},
        { text: "No", action: () => {
            addMessage("No", true);
            state.data.stumpRemoval = false;
            askComplexInstall();
        }}
    ]);
}

function askComplexInstall() {
    addMessage(`Do you have anything that makes it a complex install?<br><br><em>Examples: Turf, River rock, Fully shaded area, Other obstacles</em>`);
    showButtons([
        { text: "Yes", action: () => {
            addMessage("Yes", true);
            addMessage(`Please describe what makes it complex:`);
            showTextInput("e.g., Turf and river rock", (details) => {
                state.data.complexInstall = true;
                state.data.complexInstallDetails = details;
                askContactPreference();
            });
        }},
        { text: "No", action: () => {
            addMessage("No", true);
            state.data.complexInstall = false;
            state.data.complexInstallDetails = 'None';
            askContactPreference();
        }}
    ]);
}

function askContactPreference() {
    addMessage(`How would you prefer to be contacted?`);
    showButtons([
        { text: "Email", action: () => {
            addMessage("Email", true);
            state.data.contactPreference = 'email';
            askEmail();
        }},
        { text: "Phone call", action: () => {
            addMessage("Phone call", true);
            state.data.contactPreference = 'phone';
            askPhone();
        }},
        { text: "Both", action: () => {
            addMessage("Both", true);
            state.data.contactPreference = 'both';
            askEmail();
        }}
    ]);
}

function askEmail() {
    addMessage(`Please enter your email address:`);
    showTextInput("your@email.com", (email) => {
        state.data.userEmail = email;
        if (state.data.contactPreference === 'both') {
            askPhone();
        } else {
            askName();
        }
    });
}

function askPhone() {
    addMessage(`Please enter your phone number:`);
    showTextInput("(555) 555-5555", (phone) => {
        state.data.userPhone = phone;
        askSMSOptIn();
    });
}

function askSMSOptIn() {
    addMessage(`Would you like to receive text message updates?`);
    showButtons([
        { text: "Yes, text me", action: () => {
            addMessage("Yes, text me", true);
            state.data.smsOptIn = true;
            if (state.data.contactPreference === 'phone') {
                askEmail();
            } else {
                askName();
            }
        }},
        { text: "No, calls only", action: () => {
            addMessage("No, calls only", true);
            state.data.smsOptIn = false;
            if (state.data.contactPreference === 'phone') {
                askEmail();
            } else {
                askName();
            }
        }}
    ]);
}

function askName() {
    addMessage(`What's your first name?`);
    showTextInput("First name", (firstName) => {
        state.data.firstName = firstName;
        addMessage(`And your last name?`);
        showTextInput("Last name", (lastName) => {
            state.data.lastName = lastName;
            showReview();
        });
    });
}

function showReview() {
    updateProgress('Step 5: Review & Submit', 90);
    const review = `
<strong>Application Review</strong><br><br>

<strong>Address:</strong> ${state.data.confirmedAddress}<br>
<strong>Status:</strong> ${state.data.homeownerStatus}<br>
${state.data.landlordName ? `<strong>Landlord:</strong> ${state.data.landlordName} (${state.data.landlordEmail})<br>` : ''}
<strong>Trees:</strong> ${state.data.treeChoices || 'To be selected'}<br>
<strong>Stump removal:</strong> ${state.data.stumpRemoval ? 'Yes' : 'No'}<br>
<strong>Complex install:</strong> ${state.data.complexInstallDetails}<br>
<strong>Name:</strong> ${state.data.firstName} ${state.data.lastName}<br>
<strong>Email:</strong> ${state.data.userEmail || 'Not provided'}<br>
<strong>Phone:</strong> ${state.data.userPhone || 'Not provided'}<br>
<strong>SMS:</strong> ${state.data.smsOptIn ? 'Yes' : 'No'}<br><br>

<strong>Is everything correct?</strong>
`;
    addMessage(review);
    showButtons([
        { text: "Yes, submit!", action: submitApplication },
        { text: "Edit", action: () => {
            addMessage("Edit", true);
            collectPropertyInfo();
        }}
    ]);
}

function submitApplication() {
    addMessage("Yes, submit!", true);
    addMessage('Submitting your application... <span class="loading"></span>');

    // Here you would send the data to your backend
    console.log('Application data:', state.data);

    setTimeout(() => {
        updateProgress('Complete!', 100);
        addMessage(`<strong>Application submitted!</strong><br><br>

Thank you, ${state.data.firstName}! Your application has been received.<br><br>

<div class="important-box">
<strong>NEXT STEPS:</strong><br>
• You'll receive a confirmation email shortly<br>
• Courtney Kingsbury will review your application<br>
• We'll contact you within 5-7 business days<br><br>

<strong>Questions?</strong><br>
Email: <a href="mailto:cckphx@gmail.com" class="link">cckphx@gmail.com</a><br><br>

Learn more: <a href="https://www.phoenix.gov/administration/departments/heat/heat-response-programs.html" class="link" target="_blank">Phoenix Heat Response Programs</a>
</div>

Thanks for growing green in Phoenix!`);

        showButtons([
            { text: "Submit another address", action: () => {
                addMessage("Submit another address", true);
                location.reload();
            }}
        ]);
    }, 1500);
}

function showFAQ() {
    addMessage(`<strong>Frequently Asked Questions</strong><br><br>

<strong>Q: When will trees be planted?</strong><br>
A: January 24, 2026<br><br>

<strong>Q: How much does it cost?</strong><br>
A: FREE! This program is at no cost to you.<br><br>

<strong>Q: What size trees will I receive?</strong><br>
A: Typically 15-gallon or 25-gallon trees depending on nursery availability. The exact height varies by species—see each tree's details for mature sizes.<br><br>

<strong>Q: Can I pick any tree?</strong><br>
A: You can select up to 2 trees from our approved list based on your property.<br><br>

<strong>Q: What if I'm a renter?</strong><br>
A: You need landlord approval. We provide a template letter.<br><br>

<strong>Q: Front yard only?</strong><br>
A: Yes, this program only covers front yard planting.<br><br>

<strong>Q: What if I have questions?</strong><br>
A: Contact Courtney Kingsbury at <a href="mailto:cckphx@gmail.com" class="link">cckphx@gmail.com</a>`);

    showButtons([
        { text: "Back to menu", action: () => {
            addMessage("Back to menu", true);
            showMainMenu();
        }}
    ]);
}

// Start the conversation
window.onload = () => {
    startWelcome();
};
