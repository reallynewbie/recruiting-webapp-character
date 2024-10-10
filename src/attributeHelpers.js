export const increaseAttribute = (attribute, setAttribute) => {
  setAttribute(attribute + 1);
};

export const decreaseAttribute = (attribute, setAttribute) => {
  if (attribute <= 0) {
    throw new Error("Attribute cannot go below zero");
  }
  setAttribute(attribute - 1);
};
