/* ============================================================
   admin_script.js — Lifa Flora Admin (versi lengkap)
   Developed by Alifah Salma Fauziah
   ============================================================ */

const STORAGE_PRODUCTS_KEY  = "lifaFloraProducts";
const STORAGE_ORDERS_KEY    = "lifaFloraOrders";
const STORAGE_ALL_ORDERS    = "lifaFloraAllOrders";
const ADMIN_SESSION_KEY     = "lifaFloraAdminSession";
const ADMIN_PASSWORD        = "admin123";

const defaultProducts = [
  { id:1, name:"Rose Elegance", price:185000, emoji:"🌹", image:"images/rose.jpg", desc:"Buket mawar merah premium, cocok untuk anniversary atau ungkapan cinta.", category:"anniversary", hot:true, stock: 8, sold: 1200 },
  { id:2, name:"Cherry Blossom Dream", price:165000, emoji:"🌸", image:"images/chery blosoom.jpeg", desc:"Buket bunga sakura pastel lembut, tampilan aesthetic dan romantis.", category:"ulang tahun", hot:false, stock: 10, sold: 856 },
  { id:3, name:"Sunflower Glow", price:145000, emoji:"🌻", image:"images/sunflower glow.jpeg", desc:"Buket bunga matahari ceria, cocok untuk teman wisuda atau hadiah.", category:"wisuda", hot:true, stock: 12, sold: 2100 },
  { id:4, name:"Pastel Tulip", price:175000, emoji:"🌷", image:"images/pastel tulip.jpeg", desc:"Buket tulip warna pastel campuran, elegan dan modern.", category:"anniversary", hot:false, stock: 9, sold: 634 },
  { id:5, name:"Mix Garden", price:210000, emoji:"💐", image:"images/mix garden.jpeg", desc:"Buket campur berbagai bunga segar pilihan, tampil mewah dan penuh warna.", category:"ulang tahun", hot:true, stock: 6, sold: 1500 },
  { id:6, name:"Wisuda Prestasi", price:155000, emoji:"🎓", image:"images/wisuda.jpeg", desc:"Spesial untuk wisudawan, dikemas dengan pita emas dan ucapan selamat.", category:"wisuda", hot:false, stock: 11, sold: 980 },
  { id:7, name:"Lavender Kiss", price:195000, emoji:"💜", image:"images/lavender kiss.jpeg", desc:"Buket lavender ungu memikat, aromaterapi alami dan visual cantik.", category:"custom", hot:false, stock: 7, sold: 412 },
  { id:8, name:"White Lily Pure", price:225000, emoji:"🤍", image:"images/white lili.jpeg", desc:"Buket lily putih bersih dan mewah, cocok untuk acara formal dan pernikahan.", category:"custom", hot:true, stock: 5, sold: 1780 },
  { id:9, name:"Blue Serenity Bouquet 💙", price:215000, emoji:"💙", image:"images/Blue_Serenity_Bouquest.jpeg", desc:"Perpaduan bunga segar bernuansa putih dan biru yang elegan, melambangkan ketulusan, kesetiaan, dan cinta yang abadi. Cocok sebagai hadiah anniversary yang berkesan.", category:"anniversary", hot:true, stock: 7, sold: 540 },
  { id:10, name:"Sweet Romance", price:190000, emoji:"💕", image:"images/Sweet_Romance_.jpeg", desc:"Buket bunga segar dengan dominasi mawar pink dan bunga putih yang manis. Pilihan sempurna untuk mengungkapkan cinta dan merayakan momen anniversary bersama orang tersayang.", category:"anniversary", hot:false, stock: 9, sold: 765 },
  { id:11, name:"Pink Harmoni", price:180000, emoji:"🌸", image:"images/Pink_Harmony.jpeg", desc:"Rangkaian bunga segar bernuansa pastel yang lembut dan anggun. Hadiah istimewa untuk merayakan hari jadi dengan penuh cinta dan kebahagiaan.", category:"anniversary", hot:false, stock: 8, sold: 392 },
  { id:12, name:"Elegant Matcha Edition", price:205000, emoji:"🍵", image:"images/Elegant_Matcha_Edition_.jpeg", desc:"Hadirkan kesan elegan dan menenangkan dengan kombinasi mawar putih yang melambangkan kemurnian dan sentuhan sage green yang segar. Buket ini untuk memberikan momen tak terlupakan di hari spesial pada orang tersayang.", category:"ulang tahun", hot:false, stock: 6, sold: 318 },
  { id:13, name:"Sapphire Wishes", price:235000, emoji:"💎", image:"images/Sapphire_Wishes.jpeg", desc:"Buket eksklusif ini memadukan bunga tulip biru yang unik (simbol ketenangan dan kedamaian) dengan mawar putih serta eustoma yang melambangkan ketulusan. Rangkaian ini dipercantik dengan sentuhan bunga pendukung berwarna biru muda dan putih, menciptakan gradasi warna yang sangat memukau dan modern.", category:"ulang tahun", hot:true, stock: 5, sold: 689 },
  { id:14, name:"Sunshine Birthday Blooms", price:198000, emoji:"☀️", image:"images/Sunshine_Birthday_Blooms.jpeg", desc:"Rayakan momen spesial dengan kehangatan 'Golden Sunset Bliss'. Buket ini memadukan mawar premium, ranunculus, dan aksen bunga kering yang dirangkai secara estetis dengan wrapping bernuansa earthy yang elegan. Pilihan sempurna untuk memberikan kejutan ulang tahun yang penuh keceriaan dan kesan tak terlupakan.", category:"ulang tahun", hot:false, stock: 8, sold: 451 },
  { id:15, name:"Chocolate Lily", price:220000, emoji:"🍫", image:"images/Chocolate_Lily.jpeg", desc:"Hadirkan kesan mewah dan hangat dengan buket perpaduan bunga Lily pink yang anggun serta bunga nuansa cokelat yang elegan. Dirangkai secara profesional dengan kertas wrapping premium berwarna cokelat gelap (dark brown) untuk menonjolkan keindahan kelopak bunga.", category:"custom", hot:false, stock: 7, sold: 276 },
  { id:16, name:"Summer Sunshine Garden", price:260000, emoji:"🌻", image:"images/Summer_Sunshine_Garden.jpeg", desc:"Buket megah berukuran besar yang membawa keindahan kebun bunga langsung ke tangan Anda. Menampilkan pusat perhatian bunga Matahari yang cerah, dikelilingi oleh kombinasi cantik bunga Gerbera, Mawar multi-warna, Lili putih, Carnation, dan Daisy kecil. Setiap jenis bunga dibungkus rapi satu per satu secara terpisah menggunakan kertas putih premium (cone wrapping style) untuk menciptakan visual yang penuh, berdimensi, dan sangat mewah.", category:"custom", hot:true, stock: 4, sold: 905 },
  { id:17, name:"Midnight Dusk Premium", price:245000, emoji:"🌑", image:"images/Midnight_Dusk_Premium.jpeg", desc:"Buket bunga modern bernuansa cool-tone yang misterius dan mewah. Memadukan mawar dusty pink, mawar abu-abu, dan anggrek kelabu yang unik, dibalut kertas wrapping hitam pekat premium serta aksen kraft honeycomb.", category:"custom", hot:false, stock: 6, sold: 357 },
  { id:18, name:"Sweet Bloom Wisuda", price:175000, emoji:"🎀", image:"images/Sweet_Bloom_Wisuda.jpeg", desc:"Rayakan momen kelulusan dengan buket bunga segar bernuansa pink dan putih, dilengkapi boneka bunga wisuda yang menggemaskan.", category:"wisuda", hot:true, stock: 10, sold: 612 }
];

let products = [];
let allOrders = [];

/* ---------- helpers ---------- */
function formatPrice(n) { return "Rp " + Number(n).toLocaleString("id-ID"); }

function loadData() {
  const p = localStorage.getItem(STORAGE_PRODUCTS_KEY);
  const o = localStorage.getItem(STORAGE_ALL_ORDERS);
  products  = p ? JSON.parse(p) : [...defaultProducts];
  allOrders = o ? JSON.parse(o) : [];
  if (!Array.isArray(products))  products  = [...defaultProducts];
  if (!Array.isArray(allOrders)) allOrders = [];
}

function saveProducts() {
  localStorage.setItem(STORAGE_PRODUCTS_KEY, JSON.stringify(products));
}

function saveAllOrders() {
  localStorage.setItem(STORAGE_ALL_ORDERS, JSON.stringify(allOrders));
}

let _toastT;
function showToast(msg) {
  const el = document.getElementById("toast");
  if (!el) return;
  el.textContent = msg;
  el.classList.add("show");
  clearTimeout(_toastT);
  _toastT = setTimeout(() => el.classList.remove("show"), 2500);
}

/* ---------- auth ---------- */
function isLoggedIn() { return sessionStorage.getItem(ADMIN_SESSION_KEY) === "true"; }

function doLogin(e) {
  e && e.preventDefault();
  const pwd = document.getElementById("adminPwd")?.value.trim();
  if (pwd !== ADMIN_PASSWORD) {
    document.getElementById("adminLoginMsg").textContent = "❌ Kata sandi salah.";
    return;
  }
  sessionStorage.setItem(ADMIN_SESSION_KEY, "true");
  window.location.href = "admin_dashboard.html";
}

function doLogout() {
  sessionStorage.removeItem(ADMIN_SESSION_KEY);
  window.location.href = "admin_login.html";
}

function requireLogin() {
  if (!isLoggedIn()) window.location.href = "admin_login.html";
}

/* ============================================================
   DASHBOARD
   ============================================================ */
function initDashboard() {
  requireLogin();
  loadData();

  const totalProduk   = products.length;
  const totalPesanan  = allOrders.length;
  const totalRevenue  = allOrders.reduce((s, o) => s + (o.total || 0), 0);
  const stokRendah    = products.filter(p => Number(p.stock || 0) <= 3).length;

  document.getElementById("statProduk")  && (document.getElementById("statProduk").textContent  = totalProduk);
  document.getElementById("statPesanan") && (document.getElementById("statPesanan").textContent = totalPesanan);
  document.getElementById("statRevenue") && (document.getElementById("statRevenue").textContent = formatPrice(totalRevenue));
  document.getElementById("statStok")    && (document.getElementById("statStok").textContent    = stokRendah + " produk");

  // Pesanan terbaru (5)
  const recentEl = document.getElementById("dashRecentOrders");
  if (recentEl) {
    const recent = allOrders.slice(0, 5);
    if (!recent.length) {
      recentEl.innerHTML = "<tr><td colspan='5' class='ad-empty'>Belum ada pesanan.</td></tr>";
    } else {
      recentEl.innerHTML = recent.map(o => {
        const statusColor = o.status === "Selesai" ? "var(--ad-green)" : o.status === "Dikirim" ? "#8B5CF6" : "var(--ad-pink)";
        return `<tr>
          <td><strong>#${o.orderNum}</strong></td>
          <td>${o.nama || "-"}</td>
          <td>${formatPrice(o.total)}</td>
          <td><span class="ad-badge" style="background:${statusColor}20;color:${statusColor}">${o.status || "Diproses"}</span></td>
          <td>${new Date(o.createdAt).toLocaleDateString("id-ID")}</td>
        </tr>`;
      }).join("");
    }
  }

  // Stok rendah
  const stokEl = document.getElementById("dashStokRendah");
  if (stokEl) {
    const low = products.filter(p => Number(p.stock || 0) <= 5);
    if (!low.length) {
      stokEl.innerHTML = "<tr><td colspan='3' class='ad-empty'>Semua stok aman ✅</td></tr>";
    } else {
      stokEl.innerHTML = low.map(p => `<tr>
        <td>${p.emoji} ${p.name}</td>
        <td><strong style="color:${Number(p.stock)<=2?'#E8758F':'inherit'}">${p.stock}</strong></td>
        <td><a href="admin_produk.html" class="ad-link">Kelola →</a></td>
      </tr>`).join("");
    }
  }
}

/* ============================================================
   PRODUK
   ============================================================ */
function initProduk() {
  requireLogin();
  loadData();
  renderProdukTable();
}

function renderProdukTable() {
  const tbody = document.getElementById("produkTableBody");
  if (!tbody) return;
  if (!products.length) {
    tbody.innerHTML = "<tr><td colspan='6' class='ad-empty'>Belum ada produk.</td></tr>";
    return;
  }
  tbody.innerHTML = products.map(p => `
    <tr>
      <td>
        <div style="display:flex;align-items:center;gap:0.6rem;">
          ${(p.foto || p.image)
            ? `<img src="${p.foto || p.image}" style="width:40px;height:40px;object-fit:cover;border-radius:6px;border:1px solid var(--ad-border);" />`
            : `<div style="width:40px;height:40px;background:var(--ad-pink-lt);border-radius:6px;display:flex;align-items:center;justify-content:center;font-size:1.3rem;">${p.emoji}</div>`}
          <span>${p.name}</span>
        </div>
      </td>
      <td>${p.category}</td>
      <td>${formatPrice(p.price)}</td>
      <td>
        <div class="ad-stok-ctrl">
          <button class="ad-stok-btn" onclick="adjustStock(${p.id}, -1)">−</button>
          <span class="ad-stok-num" style="color:${Number(p.stock)<=3?'#E8758F':'inherit'}">${p.stock}</span>
          <button class="ad-stok-btn" onclick="adjustStock(${p.id}, 1)">+</button>
        </div>
      </td>
      <td><span class="ad-badge ${p.hot ? 'hot' : 'normal'}">${p.hot ? "🔥 Hot" : "Biasa"}</span></td>
      <td class="ad-actions">
        <a href="admin_edit_produk.html?id=${p.id}" class="ad-btn-edit">Edit</a>
        <button class="ad-btn-del" onclick="deleteProduk(${p.id})">Hapus</button>
      </td>
    </tr>`).join("");
}

function adjustStock(id, delta) {
  const p = products.find(x => x.id === id);
  if (!p) return;
  p.stock = Math.max(0, Number(p.stock || 0) + delta);
  saveProducts();
  renderProdukTable();
  showToast("✅ Stok diperbarui.");
}

function deleteProduk(id) {
  if (!confirm("Hapus produk ini?")) return;
  products = products.filter(p => p.id !== id);
  saveProducts();
  renderProdukTable();
  showToast("🗑️ Produk dihapus.");
}

/* ============================================================
   TAMBAH PRODUK
   ============================================================ */
function initTambahProduk() {
  requireLogin();
  loadData();
  const form = document.getElementById("formTambahProduk");
  if (!form) return;

  // Gunakan onclick di button, bukan form submit, agar tidak ada konflik
  const submitBtn = form.querySelector("button[type='submit']");
  if (submitBtn) {
    submitBtn.type = "button"; // ganti ke button biasa
    submitBtn.addEventListener("click", doTambahProduk);
  }
  form.addEventListener("submit", e => { e.preventDefault(); doTambahProduk(); });
}

function doTambahProduk() {
  loadData(); // reload dulu agar data sinkron
  const nama     = document.getElementById("tpNama")?.value.trim();
  const hargaRaw = document.getElementById("tpHarga")?.value;
  const stokRaw  = document.getElementById("tpStok")?.value;
  const kategori = document.getElementById("tpKategori")?.value;
  const emoji    = document.getElementById("tpEmoji")?.value.trim() || "💐";
  const desc     = document.getElementById("tpDesc")?.value.trim() || "";
  const hot      = document.getElementById("tpHot")?.checked || false;

  const harga = Number(hargaRaw);
  const stok  = Number(stokRaw);

  if (!nama)     { showToast("⚠️ Nama produk wajib diisi!");  return; }
  if (!harga)    { showToast("⚠️ Harga produk wajib diisi!"); return; }
  if (!stok && stok !== 0) { showToast("⚠️ Stok wajib diisi!"); return; }
  if (!kategori) { showToast("⚠️ Kategori wajib dipilih!");   return; }

  // Simpan dengan foto (base64)
  getFotoBase64("tpFoto", function(fotoData) {
    const newId = products.length ? Math.max(...products.map(p => Number(p.id))) + 1 : 1;
    const newProduct = { id: newId, name: nama, price: harga, stock: stok, category: kategori, emoji, desc, hot, foto: fotoData || null };
    products.push(newProduct);

    try {
      saveProducts();
      showToast("✅ Produk berhasil ditambahkan!");
      setTimeout(() => { window.location.href = "admin_produk.html"; }, 1000);
    } catch(err) {
      showToast("❌ Gagal menyimpan: " + err.message);
    }
  });
}

/* ============================================================
   EDIT PRODUK
   ============================================================ */
function initEditProduk() {
  requireLogin();
  loadData();
  const params = new URLSearchParams(window.location.search);
  const id     = Number(params.get("id"));
  const p      = products.find(x => x.id === id);
  if (!p) { showToast("❌ Produk tidak ditemukan."); return; }

  document.getElementById("epNama").value     = p.name;
  document.getElementById("epHarga").value    = p.price;
  document.getElementById("epStok").value     = p.stock;
  document.getElementById("epKategori").value = p.category;
  document.getElementById("epEmoji").value    = p.emoji;
  document.getElementById("epDesc").value     = p.desc || "";
  document.getElementById("epHot").checked    = p.hot || false;

  const form = document.getElementById("formEditProduk");
  if (!form) return;

  // Tampilkan foto existing jika ada
  if (p.foto || p.image) {
    const currentWrap = document.getElementById("epFotoCurrent");
    const currentImg  = document.getElementById("epFotoCurrentImg");
    if (currentWrap) currentWrap.style.display = "block";
    if (currentImg)  currentImg.src = p.foto || p.image;
  }

  function doEdit() {
    const newNama = document.getElementById("epNama")?.value.trim();
    if (!newNama) { showToast("⚠️ Nama produk wajib diisi!"); return; }
    p.name     = newNama;
    p.price    = Number(document.getElementById("epHarga")?.value) || p.price;
    p.stock    = Number(document.getElementById("epStok")?.value ?? p.stock);
    p.category = document.getElementById("epKategori")?.value || p.category;
    p.emoji    = document.getElementById("epEmoji")?.value.trim() || p.emoji || "💐";
    p.desc     = document.getElementById("epDesc")?.value.trim() || "";
    p.hot      = document.getElementById("epHot")?.checked || false;

    // Simpan foto baru jika ada, pertahankan lama jika tidak diganti
    getFotoBase64("epFoto", function(fotoData) {
      if (fotoData) p.foto = fotoData;

      const idx = products.findIndex(x => x.id === p.id);
      if (idx > -1) products[idx] = p;

      try {
        saveProducts();
        showToast("✅ Produk berhasil diperbarui!");
        setTimeout(() => { window.location.href = "admin_produk.html"; }, 1000);
      } catch(err) {
        showToast("❌ Gagal menyimpan: " + err.message);
      }
    });
  }

  const submitBtn = form.querySelector("button[type='submit']");
  if (submitBtn) { submitBtn.type = "button"; submitBtn.addEventListener("click", doEdit); }
  form.addEventListener("submit", e => { e.preventDefault(); doEdit(); });
}

/* ============================================================
   PESANAN
   ============================================================ */
function initPesanan() {
  requireLogin();
  loadData();
  renderPesananTable();
}

function renderPesananTable(filter = "semua") {
  const tbody = document.getElementById("pesananTableBody");
  if (!tbody) return;

  let list = [...allOrders];
  if (filter !== "semua") list = list.filter(o => (o.status || "Diproses") === filter);

  if (!list.length) {
    tbody.innerHTML = "<tr><td colspan='6' class='ad-empty'>Belum ada pesanan.</td></tr>";
    return;
  }

  const statusColor = s => s === "Selesai" ? "var(--ad-green)" : s === "Dikirim" ? "#8B5CF6" : "var(--ad-pink)";
  const statusNext  = s => s === "Diproses" ? "Dikirim" : s === "Dikirim" ? "Selesai" : null;

  tbody.innerHTML = list.map(o => {
    const status = o.status || "Diproses";
    const next   = statusNext(status);
    return `<tr>
      <td><strong>#${o.orderNum}</strong></td>
      <td>${o.nama || "-"}<br/><small style="color:var(--ad-muted)">${o.phone || ""}</small></td>
      <td>${(o.items||[]).map(i=>`${i.emoji||"💐"} ${i.name} x${i.qty}`).join("<br/>")}</td>
      <td>${formatPrice(o.total)}</td>
      <td><span class="ad-badge" style="background:${statusColor(status)}20;color:${statusColor(status)}">${status}</span></td>
      <td>${next
        ? `<button class="ad-btn-edit" onclick="updateOrderStatus('${o.orderNum}','${next}')">→ ${next}</button>`
        : `<span style="color:var(--ad-green);font-size:0.82rem">✓ Selesai</span>`}
      </td>
    </tr>`;
  }).join("");
}

function updateOrderStatus(orderNum, newStatus) {
  const idx = allOrders.findIndex(o => o.orderNum === orderNum);
  if (idx === -1) return;
  allOrders[idx].status = newStatus;
  saveAllOrders();
  const activeFilter = document.querySelector(".ad-filter-btn.active")?.dataset.filter || "semua";
  renderPesananTable(activeFilter);
  showToast("✅ Status pesanan diperbarui.");
}


/* ============================================================
   FOTO PRODUK — Upload & Preview
   ============================================================ */

function previewFoto(inputId, previewWrapId, areaId) {
  const input   = document.getElementById(inputId);
  const preview = document.getElementById(previewWrapId);
  const area    = document.getElementById(areaId);
  if (!input?.files?.length) return;

  const file = input.files[0];
  if (file.size > 2 * 1024 * 1024) {
    showToast("⚠️ Ukuran foto maksimal 2MB!");
    input.value = "";
    return;
  }

  const reader = new FileReader();
  reader.onload = e => {
    const imgId = previewWrapId === "tpFotoPreview" ? "tpFotoImg" : "epFotoImg";
    const imgEl = document.getElementById(imgId);
    if (imgEl) imgEl.src = e.target.result;
    if (preview) preview.style.display = "block";
    if (area)    area.style.display    = "none";
  };
  reader.readAsDataURL(file);
}

function removeFoto(inputId, previewWrapId, areaId) {
  const input   = document.getElementById(inputId);
  const preview = document.getElementById(previewWrapId);
  const area    = document.getElementById(areaId);
  if (input)   input.value = "";
  if (preview) preview.style.display = "none";
  if (area)    area.style.display    = "block";
}

function getFotoBase64(inputId, callback) {
  const input = document.getElementById(inputId);
  if (!input?.files?.length) { callback(null); return; }
  const reader = new FileReader();
  reader.onload = e => callback(e.target.result);
  reader.readAsDataURL(input.files[0]);
}
