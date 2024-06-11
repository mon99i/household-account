export function toShow(node) {
  node.className = node.className.replace("v-none", "v-show");
}

export function toHidden(node) {
  node.className = node.className.replace("v-show", "v-none");
}

export function validatePrice(currentFunds, currentAmount) {
  return currentFunds >= currentAmount;
}

export function validateRequired({ category, description, price }) {

  return (
    Boolean(category) && Boolean(description) && Boolean(price) && price > 0
  );
}
