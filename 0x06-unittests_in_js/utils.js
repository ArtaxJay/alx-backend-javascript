const Utils = {
  calculateNumber(type, a, b) {
    const roundedA = Math.round(a);
    const roundedB = Math.round(b);
    let resultHolder = 0;

    switch (type) {
      case 'SUM':
        resultHolder = roundedA + roundedB;
        break;
      case 'SUBTRACT':
        resultHolder = roundedA - roundedB;
        break;
      case 'DIVIDE':
        if (roundedB === 0) {
          resultHolder = 'Error';
        } else {
          resultHolder = roundedA / roundedB;
        }
        break;
      default:
        throw new Error('Invalid operation type');
    }

    return resultHolder;
  },
};

module.exports = Utils;
