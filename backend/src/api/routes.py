from fastapi import APIRouter, File, UploadFile, HTTPException
from parser.code_parser import parse_code
from interpreter.network_interpreter import interpret_network
from visualizer.network_visualizer import generate_visualization
from code_generator.code_gen import generate_code

router = APIRouter()

@router.post("/parse")
async def parse_network(file: UploadFile = File(...)):
    try:
        content = await file.read()
        parsed_code = parse_code(content.decode())
        network = interpret_network(parsed_code)
        visualization = generate_visualization(network)
        return {"visualization": visualization}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))

@router.post("/generate")
async def generate_network_code(network_structure: dict):
    try:
        code = generate_code(network_structure)
        return {"generated_code": code}
    except Exception as e:
        raise HTTPException(status_code=400, detail=str(e))
