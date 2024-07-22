import ast

def get_layer_info(node):
    supported_layers = ['Conv2D', 'Dense', 'MaxPooling2D', 'Flatten', 'Dropout']
    if node.func.attr in supported_layers:
        return {
            'type': node.func.attr,
            'args': [ast.literal_eval(arg) for arg in node.args if isinstance(arg, ast.Constant)],
            'kwargs': {kw.arg: ast.literal_eval(kw.value) for kw in node.keywords if isinstance(kw.value, ast.Constant)}
        }
    return None
