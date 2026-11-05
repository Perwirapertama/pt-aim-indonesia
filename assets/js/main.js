/* Company / BootstrapMade navigation adapted for AIM. Product, gallery and contact interactions by project. */
(() => {
  'use strict';
  const $ = (selector, root = document) => root.querySelector(selector);
  const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
  const products = {
    'fluffy-pants': { brand: 'FLUFFY · BAYI', name: 'Fluffy Baby Pants', image: 'fluffy-pants.png', description: 'Popok bayi tipe celana dari Fluffy. Pilih ukuran sesuai kebutuhan si kecil dan ikuti panduan pada kemasan produk.', specs: [['Jenis', 'Popok bayi tipe celana'], ['Kemasan', 'S40 / M30 / L26 / XL26']], url: 'https://aimindonesia.co.id/product/fluffy-popok-bayi-tipe-celana-s40-i-m30-i-l26/' },
    'fluffy-tape': { brand: 'FLUFFY · BAYI', name: 'Fluffy Baby Tape', image: 'fluffy-tape.png', description: 'Popok bayi tipe perekat dari Fluffy, tersedia dalam beberapa pilihan ukuran dan isi kemasan.', specs: [['Jenis', 'Popok bayi tipe perekat'], ['Kemasan', 'NB–S40 / M36 / L32']], url: 'https://aimindonesia.co.id/product/fluffy-popok-bayi-tipe-perekat-nb-s40-m36-l32/' },
    'mamamia-pants': { brand: 'MAMAMIA · BAYI', name: 'Mamamia Baby Pants', image: 'mamamia-pants.jpg', description: 'Pilihan popok bayi tipe celana dari Mamamia. Gambar menampilkan paket tiga kemasan ukuran M30.', specs: [['Jenis', 'Popok bayi tipe celana'], ['Kemasan ditampilkan', '3 bag × M30']], url: 'https://aimindonesia.co.id/product/paket-3bag-mamamia-popok-bayi-celana-anti-ruam-m30-pcs-x-3-bag-halal-soft-dry-pants-xtra-lembut-xtra-kering/' },
    'ideal-pants': { brand: 'IDEAL · DEWASA', name: 'IDEAL Adult Pants', image: 'ideal-pants.png', description: 'Popok dewasa tipe celana dari IDEAL untuk melengkapi kebutuhan perawatan sehari-hari. Rujuk panduan ukuran pada kemasan.', specs: [['Jenis', 'Popok dewasa tipe celana'], ['Kemasan', 'M8 / L8 / XL8']], url: 'https://aimindonesia.co.id/product/ideal-popok-dewasa-tipe-celana-m8-i-l7-i-xl6/' },
    'ideal-tape': { brand: 'IDEAL · DEWASA', name: 'IDEAL Adult Tape', image: 'ideal-tape.png', description: 'Popok dewasa dengan pengikat tipe perekat dari IDEAL. Informasi ukuran dan penggunaan tersedia pada halaman resmi produk.', specs: [['Jenis', 'Popok dewasa tipe perekat'], ['Kemasan', 'M8 / L7 / XL6']], url: 'https://aimindonesia.co.id/product/ideal-popok-dewasa-adult-diapers/' },
    'lively-pants': { brand: 'LIVELY · DEWASA', name: 'Lively Adult Pants', image: 'lively-pants.jpeg', description: 'Popok dewasa tipe celana dari Lively. Gambar katalog menampilkan penawaran paket dua kemasan.', specs: [['Jenis', 'Popok dewasa tipe celana'], ['Pilihan ukuran', 'M / L / XL']], url: 'https://aimindonesia.co.id/product/2-pack-lively-adult-diapers-pants-m82-l71-xl61-with-japan-technology-anti-ruam-comfort-soft/' },
    'luna-menstrual': { brand: 'LUNA · PERAWATAN', name: 'LUNA Celana Menstruasi', image: 'luna-menstrual.jpg', description: 'Celana menstruasi dari LUNA untuk kebutuhan perawatan pribadi. Gunakan sesuai petunjuk pada kemasan.', specs: [['Jenis', 'Celana menstruasi'], ['Ukuran', 'M–XL'], ['Isi ditampilkan', '2 pcs']], url: 'https://aimindonesia.co.id/product/1-pack-luna-celana-menstruasi-m-xl/' },
    'sofcare-underpad': { brand: 'SOFCARE · PERAWATAN', name: 'Sofcare Underpad', image: 'sofcare-underpad.png', description: 'Alas sekali pakai dari Sofcare untuk melengkapi kebutuhan perawatan. Gambar menampilkan paket dua kemasan underpad XL.', specs: [['Jenis', 'Underpad / alas sekali pakai'], ['Ukuran', '60 × 90 cm (XL)']], url: 'https://aimindonesia.co.id/product/2-pack-sofcare-underpad-xl-60cm-x-90cm-perlak-alas-sekali-pakai/' },
    'ohmypet-female': { brand: 'OH MY PET · HEWAN', name: 'Oh My Pet Female Diapers', image: 'ohmypet-female.png', description: 'Popok hewan betina dari Oh My Pet. Pilih ukuran mengikuti panduan pada produk agar sesuai dengan kebutuhan hewan kesayangan Anda.', specs: [['Jenis', 'Popok hewan betina'], ['Kemasan ditampilkan', 'M10']], url: 'https://aimindonesia.co.id/product/oh-my-pet-pet-diapers-female-betina/' }
  };

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
    if (!$('#header').contains(event.target)) closeMenu();
  });
  document.addEventListener('keydown', event => {
    if (event.key === 'Escape') closeMenu();
  });
  const navLinks = $$('#navmenu a');
  const navSections = navLinks.map(link => $(link.getAttribute('href'))).filter(Boolean);
  const setActiveNav = () => {
    const current = navSections.filter(section => section.getBoundingClientRect().top <= 180).at(-1) || navSections[0];
    navLinks.forEach(link => {
      const active = link.hash === '#' + current.id;
      link.classList.toggle('active', active);
      if (active) link.setAttribute('aria-current', 'location');
      else link.removeAttribute('aria-current');
    });
    $('#header').classList.toggle('scrolled', window.scrollY > 30);
    $('.back-top').classList.toggle('is-visible', window.scrollY > 600);
  };
  window.addEventListener('scroll', setActiveNav, { passive: true });
  setActiveNav();
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
    $('#dialog-product-source').href = product.url;
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
    const draft = `Halo tim PT Aman Indah Makmur,\n\nNama: ${name}${company ? `\nPerusahaan: ${company}` : ''}\nTopik: ${topic}\n\n${message}`;
    $('#whatsapp-draft').href = `https://wa.me/6282138154528?text=${encodeURIComponent(draft)}`;
    $('#message-result').hidden = false;
    $('#whatsapp-draft').focus();
  });
})();
