/* Company / BootstrapMade navigation adapted for AIM. Product, gallery and contact interactions by project. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const products = {
    'fluffy-pants': { brand: 'FLUFFY · BAYI', name: 'Fluffy Baby Pants', image: 'fluffy-pants.png', description: 'Popok bayi tipe celana dari Fluffy. Pilih ukuran sesuai kebutuhan si kecil dan ikuti panduan pada kemasan produk.', specs: [['Jenis', 'Popok bayi tipe celana'], ['Kemasan', 'S40 / M30 / L26 / XL26']], shopeeUrl: 'https://shopee.co.id/FLUFFY-Popok-Bayi-Tipe-Celana-S40-M30-L26-XL26-Halal-Anti-Bocor-Anti-Ruam-Nyaman-Dipakai-i.94116265.1549499232' },
    'fluffy-tape': { brand: 'FLUFFY · BAYI', name: 'Fluffy Baby Tape', image: 'fluffy-tape.png', description: 'Popok bayi tipe perekat dari Fluffy, tersedia dalam beberapa pilihan ukuran dan isi kemasan.', specs: [['Jenis', 'Popok bayi tipe perekat'], ['Kemasan', 'NB–S40 / M36 / L32']], shopeeUrl: 'https://shopee.co.id/Fluffy-Popok-Bayi-Tipe-Perekat-Tape-NB-S40-M36-L32-Jumbo-Pack-Halal-Clothlike-Anti-Bocor-Anti-Ruam-i.94116265.1549464819' },
    'mamamia-pants': { brand: 'MAMAMIA · BAYI', name: 'Mamamia Baby Pants', image: 'mamamia-pants.jpg', description: 'Pilihan popok bayi tipe celana dari Mamamia. Gambar menampilkan paket tiga kemasan ukuran M30.', specs: [['Jenis', 'Popok bayi tipe celana'], ['Kemasan ditampilkan', '3 bag × M30']], shopeeQuery: 'Mamamia popok bayi celana M30 3 bag' },
    'ideal-pants': { brand: 'IDEAL · DEWASA', name: 'IDEAL Adult Pants', image: 'ideal-pants.png', description: 'Popok dewasa tipe celana dari IDEAL untuk melengkapi kebutuhan perawatan sehari-hari. Rujuk panduan ukuran pada kemasan.', specs: [['Jenis', 'Popok dewasa tipe celana'], ['Kemasan', 'M8 / L8 / XL8']], shopeeUrl: 'https://shopee.co.id/IDEAL-Popok-Dewasa-Tipe-Celana-size-M8-2-L8-XL8-Anti-Bakteri-Daya-Serap-Tinggi-Nyaman-Seharian-i.94116265.20964470342' },
    'ideal-tape': { brand: 'IDEAL · DEWASA', name: 'IDEAL Adult Tape', image: 'ideal-tape.png', description: 'Popok dewasa dengan pengikat tipe perekat dari IDEAL. Lihat panduan ukuran dan penggunaan pada kemasan.', specs: [['Jenis', 'Popok dewasa tipe perekat'], ['Kemasan', 'M8 / L7 / XL6']], shopeeUrl: 'https://shopee.co.id/IDEAL-Popok-Dewasa-Tipe-Perekat-M8-L7-XL6-Anti-Bocor-Anti-Ruam-Daya-Serap-Nyaman-untuk-Orang-Tua-i.94116265.18264474137' },
    'lively-pants': { brand: 'LIVELY · DEWASA', name: 'Lively Adult Pants', image: 'lively-pants.jpeg', description: 'Popok dewasa tipe celana dari Lively. Gambar katalog menampilkan penawaran paket dua kemasan.', specs: [['Jenis', 'Popok dewasa tipe celana'], ['Pilihan ukuran', 'M / L / XL']], shopeeQuery: 'Lively popok dewasa tipe celana 2 pack' },
    'luna-menstrual': { brand: 'LUNA · PERAWATAN', name: 'LUNA Celana Menstruasi', image: 'luna-menstrual.jpg', description: 'Celana menstruasi dari LUNA untuk kebutuhan perawatan pribadi. Gunakan sesuai petunjuk pada kemasan.', specs: [['Jenis', 'Celana menstruasi'], ['Ukuran', 'M–XL'], ['Isi ditampilkan', '2 pcs']], shopeeUrl: 'https://shopee.co.id/Luna-Celana-Menstruasi-isi-2-pcs-ukuran-M-XL-%28-ukuran-pinggul-85-105cm-%29-i.1108025046.41266129433' },
    'sofcare-underpad': { brand: 'SOFCARE · PERAWATAN', name: 'Sofcare Underpad', image: 'sofcare-underpad.png', description: 'Alas sekali pakai dari Sofcare untuk melengkapi kebutuhan perawatan. Gambar menampilkan paket dua kemasan underpad XL.', specs: [['Jenis', 'Underpad / alas sekali pakai'], ['Ukuran', '60 × 90 cm (XL)']], shopeeUrl: 'https://shopee.co.id/-2-Pack-Sofcare-Underpad-XL-60cm-x-90cm-Perlak-Sekali-Pakai-Serbaguna-Halus-i.94116265.15497480610' },
    'ohmypet-female': { brand: 'OH MY PET · HEWAN', name: 'Oh My Pet Female Diapers', image: 'ohmypet-female.png', description: 'Popok hewan betina dari Oh My Pet. Pilih ukuran mengikuti panduan pada produk agar sesuai dengan kebutuhan hewan kesayangan Anda.', specs: [['Jenis', 'Popok hewan betina'], ['Kemasan ditampilkan', 'M10']], shopeeQuery: 'Oh My Pet popok hewan betina M10' }
  };

  const header = $('#header');
  const menuButton = $('.menu-toggle');
  const nav = $('#navmenu');
  const closeMenu = () => {
    nav.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menuButton.setAttribute('aria-label', 'Buka menu navigasi');
    $('i', menuButton).className = 'bi bi-list';
  };
  menuButton.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    menuButton.setAttribute('aria-expanded', String(open));
    menuButton.setAttribute('aria-label', open ? 'Tutup menu navigasi' : 'Buka menu navigasi');
    $('i', menuButton).className = open ? 'bi bi-x-lg' : 'bi bi-list';
  });
  $$('#navmenu a').forEach(link => link.addEventListener('click', closeMenu));
  document.addEventListener('click', event => {
    if (!header.contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  const navLinks = $$('#navmenu a');
  const navSections = navLinks.map(link => $(link.getAttribute('href'))).filter(Boolean);
  let navOffset;
  const setActiveNav = () => {
    const current = navSections.findLast(section => section.getBoundingClientRect().top <= navOffset + 2) ?? navSections[0];
    navLinks.forEach(link => {
      const active = link.hash === '#' + current.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    header.classList.toggle('scrolled', window.scrollY > 30);
  };
  window.addEventListener('scroll', setActiveNav, { passive: true });
  const updateNavOffset = () => {
    navOffset = header.offsetHeight + 10;
    document.documentElement.style.setProperty('--nav-offset', `${navOffset}px`);
    setActiveNav();
  };
  new ResizeObserver(updateNavOffset).observe(header);
  updateNavOffset();
  $('#year').textContent = String(new Date().getFullYear());

  let activeFilter = 'semua';
  const cards = $$('.product-card');
  const search = $('#product-search');
  const filterButtons = $$('[data-filter]');
  function filterProducts() {
    const term = search.value.trim().toLocaleLowerCase('id');
    let count = 0;
    cards.forEach(card => {
      const product = products[card.dataset.product];
      const match = (activeFilter === 'semua' || card.dataset.category === activeFilter) && `${product.name} ${product.brand} ${product.description}`.toLocaleLowerCase('id').includes(term);
      card.hidden = !match;
      if (match) count++;
    });
    $('#product-count').textContent = `Menampilkan ${count} dari ${cards.length} produk`;
    $('#empty-state').hidden = count > 0;
    $('#product-grid').hidden = count === 0;
    filterButtons.forEach(button => {
      const active = button.dataset.filter === activeFilter;
      button.classList.toggle('selected', active);
      button.setAttribute('aria-pressed', String(active));
    });
  }
  filterButtons.forEach(button => button.addEventListener('click', () => {
    activeFilter = button.dataset.filter;
    filterProducts();
  }));
  search.addEventListener('input', filterProducts);
  $('#reset-products').addEventListener('click', () => {
    search.value = '';
    activeFilter = 'semua';
    filterProducts();
    filterButtons[0].focus();
  });

  function openDialog(dialog) {
    dialog.showModal();
    document.body.classList.add('dialog-open');
  }
  $$('.aim-dialog').forEach(dialog => {
    $('.dialog-close', dialog).addEventListener('click', () => dialog.close());
    dialog.addEventListener('click', event => {
      if (event.target !== dialog) return;
      const rect = dialog.getBoundingClientRect();
      if (event.clientX < rect.left || event.clientX > rect.right || event.clientY < rect.top || event.clientY > rect.bottom) dialog.close();
    });
    dialog.addEventListener('close', () => {
      if (!$$('dialog[open]').length) document.body.classList.remove('dialog-open');
    });
  });
  cards.forEach(card => $('.product-open', card).addEventListener('click', () => {
    const product = products[card.dataset.product];
    $('#dialog-product-title').textContent = product.name;
    $('#dialog-product-brand').textContent = product.brand;
    $('#dialog-product-img').src = `assets/img/${product.image}`;
    $('#dialog-product-img').alt = product.name;
    $('#dialog-product-description').textContent = product.description;
    $('#dialog-product-source').href = product.shopeeUrl
      ?? `https://shopee.co.id/search?keyword=${encodeURIComponent(product.shopeeQuery)}`;
    $('#dialog-product-marketplace-label').textContent = product.shopeeUrl ? 'Lihat di Shopee' : 'Cari di Shopee';
    const list = $('#dialog-product-specs');
    list.replaceChildren();
    product.specs.forEach(([label, value]) => {
      const row = document.createElement('div');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);
      list.append(row);
    });
    openDialog($('#product-dialog'));
  }));

  const videoDialog = $('#video-dialog');
  $$('[data-video]').forEach(button => button.addEventListener('click', () => {
    const frame = document.createElement('iframe');
    frame.src = 'https://www.youtube-nocookie.com/embed/-svRLYryo6k?rel=0';
    frame.title = 'Video profil Aman Indah Makmur';
    frame.allow = 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture';
    frame.referrerPolicy = 'strict-origin-when-cross-origin';
    frame.allowFullscreen = true;
    $('#video-container').replaceChildren(frame);
    openDialog(videoDialog);
  }));
  videoDialog.addEventListener('close', () => $('#video-container').replaceChildren());

  const photos = [
    { file: 'team-event.jpg', caption: 'Kebersamaan tim dalam kegiatan peresmian Plant 3 di Batang · April 2026' },
    { file: 'factory-event.jpg', caption: 'Kegiatan syukuran dan peresmian Plant 3 AIM · Batang, April 2026' },
    { file: 'news-csr.jpeg', caption: 'Berbagi kasih di Rumah Anak Surga · Semarang, Maret 2026' }
  ];
  let photoIndex = 0;
  function showPhoto(index) {
    photoIndex = (index + photos.length) % photos.length;
    const photo = photos[photoIndex];
    $('#gallery-image').src = `assets/img/${photo.file}`;
    $('#gallery-image').alt = photo.caption;
    $('#gallery-caption').textContent = `${photoIndex + 1} / ${photos.length} — ${photo.caption}`;
  }
  $$('[data-gallery]').forEach(button => button.addEventListener('click', () => {
    showPhoto(Number(button.dataset.gallery));
    openDialog($('#gallery-dialog'));
  }));
  $('#gallery-prev').addEventListener('click', () => showPhoto(photoIndex - 1));
  $('#gallery-next').addEventListener('click', () => showPhoto(photoIndex + 1));
  $('#gallery-dialog').addEventListener('keydown', event => {
    if (event.key === 'ArrowLeft') showPhoto(photoIndex - 1);
    if (event.key === 'ArrowRight') showPhoto(photoIndex + 1);
  });

  const form = $('#contact-form');
  form.addEventListener('input', () => { $('#message-result').hidden = true; });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const values = new FormData(form);
    const name = String(values.get('name') || '').trim();
    const company = String(values.get('company') || '').trim();
    const topic = String(values.get('topic') || '');
    const message = String(values.get('message') || '').trim();
    if (!name || message.length < 10) {
      const field = !name ? form.elements.name : form.elements.message;
      field.setCustomValidity(!name ? 'Masukkan nama Anda.' : 'Tulis pesan minimal 10 karakter selain spasi.');
      field.reportValidity();
      field.addEventListener('input', () => field.setCustomValidity(''), { once: true });
      return;
    }
    const draft = `Halo Dimas (admin website praktikum AIM),\n\nNama: ${name}${company ? `\nPerusahaan: ${company}` : ''}\nTopik: ${topic}\n\n${message}`;
    const channel = event.submitter?.value === 'email' ? 'email' : 'whatsapp';
    const whatsappLink = $('#whatsapp-draft');
    const emailLink = $('#email-draft');
    whatsappLink.href = `https://wa.me/6285190012056?text=${encodeURIComponent(draft)}`;
    emailLink.href = `mailto:dimasbusinesshub@gmail.com?subject=${encodeURIComponent(`[Uji Website AIM] ${topic}`)}&body=${encodeURIComponent(draft)}`;
    whatsappLink.hidden = channel !== 'whatsapp';
    emailLink.hidden = channel !== 'email';
    $('#message-status').textContent = channel === 'email'
      ? 'Draf email siap. Buka aplikasi email, tinjau kembali, lalu kirim.'
      : 'Pesan siap. Buka WhatsApp, tinjau kembali, lalu kirim.';
    $('#message-result').hidden = false;
    (channel === 'email' ? emailLink : whatsappLink).focus();
  });

  function initScrollReveal() {
    const motion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (motion.matches || !('IntersectionObserver' in window)) return;

    const groups = [
      ['.hero-copy', ':scope > *', 70],
      ['.hero-layout', ':scope > .hero-visual', 0],
      ['.brand-layout', ':scope > p, .brand-logos > img', 60],
      ['.section-heading, .about-layout, .purpose-grid', ':scope > *', 100],
      ['.timeline, .product-grid, .service-grid, .news-grid, .gallery-bar', ':scope > *', 80],
      ['.production-layout', ':scope > *', 110],
      ['.faq-layout', ':scope > *', 100],
      ['#kontak > .container', ':scope > .contact-heading, :scope > .map-layout', 0],
      ['.contact-layout', ':scope > *', 100],
      ['.about-aim > .container', ':scope > .source-note', 0],
      ['.products-section > .container', ':scope > .catalog-tools', 0],
      ['.services-aim > .container', ':scope > .service-bottom', 0],
      ['.organization-section > .container', ':scope > .org-document', 0]
    ];
    const targets = new Set();
    const reveal = element => {
      element.classList.remove('reveal-pending');
      element.classList.add('reveal-entered');
      observer.unobserve(element);
    };
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) reveal(entry.target);
      });
    }, { threshold: 0.06, rootMargin: '0px 0px -36px 0px' });

    groups.forEach(([parents, children, step]) => {
      $$(parents).forEach(parent => {
        $$(children, parent).forEach((element, index) => {
          if (targets.has(element)) return;
          targets.add(element);
          element.style.setProperty('--reveal-delay', `${Math.min(index, 3) * step}ms`);
          element.classList.add('reveal-pending');
          observer.observe(element);
        });
      });
    });

    document.addEventListener('focusin', event => {
      const pending = event.target.closest('.reveal-pending');
      if (pending) {
        pending.style.setProperty('--reveal-delay', '0ms');
        reveal(pending);
      }
    });
    motion.addEventListener('change', event => {
      if (!event.matches) return;
      observer.disconnect();
      targets.forEach(element => element.classList.remove('reveal-pending', 'reveal-entered'));
    });
  }
  initScrollReveal();
})();
