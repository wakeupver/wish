# 🚀 Deploy ke GitHub Pages

## Cara Deploy

### 1. Push ke GitHub

```bash
# Buat repo baru di GitHub, lalu:
git init
git add .
git commit -m "Initial commit - GitHub Pages ready"
git branch -M main
git remote add origin https://github.com/USERNAME/REPO_NAME.git
git push -u origin main
```

### 2. Aktifkan GitHub Pages

1. Buka repo di GitHub → **Settings** → **Pages**
2. Pada **Source**, pilih **GitHub Actions**
3. Simpan

### 3. Tunggu GitHub Actions

- Actions akan otomatis berjalan saat push ke `main`/`master`
- Cek progress di tab **Actions**
- Setelah selesai, site live di:
  - **Project page**: `https://USERNAME.github.io/REPO_NAME`
  - **User page** (jika repo bernama `USERNAME.github.io`): `https://USERNAME.github.io`

## Konfigurasi Base Path

Workflow otomatis mendeteksi:
- Repo `USERNAME.github.io` → base path kosong (`/`)
- Repo lainnya → base path `/REPO_NAME`

## Environment Variables (Opsional)

Tambahkan di **Settings → Secrets and variables → Actions → Variables**:

| Variable | Contoh | Keterangan |
|---|---|---|
| `VITE_APP_TITLE` | `Genshin Wish Simulator` | Judul halaman |
| `VITE_DESCRIPTION` | `Realistic Gacha Simulator` | Meta description |

