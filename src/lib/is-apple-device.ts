export default function isAppleDevice() {
  const isMacLike = /(Mac|iPhone|iPod|iPad)/i.test(navigator.platform);
  const isIOS = /(iPhone|iPod|iPad)/i.test(navigator.platform);
  return isMacLike || isIOS;
}
