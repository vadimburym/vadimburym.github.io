const imagePath = /^\/assets\/images\/[a-zA-Z0-9_/-]+\.(png|jpe?g|svg|webp|gif|avif)$/i;
const mediaPath = /^\/assets\/(images|videos)\/[a-zA-Z0-9_/-]+\.(png|jpe?g|svg|webp|gif|avif|mp4|webm)$/i;
const videoPath = /^\/assets\/videos\/[a-zA-Z0-9_/-]+\.(mp4|webm)$/i;

export function selectMediaSource(item, compact) {
  return compact && item.mobileSrc ? item.mobileSrc : item.src;
}

export function validGalleryItem(item) {
  return Boolean(item && typeof item.alt === 'string' && item.alt.trim()
    && (item.src === null || (typeof item.src === 'string' && mediaPath.test(item.src)))
    && (item.poster == null || (typeof item.poster === 'string' && imagePath.test(item.poster)))
    && (item.mobileSrc == null || (typeof item.mobileSrc === 'string' && videoPath.test(item.mobileSrc) && videoPath.test(item.src))));
}
