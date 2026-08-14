import { createRoot } from 'react-dom/client';
import Silk from './components/Silk/Silk';
import './silk-background.css';

if (!document.querySelector('link[data-silk-background-styles]')) {
  const styles = document.createElement('link');
  styles.rel = 'stylesheet';
  styles.href = '/bluecolorsite/assets/silk-background.css';
  styles.dataset.silkBackgroundStyles = '';
  document.head.appendChild(styles);
}

const addSilkBackground = (section, variant, props) => {
  if (!section || section.querySelector(':scope > .silk-background')) return;

  section.classList.add('silk-section', `silk-section--${variant}`);
  const mount = document.createElement('div');
  mount.className = 'silk-background';
  mount.setAttribute('aria-hidden', 'true');
  section.prepend(mount);
  createRoot(mount).render(<Silk {...props} />);
};

const hero = document.querySelector('[data-v-145a2b37].wrapper.flex.flex-col');
const stage = document.querySelector('section.terminal-background');

addSilkBackground(hero, 'hero', {
  speed: 5,
  scale: 1,
  color: '#9a8cc5',
  noiseIntensity: 1.2,
  rotation: 0
});

addSilkBackground(stage, 'stage', {
  speed: 5,
  scale: 1,
  color: '#5f10e8',
  noiseIntensity: 1.5,
  rotation: 0
});
