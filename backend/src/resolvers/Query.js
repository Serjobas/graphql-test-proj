const Query = {
  dogs(parent, args, ctx, info) {
    return [{ name: 'Snicker' }, { name: 'Sony' }];
  },
};



module.exports = Query;
