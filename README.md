# 🚀 Orbiter Animation

Frontend teknolojileri için 3D orbit animasyonu. HTML, CSS ve JavaScript ile geliştirilmiş interaktif skills showcase.

## ✨ Özellikler

- **3 Katmanlı Orbit Sistemi**: İç, orta ve dış yörüngeler
- **Responsive Tasarım**: Mobil ve masaüstü uyumlu
- **Animasyon Kontrolleri**: Space tuşu ile duraklat/devam ettir
- **Modern CSS**: Transform ve keyframe animasyonları

## 🎮 Kontroller

- **Space Tuşu**: Animasyonu duraklat/devam ettir
- **Merkez İkon Tıklama**: Animasyonu duraklat/devam ettir

## 🛠️ Teknolojiler

### Orbit
- **İç Yörünge**: HTML5, CSS3, Sass
- **Orta Yörünge**: JavaScript, React, Next.js, Bootstrap
- **Dış Yörünge**: Tailwind CSS, Shadcn

## 🚀 Kullanım

1. `index.html` dosyasını bir web tarayıcısında açın
2. Animasyon otomatik olarak başlayacaktır
3. Space tuşu ile animasyonu kontrol edebilirsiniz

## 📱 Responsive

- **Masaüstü**: 350x350px orbit boyutu
- **Mobil**: 280x280px orbit boyutu
- **Otomatik Boyutlandırma**: Ekran boyutuna göre uyarlanır

## 🎨 Animasyonlar

```css
@keyframes spin-right {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
}

@keyframes counter-rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(-360deg); }
}
```

- **Orbit Dönüşü**: 30 saniye
- **Merkez Pulse**: 3 saniye

## 📁 Dosya Yapısı

```
orbiter/
├── index.html      # Ana HTML dosyası
├── style.css       # CSS animasyon stilleri
├── script.js       # JavaScript fonksiyonları
└── README.md       # Bu dosya
```

## 🎯 Özelleştirme

### Yeni Teknoloji Ekleme
1. HTML'de yeni icon elementi ekleyin
2. CSS'te pozisyon ve renk tanımlayın
3. JavaScript'te hover efektlerini ayarlayın

### Animasyon Hızını Değiştirme
```css
/* Daha hızlı animasyon için */
animation: spin-right 20s linear infinite;

/* Daha yavaş animasyon için */
animation: spin-right 40s linear infinite;
```

## 🌟 Demo

Projeyi canlı olarak görmek için `index.html` dosyasını tarayıcınızda açın.

---

**Geliştirici**: Bahattin Tok  
**GitHub**: [@BT-maker](https://github.com/BT-maker)
# Orbiter-animation
