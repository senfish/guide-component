import {WeakGuideComponent, WeakGuideItem} from './weak-guide-component';
import {StrongGuideComponent, StrongGuideItem} from './strong-guide-component';
const WeakGuide = WeakGuideComponent;
WeakGuide.Item = WeakGuideItem;
const StrongGuide = StrongGuideComponent;
StrongGuide.Item = StrongGuideItem;

export default {
  WeakGuide,
  StrongGuide
}