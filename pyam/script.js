document.addEventListener('DOMContentLoaded', () => {
    // Synchronized timing logic from pyam.ltd
    const TIMING = {
        OPEN_DURATION: 3900381,
        CLOSE_DURATION: 7200778,
        INITIAL_OPEN_TIME: new Date("2025-09-21T00:04:27.222-04:00").getTime()
    };
    TIMING.CYCLE_DURATION = TIMING.OPEN_DURATION + TIMING.CLOSE_DURATION;

    function formatTime(ms) {
        if (ms <= 0) return "00:00:00";
        const h = Math.floor(ms / (1000 * 60 * 60));
        const m = Math.floor((ms % (1000 * 60 * 60)) / (1000 * 60));
        const s = Math.floor((ms % (1000 * 60)) / 1000);
        return `${String(h).padStart(2, '0')}:${String(m).padStart(2, '0')}:${String(s).padStart(2, '0')}`;
    }

    function updateTimers() {
        const currentTime = new Date().getTime();
        const elapsed = currentTime - TIMING.INITIAL_OPEN_TIME;
        
        // Find current position in the cycle
        let position = elapsed % TIMING.CYCLE_DURATION;
        if (position < 0) {
             position += TIMING.CYCLE_DURATION; // Handle times before INITIAL_OPEN_TIME just in case
        }

        const timerEl = document.getElementById("main-timer");
        const statusEl = document.getElementById("main-status");
        
        if (!timerEl || !statusEl) return;

        if (position < TIMING.OPEN_DURATION) {
            // Hangar is in the OPEN phase
            const timeRemaining = TIMING.OPEN_DURATION - position;
            timerEl.innerText = formatTime(timeRemaining);
            statusEl.innerText = "OUVERT";
            statusEl.classList.remove('online');
            statusEl.classList.add('active');
        } else {
            // Hangar is in the CLOSED phase
            const timeRemaining = TIMING.CYCLE_DURATION - position;
            timerEl.innerText = formatTime(timeRemaining);
            statusEl.innerText = "VÉROUILLÉ";
            statusEl.classList.remove('active');
            statusEl.classList.add('online');
        }
    }

    setInterval(updateTimers, 1000);
    updateTimers();

    // Image Modal Logic
    const modal = document.getElementById("image-modal");
    const modalImg = document.getElementById("modal-img");
    const captionText = document.getElementById("modal-caption");
    const closeModal = document.querySelector(".close-modal");
    const prevBtn = document.getElementById("modal-prev");
    const nextBtn = document.getElementById("modal-next");
    const zoomHint = document.getElementById("zoom-hint");
    
    // Collect all gallery images for navigation
    const allCards = Array.from(document.querySelectorAll('.gallery-card'));
    let currentIndex = 0;
    let isZoomed = false;
    let zoomLevel = 1;
    let panX = 0, panY = 0;
    let isDragging = false;
    let dragStartX, dragStartY;
    
    function openModal(index) {
        currentIndex = index;
        const card = allCards[index];
        const img = card.querySelector('img');
        const title = card.querySelector('h3').innerText;
        
        modalImg.src = img.src;
        captionText.innerText = title;
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        
        // Reset zoom
        resetZoom();
        
        // Show zoom hint briefly
        if (zoomHint) {
            zoomHint.classList.remove('hidden');
            setTimeout(() => zoomHint.classList.add('hidden'), 3000);
        }
    }
    
    function resetZoom() {
        isZoomed = false;
        zoomLevel = 1;
        panX = 0;
        panY = 0;
        modalImg.classList.remove('zoomed', 'dragging');
        modalImg.style.transform = '';
    }
    
    function applyTransform() {
        modalImg.style.transform = `scale(${zoomLevel}) translate(${panX}px, ${panY}px)`;
    }
    
    function navigateTo(index) {
        if (index < 0) index = allCards.length - 1;
        if (index >= allCards.length) index = 0;
        currentIndex = index;
        
        const card = allCards[currentIndex];
        const img = card.querySelector('img');
        const title = card.querySelector('h3').innerText;
        
        // Smooth transition for image swap
        modalImg.style.opacity = '0';
        setTimeout(() => {
            modalImg.src = img.src;
            captionText.innerText = title;
            resetZoom();
            modalImg.style.opacity = '1';
        }, 150);
    }
    
    // Open on card click
    allCards.forEach((card, idx) => {
        card.addEventListener('click', () => openModal(idx));
    });
    
    // Close
    const closeHandler = () => {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
        resetZoom();
    };
    
    if (closeModal) closeModal.addEventListener('click', closeHandler);
    
    // Nav arrows
    if (prevBtn) prevBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateTo(currentIndex - 1); });
    if (nextBtn) nextBtn.addEventListener('click', (e) => { e.stopPropagation(); navigateTo(currentIndex + 1); });
    
    // Close on clicking the dark background (not the image or controls)
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === modal || e.target.classList.contains('modal-image-wrapper')) {
                if (!isZoomed) closeHandler();
                else resetZoom();
            }
        });
    }
    
    // Double-click to zoom
    modalImg.addEventListener('dblclick', function(e) {
        e.stopPropagation();
        if (!isZoomed) {
            zoomLevel = 2.5;
            isZoomed = true;
            modalImg.classList.add('zoomed');
            
            // Zoom toward click position
            const rect = modalImg.getBoundingClientRect();
            const offsetX = (e.clientX - rect.left) / rect.width - 0.5;
            const offsetY = (e.clientY - rect.top) / rect.height - 0.5;
            panX = -offsetX * rect.width * 0.5;
            panY = -offsetY * rect.height * 0.5;
        } else {
            resetZoom();
            return;
        }
        applyTransform();
    });
    
    // Scroll wheel to zoom
    modalImg.addEventListener('wheel', function(e) {
        e.preventDefault();
        e.stopPropagation();
        
        const delta = e.deltaY > 0 ? -0.3 : 0.3;
        zoomLevel = Math.min(5, Math.max(1, zoomLevel + delta));
        
        if (zoomLevel <= 1) {
            resetZoom();
        } else {
            isZoomed = true;
            modalImg.classList.add('zoomed');
        }
        applyTransform();
    }, { passive: false });
    
    // Drag to pan when zoomed
    modalImg.addEventListener('mousedown', function(e) {
        if (!isZoomed) return;
        e.preventDefault();
        isDragging = true;
        dragStartX = e.clientX - panX * zoomLevel;
        dragStartY = e.clientY - panY * zoomLevel;
        modalImg.classList.add('dragging');
    });
    
    document.addEventListener('mousemove', function(e) {
        if (!isDragging) return;
        panX = (e.clientX - dragStartX) / zoomLevel;
        panY = (e.clientY - dragStartY) / zoomLevel;
        applyTransform();
    });
    
    document.addEventListener('mouseup', function() {
        if (isDragging) {
            isDragging = false;
            modalImg.classList.remove('dragging');
        }
    });

    // Keyboard controls
    document.addEventListener('keydown', function(e) {
        if (!modal || !modal.classList.contains('show')) return;
        
        if (e.key === 'Escape') {
            if (isZoomed) resetZoom();
            else closeHandler();
        } else if (e.key === 'ArrowLeft') {
            navigateTo(currentIndex - 1);
        } else if (e.key === 'ArrowRight') {
            navigateTo(currentIndex + 1);
        }
    });

    // Add smooth opacity transition for image swaps
    modalImg.style.transition = 'opacity 0.15s ease, transform 0.35s cubic-bezier(0.25, 0.8, 0.25, 1)';
});
