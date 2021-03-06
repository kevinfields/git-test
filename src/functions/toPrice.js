

const toPrice = (num) => {

    let dollars, cents;

    if (Math.floor(num) !== num) {
        dollars = Math.floor(num);
        cents = ((num - dollars).toFixed(2)) * 100;
        if (cents.toString().length === 1) {
            cents = cents + '0';
        }
    } else {
        dollars = num;
        cents = '00';
    }
  return `$${dollars}.${cents}`
}

export default toPrice