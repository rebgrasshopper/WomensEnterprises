function importAll(r) {
    return r.keys().map(r);
  }
  
const images = importAll(require.context('../../images/Landing', false, /\.(png|jpe?g|svg)$/));

export default images;