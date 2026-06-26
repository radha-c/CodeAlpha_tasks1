from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware
from googletrans import Translator

app = FastAPI()

translator = Translator()

# Allow React Frontend
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Data model
class TranslationRequest(BaseModel):
    text: str
    source: str
    target: str

# Translation API
@app.post("/translate")
async def translate_text(data: TranslationRequest):

    translated = translator.translate(
        data.text,
        src=data.source,
        dest=data.target
    )

    return {
        "translated_text": translated.text
    }