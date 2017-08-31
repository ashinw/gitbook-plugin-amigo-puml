module.exports = {
  // Map of hooks
  hooks: {
    'init': function() {
        this.log.info('gitbook-plugin-amigo-uml::init');
    },

    'finish': function() {
        this.log.info('gitbook-plugin-amigo-uml::finish');
    },

    'page:before': function(page) {
        this.log.info('gitbook-plugin-amigo-uml::page:before');
        return page;
    },
    
    'page': function(page) {
        this.log.info('gitbook-plugin-amigo-uml::page:before');
        return page;      
    },
  },

  // Map of new blocks
  blocks: {
    plantuml: {
      process: function(blk) {
        this.log.info('gitbook-plugin-amigo-uml::{% plantuml %} ... {% endplantuml %}');
        return blk.body;
      }
    }
  },

  // Map of new filters
  filters: {
        plantuml: function(lhsOperand, ...rhsOperands) {
            this.log.info('gitbook-plugin-amigo-uml::{{lhsOperand | plantuml rhsOperands}}');
        return `plantuml :: ${lhsOperand}, ${JSON.stringify(rhsOperands)}`;
        }
    }
};