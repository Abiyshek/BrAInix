import * as THREE from 'three';

/**
 * Builds a procedural equirectangular environment so the glass materials have
 * something warm to refract. Without this, transmissive meshes on a white page
 * read as flat grey blobs.
 *
 * Returns { texture, paint(colors), dispose() } — `paint` re-tints the map in
 * place when the site mode changes.
 */
export function createStudioEnv(renderer) {
  const canvas = document.createElement('canvas');
  canvas.width = 512;
  canvas.height = 256;
  const ctx = canvas.getContext('2d');

  const texture = new THREE.CanvasTexture(canvas);
  texture.mapping = THREE.EquirectangularReflectionMapping;
  texture.colorSpace = THREE.SRGBColorSpace;

  const blob = (x, y, r, color, alpha) => {
    const g = ctx.createRadialGradient(x, y, 0, x, y, r);
    g.addColorStop(0, `rgba(${color}, ${alpha})`);
    g.addColorStop(1, `rgba(${color}, 0)`);
    ctx.fillStyle = g;
    ctx.fillRect(x - r, y - r, r * 2, r * 2);
  };

  const paint = ({ warm, cool }) => {
    const base = ctx.createLinearGradient(0, 0, 0, 256);
    base.addColorStop(0, '#ffffff');
    base.addColorStop(0.5, '#f1ecff');
    base.addColorStop(1, '#d9cff5');
    ctx.fillStyle = base;
    ctx.fillRect(0, 0, 512, 256);

    blob(120, 60, 120, warm, 0.95); // key highlight
    blob(390, 150, 150, cool, 0.7); // brand bounce
    blob(260, 235, 110, '255, 255, 255', 0.8); // floor bounce
    texture.needsUpdate = true;
  };

  paint({ warm: '255, 255, 255', cool: '167, 139, 250' });

  // renderer is accepted for API symmetry with PMREM-based setups
  void renderer;

  return { texture, paint, dispose: () => texture.dispose() };
}

export const ENV_TONES = {
  services: { warm: '255, 255, 255', cool: '139, 92, 246' },
  edu: { warm: '255, 245, 255', cool: '192, 38, 211' },
};
