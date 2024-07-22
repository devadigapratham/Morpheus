def generate_code(network_structure):
    code = "import tensorflow as tf\n\nmodel = tf.keras.Sequential([\n"

    for layer in network_structure.values():
        layer_type = layer['type']
        args = ', '.join(map(str, layer['args']))
        kwargs = ', '.join(f"{k}={v}" for k, v in layer['kwargs'].items())
        code += f"    tf.keras.layers.{layer_type}({args}{', ' if args and kwargs else ''}{kwargs}),\n"

    code += "])\n"
    return code
