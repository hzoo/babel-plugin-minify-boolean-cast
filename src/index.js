export default function ({ Plugin, types: t }) {
  return new Plugin("minify-boolean-cast", {
    metadata: {
      group: "builtin-pre"
    },

    visitor: {
      CallExpression: function(node) {
        var callee = this.get("callee");
        if (callee.isIdentifier({ name: "Boolean" })) {
            if (node.arguments.length > 0) {
              return t.unaryExpression("!", t.unaryExpression("!", node.arguments[0]));
            }
        }
      }
    }
  });
}
