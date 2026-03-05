// ===== WHATSAPP =====
const WHATSAPP_NUMBER = '5571991117575'; // Número sem espaços ou caracteres especiais

// Função principal do WhatsApp
function openWhatsApp(message = 'Olá! Gostaria de saber mais sobre os serviços de regularização empresarial.') {
    const text = encodeURIComponent(message);
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${text}`, '_blank');
}

// ===== SCROLL SUAVE =====
function scrollToSection(href) {
    if (href === '#home') {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
    }

    const section = document.querySelector(href);
    if (section) {
        section.scrollIntoView({ 
            behavior: 'smooth',
            block: 'start'
        });
    }
}

// ===== POPUP DE PREÇO =====
function openPricePopup() {
    const popup = document.getElementById('pricePopup');
    if (popup) popup.classList.add('active');
}

function closePricePopup() {
    const popup = document.getElementById('pricePopup');
    if (popup) popup.classList.remove('active');
}

// ===== MODAL SERVIÇOS =====
function openModal(tipo) {
    const modal = document.getElementById('modal-servico');
    const title = document.getElementById('modal-title');
    const desc = document.getElementById('modal-desc');
    
    if (tipo === 'dir') {
        title.textContent = 'Declaração de Inexistência de Risco (DIR)';
        desc.innerHTML = `A Declaração de Inexistência de Risco (DIR) é um documento técnico elaborado pela Massano Assessoria, para empresas que não possuem exposição a agentes físicos, químicos ou biológicos que gerem riscos ocupacionais aos trabalhadores.<br><br>
Ela comprova que a empresa:<br>
<ul style='text-align:left;margin:0 0 1rem 1.2rem;'>
<li>Não possui riscos ambientais significativos</li>
<li>Está em conformidade com as exigências legais</li>
<li>Atende às normas de Saúde e Segurança do Trabalho</li>
<li>Pode ser dispensada de programas mais complexos, quando aplicável</li>
</ul>
<b>Para que serve a DIR?</b><br>
<ul style='text-align:left;margin:0 0 1rem 1.2rem;'>
<li>Regularização junto aos órgãos competentes</li>
<li>Atendimento às exigências do eSocial</li>
<li>Segurança jurídica para a empresa</li>
<li>Comprovação técnica da inexistência de riscos ocupacionais</li>
</ul>
<b>Como a MASSANO ASSESSORIA realiza a DIR?</b><br>
<ul style='text-align:left;margin:0 0 1rem 1.2rem;'>
<li>Análise das atividades da empresa</li>
<li>Avaliação técnica das condições de trabalho</li>
<li>Emissão de documento formal assinado por profissional habilitado</li>
<li>Atendimento 100% digital</li>
</ul>`;
    } else if (tipo === 'pgr') {
        title.textContent = 'PGR - Programa de Gerenciamento de Riscos';
        desc.innerHTML = `O PGR – Programa de Gerenciamento de Riscos é um documento obrigatório de Segurança e Saúde no Trabalho, exigido pela Ministério do Trabalho e Emprego, conforme a NR 01. Ele tem como objetivo identificar, avaliar e controlar os riscos ocupacionais existentes nas atividades da empresa, prevenindo acidentes e doenças do trabalho.<br><br>
<b>Qual é o objetivo do PGR?</b><br>
<ul style='text-align:left;margin:0 0 1rem 1.2rem;'>
<li>Reduzir acidentes e afastamentos</li>
<li>Prevenir doenças ocupacionais</li>
<li>Atender à legislação trabalhista</li>
<li>Evitar multas e autuações</li>
<li>Proteger a integridade física dos trabalhadores</li>
</ul>
<b>O que compõe o PGR?</b><br>
O PGR é formado basicamente por dois principais documentos:<br><br>
<b>Inventário de Riscos</b><br>
É o levantamento detalhado de todos os riscos presentes na empresa, como:<br>
<ul style='text-align:left;margin:0 0 1rem 1.2rem;'>
<li>Riscos físicos (ruído, calor, vibração)</li>
<li>Riscos químicos (poeiras, vapores, gases)</li>
<li>Riscos biológicos</li>
<li>Riscos ergonômicos</li>
<li>Riscos de acidentes</li>
</ul>
Aqui são identificados:<br>
<ul style='text-align:left;margin:0 0 1rem 1.2rem;'>
<li>Onde o risco está</li>
<li>Quem está exposto</li>
<li>Qual o nível de risco</li>
<li>Quais medidas de controle são necessárias</li>
</ul>`;
    }
    modal.style.display = 'flex';
}

function closeModal() {
    document.getElementById('modal-servico').style.display = 'none';
}

// ===== ANIMAÇÃO DO BADGE =====
function criarFatias() {
    const badge = document.querySelector('.xp-badge');
    if (!badge) return;
    if (badge.querySelector('.xp-badge-svg')) return;

    const svgNS = "http://www.w3.org/2000/svg";
    const svg = document.createElementNS(svgNS, "svg");
    svg.setAttribute("class", "xp-badge-svg");
    svg.setAttribute("viewBox", "0 0 100 100");

    const centroX = 50, centroY = 50, raio = 46;
    const anguloInicial = -90;
    const numFatias = 10;
    const anguloPorFatia = 360 / numFatias;

    for (let i = 0; i < numFatias; i++) {
        const angulo1 = (anguloInicial + i * anguloPorFatia) * Math.PI / 180;
        const angulo2 = (anguloInicial + (i + 1) * anguloPorFatia) * Math.PI / 180;

        const x1 = centroX + raio * Math.cos(angulo1);
        const y1 = centroY + raio * Math.sin(angulo1);
        const x2 = centroX + raio * Math.cos(angulo2);
        const y2 = centroY + raio * Math.sin(angulo2);

        const largeArcFlag = anguloPorFatia > 180 ? 1 : 0;
        const d = `M ${centroX} ${centroY} L ${x1} ${y1} A ${raio} ${raio} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;

        const path = document.createElementNS(svgNS, "path");
        path.setAttribute("d", d);
        path.setAttribute("fill", "#c9a34b");
        path.setAttribute("data-fatia", i);
        svg.appendChild(path);
    }
    badge.insertBefore(svg, badge.firstChild);
}

function animarFatias(progresso) {
    const paths = document.querySelectorAll('.xp-badge-svg path');
    if (!paths.length) return;

    const separacao = 1 - progresso;
    const centroX = 50, centroY = 50;
    const raioBase = 46;
    const numFatias = 10;
    const anguloBase = 360 / numFatias;

    paths.forEach((path, i) => {
        const anguloInicial = -90 + i * anguloBase;
        const anguloEfetivo = anguloBase * (1 - separacao * 0.2);
        const gapAngular = (anguloBase - anguloEfetivo) / 2;

        const ang1 = (anguloInicial + gapAngular) * Math.PI / 180;
        const ang2 = (anguloInicial + anguloBase - gapAngular) * Math.PI / 180;

        const raioEfetivo = raioBase * (1 - separacao * 0.1);

        const x1 = centroX + raioEfetivo * Math.cos(ang1);
        const y1 = centroY + raioEfetivo * Math.sin(ang1);
        const x2 = centroX + raioEfetivo * Math.cos(ang2);
        const y2 = centroY + raioEfetivo * Math.sin(ang2);

        const largeArcFlag = anguloEfetivo > 180 ? 1 : 0;
        const d = `M ${centroX} ${centroY} L ${x1} ${y1} A ${raioEfetivo} ${raioEfetivo} 0 ${largeArcFlag} 1 ${x2} ${y2} Z`;
        
        requestAnimationFrame(() => {
            path.setAttribute("d", d);
        });
    });
}

function setupBadgeAnimation() {
    const el = document.getElementById('xp-badge-animate');
    if (!el) return;

    const start = 0;
    const end = 10;
    const duration = 1500;
    const startTime = performance.now();

    function animateCount(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = progress === 1 ? 1 : 1 - Math.pow(2, -10 * progress);
        const value = Math.floor(eased * (end - start) + start);
        el.textContent = '+' + value;
        animarFatias(eased);

        if (progress < 1) {
            requestAnimationFrame(animateCount);
        } else {
            el.textContent = '+10';
            animarFatias(1);
        }
    }
    setTimeout(() => requestAnimationFrame(animateCount), 500);
}

// ===== ANIMAÇÃO DE CONTADORES (RESULTADOS) =====
function setupCountUpAnimation() {
    const els = Array.from(document.querySelectorAll('[data-countup]'));
    if (!els.length) return;

    const prefersReducedMotion = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const animateEl = (el) => {
        if (!el || el.dataset.countupDone === 'true') return;

        const toRaw = el.getAttribute('data-to');
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const to = Number(toRaw);

        if (!Number.isFinite(to)) {
            el.dataset.countupDone = 'true';
            return;
        }

        if (prefersReducedMotion) {
            el.textContent = `${prefix}${Math.round(to)}${suffix}`;
            el.dataset.countupDone = 'true';
            return;
        }

        const durationMs = 700;
        const startTime = performance.now();

        // Começa do zero no momento em que entra na tela
        el.textContent = `${prefix}0${suffix}`;

        const easeOutCubic = (t) => 1 - Math.pow(1 - t, 3);

        const step = (now) => {
            const t = Math.min((now - startTime) / durationMs, 1);
            const eased = easeOutCubic(t);
            const current = Math.round(eased * to);
            el.textContent = `${prefix}${current}${suffix}`;

            if (t < 1) {
                requestAnimationFrame(step);
            } else {
                el.textContent = `${prefix}${Math.round(to)}${suffix}`;
                el.dataset.countupDone = 'true';
            }
        };

        requestAnimationFrame(step);
    };

    if (!('IntersectionObserver' in window)) {
        els.forEach(animateEl);
        return;
    }

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    animateEl(entry.target);
                    observer.unobserve(entry.target);
                }
            });
        },
        { threshold: 0.25 }
    );

    els.forEach((el) => observer.observe(el));
}

// ===== SETUP DOS BOTÕES =====
function setupScrollButtons() {
    document.querySelectorAll('[data-scroll]').forEach(button => {
        button.addEventListener('click', (e) => {
            e.preventDefault();
            const href = button.getAttribute('data-scroll');
            if (href) scrollToSection(href);
        });
    });
}

function setupMobileMenu() {
    const menuButton = document.getElementById('mobile-menu-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const menuIcon = document.getElementById('menu-icon');
    const closeIcon = document.getElementById('close-icon');

    if (!menuButton || !mobileMenu) return;

    menuButton.addEventListener('click', () => {
        const isOpen = !mobileMenu.classList.contains('hidden');
        mobileMenu.classList.toggle('hidden');
        
        if (isOpen) {
            menuIcon?.classList.remove('hidden');
            closeIcon?.classList.add('hidden');
        } else {
            menuIcon?.classList.add('hidden');
            closeIcon?.classList.remove('hidden');
        }
    });
}

function setupWhatsAppButtons() {
    document.querySelectorAll('[data-action="whatsapp"]').forEach(button => {
        button.addEventListener('click', () => openWhatsApp());
    });
}

function setupFormspreeRedirect() {
    const forms = document.querySelectorAll('form[action^="https://formspree.io/f/"]');
    if (!forms.length) return;

    const nextUrl = `${window.location.origin}${window.location.pathname}#contato`;

    forms.forEach((form) => {
        let nextInput = form.querySelector('input[name="_next"]');
        if (!nextInput) {
            nextInput = document.createElement('input');
            nextInput.type = 'hidden';
            nextInput.name = '_next';
            form.appendChild(nextInput);
        }
        nextInput.value = nextUrl;
    });
}

function setupFormspreeAjax() {
    const forms = document.querySelectorAll('form[action^="https://formspree.io/f/"]');
    if (!forms.length) return;

    forms.forEach((form) => {
        form.addEventListener('submit', async (e) => {
            e.preventDefault();

            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn?.textContent;
            if (submitBtn) {
                submitBtn.disabled = true;
                submitBtn.textContent = 'Enviando...';
            }

            try {
                const response = await fetch(form.action, {
                    method: 'POST',
                    body: new FormData(form),
                    headers: {
                        'Accept': 'application/json'
                    }
                });

                if (!response.ok) throw new Error('Formspree request failed');

                form.reset();
                if (submitBtn) submitBtn.textContent = 'Enviado!';

                // Volta para o bloco de contato (mantém a pessoa no site)
                if (document.getElementById('contato')) {
                    window.location.hash = '#contato';
                }

                setTimeout(() => {
                    if (submitBtn) {
                        submitBtn.disabled = false;
                        submitBtn.textContent = originalText || 'Enviar';
                    }
                }, 2000);
            } catch (err) {
                if (submitBtn) {
                    submitBtn.disabled = false;
                    submitBtn.textContent = originalText || 'Enviar';
                }
            }
        });
    });
}

function setupMailForms() {
    function buildMailBody(formData) {
        const lines = [];
        for (const [key, value] of formData.entries()) {
            if (!String(value).trim()) continue;
            lines.push(`${key}: ${value}`);
        }
        return lines.join('\n');
    }

    document.querySelectorAll('form[data-mail-form]').forEach(form => {
        if (form.getAttribute('action')) return;
        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const submitBtn = form.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            
            submitBtn.disabled = true;
            submitBtn.textContent = 'Enviando...';

            const formData = new FormData(form);
            const subject = form.getAttribute('data-mail-subject') || 'Solicitação de Contato';
            const body = buildMailBody(formData);
            
            window.location.href = `mailto:massanoassesoria@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
            
            setTimeout(() => {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }, 2000);
        });
    });
}

function setupCurrentYear() {
    const yearElement = document.getElementById('current-year');
    if (yearElement) yearElement.textContent = String(new Date().getFullYear());
}

function setupScrollReveal() {
    if (window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches) return;

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('section').forEach(section => {
        // O hero precisa aparecer imediatamente (especialmente com carrossel)
        if (section.id === 'home') return;
        section.style.opacity = '0';
        section.style.transform = 'translateY(30px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const cards = document.querySelectorAll('.trust-card, .testimonial-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(18px)';

        const delay = 80 * (index % 6);
        card.style.transition = `opacity 0.55s ease ${delay}ms, transform 0.55s ease ${delay}ms`;
        observer.observe(card);
    });
}

function setupHeroSlider() {
    const slider = document.querySelector('[data-hero-slider]');
    if (!slider) return;

    const track = slider.querySelector('[data-hero-track]');
    const slides = Array.from(slider.querySelectorAll('[data-hero-slide]'));
    const prevBtn = slider.querySelector('[data-hero-prev]');
    const nextBtn = slider.querySelector('[data-hero-next]');
    const dotsHost = slider.querySelector('[data-hero-dots]');

    if (!track || slides.length < 2) return;

    const prefersReducedMotion = !!window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;
    const autoplayMs = 6500;
    const swipeThresholdPx = 40;

    let currentIndex = 0;
    let autoplayId = null;
    let pauseDepth = 0;

    function clampIndex(index) {
        const len = slides.length;
        return ((index % len) + len) % len;
    }

    function stopAutoplay() {
        if (autoplayId) {
            clearInterval(autoplayId);
            autoplayId = null;
        }
    }

    function startAutoplay() {
        if (prefersReducedMotion) return;
        if (autoplayId) return;
        autoplayId = setInterval(() => {
            goTo(currentIndex + 1, { source: 'autoplay' });
        }, autoplayMs);
    }

    function setPaused(paused) {
        pauseDepth = Math.max(0, pauseDepth + (paused ? 1 : -1));
        if (pauseDepth > 0) stopAutoplay();
        else startAutoplay();
    }

    function updateA11y() {
        slides.forEach((slide, idx) => {
            const isActive = idx === currentIndex;
            slide.setAttribute('aria-hidden', isActive ? 'false' : 'true');
        });

        if (!dotsHost) return;
        const dots = Array.from(dotsHost.querySelectorAll('button.hero-dot'));
        dots.forEach((dot, idx) => {
            dot.setAttribute('aria-current', idx === currentIndex ? 'true' : 'false');
        });
    }

    function goTo(index, { source } = {}) {
        currentIndex = clampIndex(index);
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        updateA11y();

        if (source && source !== 'autoplay' && source !== 'init') {
            stopAutoplay();
            startAutoplay();
        }
    }

    function buildDots() {
        if (!dotsHost) return;
        dotsHost.innerHTML = '';
        slides.forEach((_, idx) => {
            const dot = document.createElement('button');
            dot.type = 'button';
            dot.className = 'hero-dot';
            dot.setAttribute('aria-label', `Ir para o slide ${idx + 1}`);
            dot.addEventListener('click', () => goTo(idx, { source: 'dot' }));
            dotsHost.appendChild(dot);
        });
    }

    prevBtn?.addEventListener('click', () => goTo(currentIndex - 1, { source: 'nav' }));
    nextBtn?.addEventListener('click', () => goTo(currentIndex + 1, { source: 'nav' }));

    slider.addEventListener('mouseenter', () => setPaused(true));
    slider.addEventListener('mouseleave', () => setPaused(false));
    slider.addEventListener('focusin', () => setPaused(true));
    slider.addEventListener('focusout', () => setPaused(false));

    slider.addEventListener('keydown', (e) => {
        if (e.key === 'ArrowLeft') {
            e.preventDefault();
            goTo(currentIndex - 1, { source: 'kbd' });
        } else if (e.key === 'ArrowRight') {
            e.preventDefault();
            goTo(currentIndex + 1, { source: 'kbd' });
        }
    });

    let touchStartX = null;
    let touchStartY = null;

    slider.addEventListener('touchstart', (e) => {
        if (!e.touches || e.touches.length !== 1) return;
        touchStartX = e.touches[0].clientX;
        touchStartY = e.touches[0].clientY;
        setPaused(true);
    }, { passive: true });

    slider.addEventListener('touchend', (e) => {
        if (touchStartX == null || touchStartY == null) return;
        const touch = e.changedTouches && e.changedTouches[0];
        if (!touch) return;

        const dx = touch.clientX - touchStartX;
        const dy = touch.clientY - touchStartY;

        if (Math.abs(dy) > Math.abs(dx)) {
            touchStartX = null;
            touchStartY = null;
            setPaused(false);
            return;
        }

        if (Math.abs(dx) >= swipeThresholdPx) {
            if (dx > 0) goTo(currentIndex - 1, { source: 'swipe' });
            else goTo(currentIndex + 1, { source: 'swipe' });
        }

        touchStartX = null;
        touchStartY = null;
        setPaused(false);
    }, { passive: true });

    document.addEventListener('visibilitychange', () => {
        if (document.hidden) stopAutoplay();
        else startAutoplay();
    });

    buildDots();
    goTo(0, { source: 'init' });
    startAutoplay();
}

// ===== INICIALIZAÇÃO =====
document.addEventListener('DOMContentLoaded', () => {
    // Inicializa ícones
    if (window.lucide?.createIcons) window.lucide.createIcons();

    // Configura tudo
    criarFatias();
    setupBadgeAnimation();
    setupScrollButtons();
    setupMobileMenu();
    setupWhatsAppButtons();
    setupHeroSlider();
    setupCountUpAnimation();
    setupFormspreeRedirect();
    setupFormspreeAjax();
    setupMailForms();
    setupCurrentYear();
    setupScrollReveal();

    // Fechar popup ao clicar fora
    const popup = document.getElementById('pricePopup');
    if (popup) {
        popup.addEventListener('click', (e) => {
            if (e.target === popup) closePricePopup();
        });
    }

    // Fechar modal ao clicar fora
    const modal = document.getElementById('modal-servico');
    if (modal) {
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
    }

    // Tecla ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closePricePopup();
            closeModal();
        }
    });

    // Abrir popup automaticamente após 3 segundos
    setTimeout(() => {
        if (!sessionStorage.getItem('popupShown')) {
            openPricePopup();
            sessionStorage.setItem('popupShown', 'true');
        }
    }, 3000);
});

// ===== FUNÇÕES GLOBAIS PARA O HTML =====
window.openPricePopup = openPricePopup;
window.closePricePopup = closePricePopup;
window.openModal = openModal;
window.closeModal = closeModal;
window.openWhatsApp = openWhatsApp;

// ===== FUNÇÃO ESPECÍFICA PARA O BOTÃO FALAR COM ESPECIALISTA =====
function openWhatsappExpert() {
    const message = encodeURIComponent('Olá! Vi o plano de R$ 300/mês e gostaria de falar com um especialista.');
    window.open(`https://wa.me/5571991117575?text=${message}`, '_blank');
    
    // Feedback visual no botão
    const btn = event.currentTarget;
    btn.style.transform = 'scale(0.95)';
    setTimeout(() => {
        btn.style.transform = '';
    }, 200);
}