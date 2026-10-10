// Link unduhan langsung ke aset rilis GitHub. Satu-satunya yang berubah antar rilis adalah versi,
// yang diambil dari site.version (tanpa awalan "v"), jadi cukup ubah versi di data/site.
import { site } from "./site";

const repo = "https://github.com/klawcodes/saya";
const version = String(site.version).replace(/^v/i, "");
const base = `${repo}/releases/download/v${version}`;

// Nama berkas harus sama persis dengan yang diunggah ke rilis GitHub.
export const downloads = {
  windows: `${base}/Saya-Setup-${version}.exe`,
  linux: {
    appImage: `${base}/Saya-${version}.AppImage`,
    deb: `${base}/saya_${version}_amd64.deb`,
    tar: `${base}/saya-${version}.tar.gz`,
  },
};
