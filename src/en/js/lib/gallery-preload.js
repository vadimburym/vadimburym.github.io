// Keep a single background request in flight; failed images do not block later slides.
export async function preloadGalleryImages(items, load, isCurrent = () => true) {
  for (const item of items) {
    if (!isCurrent()) return;
    if (!item.src || /\.(mp4|webm)$/i.test(item.src)) continue;
    try { await load(item); } catch { /* The visible slide offers its own retry control. */ }
  }
}
