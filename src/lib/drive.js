// src/lib/drive.js

/**
 * Fetch images from Drive, returning:
 *  [{ thumb, full, alt }, ...]
 */
export async function fetchDriveImages(folderId, apiKey) {
    const q = `'${folderId}' in parents and mimeType contains 'image/' and trashed=false`;
    const url =
      `https://www.googleapis.com/drive/v3/files` +
      `?q=${encodeURIComponent(q)}` +
      `&fields=files(id,name,thumbnailLink)` +    // ← request thumbnails
      `&key=${encodeURIComponent(apiKey)}`;
  
    const res = await fetch(url);
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(`Drive list error: ${res.status} ${res.statusText} – ${err.error?.message}`);
    }
    const { files } = await res.json();
  
    return files
      .filter(f => f.thumbnailLink)  // skip any without a thumbnail
      .map(f => ({
        thumb: f.thumbnailLink,       // small, publicly available
        full:  `https://drive.google.com/uc?export=view&id=${f.id}`,  // full‑res view link
        alt:   f.name.replace(/\.[^/.]+$/, ''),
      }));
  }
  