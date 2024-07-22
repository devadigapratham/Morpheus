def generate_visualization(network):
    #Need to add stuff, for now. Keeping it basic
    return {
        "nodes": [{"id": layer_id, "label": layer["type"]} for layer_id, layer in network.items()],
        "edges": [{"from": f"layer_{i}", "to": f"layer_{i+1}"} for i in range(len(network)-1)]
    }
