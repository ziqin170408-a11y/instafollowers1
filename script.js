const daftarHarga = {
    ig: [
        { nama: "Instagram Followers High Quality", harga: 25 }, // Rp 25.000 / 1k
        { nama: "Instagram Followers Indo Aktif", harga: 55 },   // Rp 55.000 / 1k
        { nama: "Instagram Likes Real", harga: 12 }             // Rp 12.000 / 1k
    ],
    tt: [
        { nama: "TikTok Followers Real", harga: 45 },           // Rp 45.000 / 1k
        { nama: "TikTok Views Sultan", harga: 5 },              // Rp 5.000 / 1k
        { nama: "TikTok Likes Premium", harga: 20 }             // Rp 20.000 / 1k
    ],
    yt: [
        { nama: "YouTube Subscribers Permanen", harga: 450 },   // Rp 450.000 / 1k
        { nama: "YouTube Views Watch Hour", harga: 85 }         // Rp 85.000 / 1k
    ]
};

function updateLayanan() {
    const sosmed = document.getElementById('sosmed').value;
    const layananSelect = document.getElementById('layanan');
    
    layananSelect.innerHTML = '<option value="">-- Pilih Layanan Premium --</option>';
    
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
        let total = Math.floor(hargaSatuan * jumlah);
        display.innerHTML = "Rp " + total.toLocaleString('id-ID');
    }
}

function gasOrder() {
    const layananSelect = document.getElementById('layanan');
    const namaLayanan = layananSelect.options[layananSelect.selectedIndex]?.getAttribute('data-nama');
    const target = document.getElementById('target').value;
    const jumlah = document.getElementById('jumlah').value;
    const total = document.getElementById('totalDisplay').innerText;

    if (!namaLayanan || !target || jumlah < 100) {
        alert("Mohon isi data dengan lengkap!");
        return;
    }

    const waAdmin = "6287717278361"; 
    const pesan = `Halo Admin, saya mau order layanan PREMIUM:%0A%0A` +
                  `*Layanan:* ${namaLayanan}%0A` +
                  `*Target:* ${target}%0A` +
                  `*Jumlah:* ${jumlah} pcs%0A` +
                  `*Total:* ${total}%0A%0A` +
                  `Saya sudah setuju dengan harga premium, mohon segera diproses!`;
    
    window.open(`https://wa.me/${waAdmin}?text=${pesan}`, '_blank');
}
