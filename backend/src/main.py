#trying out FastAPI here :
from fastapi.middleware.cors import CORSMiddleware
from fastapi import FastAPI
from api.routes import router
import uvicorn

app = FastAPI()
app.include_router(router)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
