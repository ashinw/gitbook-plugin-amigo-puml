import {AmigoPlantUmlPlugin} from './amigoPlantUmlPlugin';

let plugin = new AmigoPlantUmlPlugin();

export let hooks = {
  'init': function () {
    plugin.configure(this);
    plugin.init();
  },

  'finish:before': function () {
    plugin.finishBefore();
  },

  'finish': function () {
    plugin.finish();
  },

  'page:before': function (page) {
    return plugin.pageBefore(page);
  },

  'page': function (page) {
    return plugin.page(page);
  },
}

export let blocks = {
  plantuml: {
    process: function (blk) {
      return plugin.processBlock(blk);      
    }
  }
}

export let filters = {
  plantuml: function (lhsOperand, ...rhsOperands) {
    return plugin.processFilter(lhsOperand, rhsOperands);
  }
}