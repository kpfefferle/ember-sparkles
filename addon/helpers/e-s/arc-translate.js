import Ember from 'ember';

export function emberSparklesArcTranslate([ centroid ], { height, width }) {
  return function(d) {
    let [x, y] = centroid(d)
    return `translate(${x + width}, ${y + height})`;
  };
}

export default Ember.Helper.helper(emberSparklesArcTranslate);
