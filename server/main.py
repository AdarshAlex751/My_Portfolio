from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from pydantic import BaseModel,EmailStr

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins = ["my-portfolio-nine-chi-cm2sfdh0gx.vercel.app",
        "http://localhost:5173",
        "http://localhost:5174"],
        
        allow_credentials=True,
        allow_methods=["*"],
        allow_headers=["*"],
    )

class ContactIn(BaseModel):
    name:str
    email:EmailStr
    message:str

@app.get("/api/health")
def health():
    return {"ok": True}

@app.post("/api/contact")
def contact(payload: ContactIn):
    print("NEW MESSAGE:", payload.model_dump())
    return {"ok": True, "message": "Message received!"}

