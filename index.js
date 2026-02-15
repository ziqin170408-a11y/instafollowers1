const daftarHarga = {
    ig: [
        { nama: "Followers Pasif", harga: 8 }, // Rp 8.000 / 1k
        { nama: "Followers Indo Aktif", harga: 25 },
        { nama: "Likes Instagram", harga: 3 }
    ],
    tt: [
        { nama: "TikTok Followers", harga: 15 },
        { nama: "TikTok Views", harga: 0.2 }, // Rp 200 / 1k
        { nama: "TikTok Likes", harga: 10 }
    ],
    yt: [
        { nama: "YouTube Subscribers", harga: 200 },
        { nama: "YouTube Views", harga: 20 }
    ]
};

function updateLayanan() {
    const sosmed = document.getElementById('sosmed').value;
    const layananSelect = document.getElementById('layanan');
    
    layananSelect.innerHTML = '<option value="">-- Pilih Layanan --</option>';
    
    if (sosmed) {
        layananSelect.disabled = false;
        daftarHarga[sosmed].forEach(item => {
            let opt = document.createElement('option');
            opt.value = item.harga;
            opt.innerHTML = `${item.nama} (Rp ${item.harga}/pcs)`;
            opt.setAttribute('data-nama', item.nama);
            layananSelect.appendChild(opt);
        });
    } else {
        layananSelect.disabled = true;
    }
}

function hitungHarga() {
    const hargaSatuan = document.getElementById('layanan').value;
    const jumlah = document.getElementById('jumlah').value;
    const display = document.getElementById('totalDisplay');

    if (hargaSatuan && jumlah) {
        let total = hargaSatuan * jumlah;
        display.innerHTML = "Rp " + total.toLocaleString('id-ID');
    }
}

function gasOrder() {
    const layananText = document.getElementById('layanan');
    const namaLayanan = layananText.options[layananText.selectedIndex].getAttribute('data-nama');
    const target = document.getElementById('target').value;
    const jumlah = document.getElementById('jumlah').value;
    const total = document.getElementById('totalDisplay').innerText;

    if (!namaLayanan || !target || jumlah < 100) {
        alert("Isi data yang bener dulu ya!");
        return;
    }

    const waAdmin = "628123456789"; // GANTI DENGAN NOMOR WA KAMU
    const pesan = `Halo Admin, saya mau order:%0A- Layanan: ${namaLayanan}%0A- Target: ${target}%0A- Jumlah: ${jumlah}%0A- Total: ${total}`;
    
    window.open(`https://wa.me/${waAdmin}?text=${pesan}`, '_blank');
}
