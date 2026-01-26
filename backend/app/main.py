from fastapi import FastAPI
from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# --- ВАЖНО: Настройка CORS ---
# Чтобы React (на порту 3000 или 5173) мог достучаться до FastAPI (порт 8000)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"], # В разработке разрешаем всем, в деплое укажешь домен сайта
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

# Описываем структуру данных, которые ждем от фронтенда
class FormData(BaseModel):
    text: str

@app.post("/send-data")
async def receive_data(data: FormData):
    print(f"Получены данные: {data.text}")
    # Возвращаем ответ фронтенду
    return {"status": "success", "received": data.text}









if __name__ == "__main__":
    uvicorn.run("main:app", reload=True)