const STATES_ANIMATIONS = ["enterActive", "enterFrom", "enterTo", "leaveActive", "leaveFrom", "leaveTo"];

import camelToKebab from "./camelToKebab";
import { toggleClass } from "./dom";
import is from "./is";
import { getElementStateClass } from "./utils";
function updateStateClasses({ elem, states, elemName, STATES }) {
   const c = ["", ""];
   let transitionName = elem.dataset.transitionName || this.opts.transitionName || "v";
   if (is.object(transitionName)) {
      transitionName = transitionName[elemName];
   }
   STATES.forEach((state) => {
      c[states.states.includes(state) | 0] += getElementStateClass(this.constructor.NAME, elemName, state);
   });
   STATES_ANIMATIONS.forEach((state) => {
      c[states.animations.includes(state) | 0] += `${transitionName ? `${transitionName}-${camelToKebab(state)}` : ""} ${elem.dataset[state] ?? ""} `;
   });
   c.forEach((classes, s) => toggleClass(elem, classes, s));
}
export default updateStateClasses;
