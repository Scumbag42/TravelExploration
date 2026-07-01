// =============================================
// IntersectionObserver — Apple 风格视口入场动画
// =============================================
const floatObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        const card = entry.target;
        if (entry.isIntersecting) {
            const container = card.parentElement;
            if (!container) return;
            const siblings = Array.from(container.children).filter(
                c => c.classList.contains('card')
            );
            const myTop = card.offsetTop;
            const rowMates = siblings.filter(s => s.offsetTop === myTop);
            const colIndex = rowMates.indexOf(card);
            card.style.transitionDelay = `${colIndex * 0.08}s`;
            card.classList.add('float-in');
        } else {
            card.classList.remove('float-in');
            card.style.transitionDelay = '0s';
        }
    });
}, {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
});
function observeCards(container) {
    requestAnimationFrame(() => {
        container.querySelectorAll('.card').forEach(card => {
            floatObserver.observe(card);
        });
    });
}
// 省份横幅入场动画
const bannerObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('banner-in');
        } else {
            entry.target.classList.remove('banner-in');
        }
    });
}, {
    threshold: 0,
    rootMargin: '0px 0px 0px 0px'
});
function observeBanners(container) {
    requestAnimationFrame(() => {
        container.querySelectorAll('.province-banner').forEach(b => {
            bannerObserver.observe(b);
        });
    });
}
// =============================================
// 全局状态
// =============================================
let currentProvince = '';
let currentCity = '';
let cameFromSearch = false;   // 是否从搜索结果进入
let lastSearchKeyword = '';   // 记住上次搜索词
let savedScrollY = 0;         // 记住滚动位置
renderTop15();
initProvincePage();
initScrollParallax();
// =============================================
// GTA VI 同款：Scroll-driven Parallax 视差系统
// sticky + transform + opacity + blur
// =============================================
function initScrollParallax() {
    const panels = document.querySelectorAll('#provincePage .panel');
    if (panels.length === 0) return;

    function onScroll() {
        const scrollY = window.scrollY;
        const vh = window.innerHeight;

        panels.forEach((panel, i) => {
            // 跳过非 sticky 的面板（省份列表自然流）
            if (panel.style.position === 'relative' || 
                getComputedStyle(panel).position !== 'sticky') return;

            const offset = i * vh;
            const progress = (scrollY - offset) / vh;
            const p = Math.min(Math.max(progress, 0), 1);

            // 核心：位移 + 缩放 + 透明度 + 模糊
            const translateY = (1 - p) * 80;
            const scale = 0.92 + p * 0.08;
            const opacity = 0.3 + p * 0.7;
            const blur = (1 - p) * 6;

            panel.style.transform = `translateY(${translateY}px) scale(${scale})`;
            panel.style.opacity = opacity;
            panel.style.filter = `blur(${blur}px)`;
        });
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll(); // 初始化一次
}
// =============================================
// 渲染热度排名前15
// =============================================
function renderTop15() {
    const grid = document.getElementById('top15Grid');
    if (!grid || typeof top15Spots === 'undefined') return;
    grid.innerHTML = '';
    top15Spots.forEach(spot => {
        const card = document.createElement('div');
        card.className = 'top15-card';
        // 前3名特殊样式
        if (spot.rank <= 3) card.classList.add(`top15-rank-${spot.rank}`);
       card.innerHTML = `
    <div class="top15-badge">${spot.rank}</div>
    <div class="top15-img">
        <img src="${spot.img}" alt="${spot.name}" loading="lazy"
             onerror="this.parentElement.innerHTML='<div class=\\'top15-img-fallback\\'>暂无图片</div>'">
    </div>
    <div class="top15-info">
        <div class="top15-name">${spot.name}</div>
        <div class="top15-loc">${spot.province} · ${spot.city}</div>
        <div class="top15-heat">
            <span class="top15-heat-bar">
                <span class="top15-heat-fill" style="width:${(spot.heat / top15Spots[0].heat * 100).toFixed(0)}%"></span>
            </span>
            <span class="top15-heat-num">🔥 ${spot.heat}</span>
        </div>
    </div>
`;
        // 点击跳转到对应景点
        card.onclick = () => {
            cameFromSearch = false;
            openCityPage(spot.province);
            setTimeout(() => openSpotPage(spot.city), 150);
        };
        grid.appendChild(card);
    });
    // 入场上浮动画（每次进出视口都触发）
    const top15Observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            const card = entry.target;
            if (entry.isIntersecting) {
                const siblings = Array.from(card.parentElement.children);
                const idx = siblings.indexOf(card);
                card.style.transitionDelay = `${idx * 0.06}s`;
                card.classList.add('top15-in');
            } else {
                card.classList.remove('top15-in');
                card.style.transitionDelay = '0s';
            }
        });
    }, { threshold: 0, rootMargin: '0px 0px 150px 0px' });
    grid.querySelectorAll('.top15-card').forEach(c => top15Observer.observe(c));
}
// =============================================
// 渲染省份列表 — GTA VI Vice City 横幅风格
// =============================================
function initProvincePage() {
    const grid = document.getElementById('provinceGrid');
    grid.innerHTML = '';
    Object.keys(data).forEach((province, index) => {
        const card = document.createElement('div');
        card.className = 'province-banner';
        // 前几个省份加 neon 强调色
        const neonColors = ['#ff2d55', '#ff6b35', '#ffd700', '#00e5ff', '#b14eff', '#ff69b4'];
        const neon = neonColors[index % neonColors.length];
        const cities = data[province].cities;
        const cityTags = cities.map(c => `<span class="province-city-tag">${c}</span>`).join('');
        card.innerHTML = `
            <div class="province-banner-index">${String(index + 1).padStart(2, '0')}</div>
            <div class="province-banner-body">
                <div class="province-banner-name" style="--neon:${neon}">${province}</div>
                <div class="province-banner-cities">${cityTags}</div>
            </div>
            <div class="province-banner-arrow">→</div>
        `;
        card.onclick = () => openCityPage(province);
        grid.appendChild(card);
    });
    observeBanners(grid);
}
// =============================================
// 打开城市页
// =============================================
function openCityPage(province) {
    savedScrollY = window.scrollY;  // 记住当前位置
    currentProvince = province;
    document.getElementById('cityTitle').textContent = `${province} - 城市列表`;
    // 动态更新返回按钮文案
    const cityBackBtn = document.querySelector('#cityPage .back-btn');
    if (cityBackBtn) cityBackBtn.textContent = cameFromSearch ? '← 返回搜索结果' : '← 返回省份';
    const cityWeatherSidebar = document.querySelector('#cityPage .weather-sidebar');
    if(cityWeatherSidebar) cityWeatherSidebar.innerHTML = '';
    const weatherCard = document.createElement('div');
    weatherCard.innerHTML = `
        <a href="${data[province].provinceWeatherUrl}" target="_blank" class="vertical-weather-text">当地天气</a>
    `;
    weatherCard.className = 'weather-card';
    cityWeatherSidebar.appendChild(weatherCard);
    const grid = document.getElementById('cityGrid');
    grid.innerHTML = '';
    data[province].cities.forEach(city => {
        let cityWeatherUrl = data[province].provinceWeatherUrl;
        if (data[province].spots[city] && data[province].spots[city][0]?.weatherUrl) {
            cityWeatherUrl = data[province].spots[city][0].weatherUrl;
        }
        const spotCount = (data[province].spots[city] || []).length;
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `
            <div class="card-title">${city}</div>
            <div class="card-desc">${spotCount} 个景点</div>
            <div class="card-tip">点击进入 ←</div>
        `;
        card.onclick = () => openSpotPage(city);
        grid.appendChild(card);
    });
    observeCards(grid);
    switchPage('city');
}
// =============================================
// 打开景点页（关键：绑定data-spotName）
// =============================================
function openSpotPage(city) {
    currentCity = city;
    document.getElementById('spotTitle').textContent = `${currentProvince} ${city} - 景点`;
    // 动态更新返回按钮文案
    const spotBackBtn = document.querySelector('#spotPage .back-btn');
    if (spotBackBtn) spotBackBtn.textContent = cameFromSearch ? '← 返回搜索结果' : '← 返回城市';
    const spotWeatherSidebar = document.querySelector('#spotPage .weather-sidebar');
    if(spotWeatherSidebar) spotWeatherSidebar.innerHTML = '';
    let cityWeatherUrl = data[currentProvince].provinceWeatherUrl;
    if (data[currentProvince].spots[city] && data[currentProvince].spots[city][0]?.weatherUrl) {
        cityWeatherUrl = data[currentProvince].spots[city][0].weatherUrl;
    }
    const weatherCard = document.createElement('div');
    weatherCard.className = 'weather-card';
    weatherCard.innerHTML = `
        <a href="${cityWeatherUrl}" target="_blank" class="vertical-weather-text">当地天气</a>
    `;
    spotWeatherSidebar.appendChild(weatherCard);
    const grid = document.getElementById('spotGrid');
    grid.innerHTML = '';
    data[currentProvince].spots[city].forEach(spot => {
        const card = document.createElement('div');
        card.className = 'card';
        card.dataset.spotName = spot.name; // 图片匹配必需代码
        const websiteHtml = spot.website
            ? `<a href="${spot.website}" target="_blank" class="website-link">➜ 景点官方网站</a>`
            : '';
        let imagesHtml = '';
        if (spot.images && spot.images.length > 0) {
            spot.images.forEach((imgUrl, index) => {
                imagesHtml += `
                    <div class="img-box">
                        <img 
                            src="${imgUrl}" 
                            alt="${spot.name}照片${index + 1}" 
                            loading="lazy"
                            data-img-index="${index}"
                        >
                    </div>
                `;
            });
        }else {
            imagesHtml = '<div class="img-box">暂无图片</div>';
        }
        card.innerHTML = `
            <div class="card-title">${spot.name}</div>
            <div class="card-desc">${spot.city || ''}</div>
            <div class="card-tip">点击展开详情 ▾</div>
            <div class="spot-expand">
                <div class="img-container">
                    ${imagesHtml}
                </div>
                ${websiteHtml}
            </div>
        `;
        card.onclick = (e) => {
            if (!e.target.closest('.website-link') && !e.target.closest('.img-box')) {
                const expand = card.querySelector('.spot-expand');
                const scrollY = window.scrollY;
                expand.classList.toggle('active');
                card.classList.toggle('active');
                window.scrollTo(0, scrollY);
            }
        };
        grid.appendChild(card);
    });
    observeCards(grid);
    switchPage('spot');
}
// =============================================
// 页面切换
// =============================================
function switchPage(pageName) {
    document.querySelectorAll('.page').forEach(p => {
        const weatherEl = p.querySelector('.province-weather');
        if (weatherEl) weatherEl.remove();
        const sidebar = p.querySelector('.weather-sidebar');
        if (sidebar) sidebar.innerHTML = '';
        p.classList.remove('active');
    });
    const targetPage = document.getElementById(`${pageName}Page`);
    if(targetPage) targetPage.classList.add('active');
}
function goBack(prevPage) {
    // 如果是从搜索结果进来的，直接返回搜索结果
    if (cameFromSearch && lastSearchKeyword) {
        cameFromSearch = false;
        switchPage('province');
        // 重新触发搜索，恢复搜索结果
        const searchInput = document.getElementById('globalSearch');
        searchInput.value = lastSearchKeyword;
        searchInput.dispatchEvent(new Event('input'));
        return;
    }
    switchPage(prevPage);
    // 返回省份页时恢复滚动位置
    if (prevPage === 'province') {
        requestAnimationFrame(() => window.scrollTo(0, savedScrollY));
    }
}
function goHome() {
    cameFromSearch = false;
    lastSearchKeyword = '';
    document.getElementById('globalSearch').value = '';
    switchPage('province');
    // 恢复所有面板
    document.getElementById('top15Section').style.display = '';
    document.querySelectorAll('#provincePage .panel').forEach(p => {
        p.style.display = '';
        p.style.transform = '';
        p.style.opacity = '';
        p.style.filter = '';
        p.style.position = '';
        p.style.height = '';
    });
    const grid = document.getElementById('provinceGrid');
    grid.classList.remove('search-mode');
    initProvincePage();
    initScrollParallax();
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
// =============================================
// 全局搜索（修复版：精确到城市+景点）
// =============================================
document.getElementById('globalSearch').addEventListener('input', (e) => {
    const keyword = e.target.value.trim().toLowerCase();
    lastSearchKeyword = keyword;
    if (!keyword) {
        cameFromSearch = false;
        // 恢复显示所有面板和 TOP 15
        document.getElementById('top15Section').style.display = '';
        document.querySelectorAll('#provincePage .panel').forEach(p => {
            p.style.display = '';
            p.style.transform = '';
            p.style.opacity = '';
            p.style.filter = '';
        });
        const grid = document.getElementById('provinceGrid');
        grid.classList.remove('search-mode');
        initProvincePage();
        initScrollParallax(); // 重新初始化视差
        return;
    }
    // 搜索时强制切回省份页
    cameFromSearch = false;
    switchPage('province');
    // 搜索时隐藏 hero 面板和 TOP 15
    document.getElementById('top15Section').style.display = 'none';
    document.querySelectorAll('#provincePage .panel-hero').forEach(p => {
        p.style.display = 'none';
    });
    // 省份区域取消搜索模式
    const grid = document.getElementById('provinceGrid');
    grid.classList.add('search-mode');
    grid.innerHTML = '';

    Object.keys(data).forEach(province => {
        // 1) 省名本身匹配 → 显示省卡片
        if (province.toLowerCase().includes(keyword)) {
            const card = document.createElement('div');
            card.className = 'card';
            card.innerHTML = `
                <div class="card-title">${province}</div>
                <div class="card-desc">省份匹配</div>
                <div class="card-tip">点击进入 ←</div>
            `;
            card.onclick = () => openCityPage(province);
            grid.appendChild(card);
            return; // 省已处理，跳过城市维度
        }

        // 2) 按城市维度聚合：城市名匹配 或 景点名匹配
        data[province].cities.forEach(city => {
            const cityMatch = city.toLowerCase().includes(keyword);
            const spotMatches = (data[province].spots[city] || []).filter(
                s => s.name.toLowerCase().includes(keyword)
            );

            if (cityMatch || spotMatches.length > 0) {
                const card = document.createElement('div');
                card.className = 'card';

                // 描述文字：列出匹配到的景点，或标记城市匹配
                let desc = '';
                if (spotMatches.length > 0) {
                    desc = '景点：' + spotMatches.map(s => s.name).join('、');
                } else {
                    desc = '城市匹配';
                }

                card.innerHTML = `
                    <div class="card-title">${province} · ${city}</div>
                    <div class="card-desc">${desc}</div>
                    <div class="card-tip">点击进入 ←</div>
                `;
                card.onclick = () => {
                    cameFromSearch = true;  // 标记从搜索进入
                    openCityPage(province);
                    // 延迟跳转到景点页，等城市页渲染完成
                    setTimeout(() => openSpotPage(city), 150);
                };
                grid.appendChild(card);
            }
        });
    });

    // 无结果提示
    if (grid.children.length === 0) {
        grid.innerHTML = `
            <div style="text-align:center; padding:40px; color:var(--text-sub); grid-column:1/-1;">
                没有找到与「${keyword}」相关的结果
            </div>
        `;
    }

    observeCards(grid);
});
// =============================================
// 滚动控制
// =============================================
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}
function scrollToBottom() {
    window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
}
// =============================================
// 图片查看器全套逻辑（图片放大核心代码，缺一不可）
// =============================================
let viewerImages = [];
let currentIndex = 0;
let zoom = 1;
let originEl = null;
function openViewer(images, index, el) {
    viewerImages = images;
    currentIndex = index;
    originEl = el;
    const viewer = document.getElementById("imageViewer");
    const img = document.getElementById("viewerImg");
    viewer.classList.remove("hidden");
    img.src = images[index];
    const rect = el.getBoundingClientRect();
    img.style.transition = "none";
    img.style.transform = `
        translate(${rect.left - window.innerWidth / 2 + rect.width / 2}px,
                  ${rect.top - window.innerHeight / 2 + rect.height / 2}px)
        scale(${rect.width / img.offsetWidth})
    `;
    img.style.opacity = "0";
    requestAnimationFrame(() => {
        img.style.transition = "transform 0.45s cubic-bezier(0.2,0.8,0.2,1), opacity 0.3s ease";
        img.style.transform = "translate(0,0) scale(1)";
        img.style.opacity = "1";
    });
    bindEvents();
}
function updateViewer() {
    const img = document.getElementById("viewerImg");
    img.style.opacity = "0.2";
    setTimeout(() => {
        img.src = viewerImages[currentIndex];
        img.style.opacity = "1";
        img.style.transform = `scale(${zoom})`;
    }, 120);
}
function prevImage() {
    currentIndex = (currentIndex - 1 + viewerImages.length) % viewerImages.length;
    updateViewer();
}
function nextImage() {
    currentIndex = (currentIndex + 1) % viewerImages.length;
    updateViewer();
}
function closeViewer() {
    const viewer = document.getElementById("imageViewer");
    viewer.classList.add("hidden");
    resetViewer();
}
function handleZoom(e) {
    const img = document.getElementById("viewerImg");
    zoom += e.deltaY * -0.0015;
    zoom = Math.min(Math.max(1, zoom), 3);
    img.style.transform = `scale(${zoom})`;
}
function bindEvents() {
    document.onkeydown = (e) => {
        if (e.key === "ArrowLeft") prevImage();
        if (e.key === "ArrowRight") nextImage();
        if (e.key === "Escape") closeViewer();
    };
    document.onwheel = handleZoom;
}
function resetViewer() {
    viewerImages = [];
    currentIndex = 0;
    zoom = 1;
    originEl = null;
    document.onkeydown = null;
    document.onwheel = null;
}
// 全局图片点击监听【唯一一份，无重复】
document.addEventListener('click', function(e) {
    const targetImg = e.target;
    if(targetImg.tagName === 'IMG' && targetImg.closest('.img-box')){
        e.stopPropagation();
        const idx = Number(targetImg.dataset.imgIndex);
        const spotList = data[currentProvince].spots[currentCity];
        const cardDom = targetImg.closest('.card');
        const spotName = cardDom.dataset.spotName;
        const targetSpot = spotList.find(s => s.name === spotName);
        if(targetSpot){
            openViewer(targetSpot.images, idx, targetImg);
        }
    }
})
// ====================== 日月明暗切换逻辑 ======================
function syncThemeUI(isDark) {
    const checkbox = document.getElementById('themeCheck');
    if (isDark) {
        document.documentElement.classList.remove('light-mode');
        checkbox.checked = true;
    } else {
        document.documentElement.classList.add('light-mode');
        checkbox.checked = false;
    }
}
window.addEventListener('DOMContentLoaded', () => {
    const savedTheme = localStorage.getItem('siteTheme');
    if (savedTheme === 'light') {
        syncThemeUI(false);
    } else {
        syncThemeUI(true);
    }
    const checkEl = document.getElementById('themeCheck');
    checkEl.addEventListener('change', function () {
        const isDarkMode = this.checked;
        syncThemeUI(isDarkMode);
        localStorage.setItem('siteTheme', isDarkMode ? 'dark' : 'light');
    });
});