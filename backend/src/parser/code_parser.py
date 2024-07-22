import ast
from .parser_utils import get_layer_info

def parse_code(code_string):
    tree = ast.parse(code_string)
    network_structure = {}

    for node in ast.walk(tree):
        if isinstance(node, ast.Call) and isinstance(node.func, ast.Attribute):
            layer_info = get_layer_info(node)
            if layer_info:
                network_structure[f'layer_{len(network_structure)}'] = layer_info

    return network_structure
