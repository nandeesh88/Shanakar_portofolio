export const isWebGLSupported = () => {
  try {
    const canvas = document.createElement('canvas');
    return !!(window.WebGLRenderingContext &&
      canvas.getContext('webgl'));
  } catch (e) {
    return false;
  }
};

export const isMobile = () => {
  return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
};