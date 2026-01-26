import { useState } from 'react';

function RegForm() {
    // 1. Создаем состояние для хранения текста из инпута
    const [inputText, setInputText] = useState("");

    // 2. Функция, которая сработает при нажатии на кнопку
    const handleSubmit = async (event) => {
        event.preventDefault(); // Останавливаем перезагрузку страницы

        try {
            // 3. Отправляем запрос на бэкенд
            const response = await fetch("http://127.0.0.1:8000/send-data", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                // Превращаем наш объект в строку JSON
                body: JSON.stringify({ text: inputText }),
            });

            if (response.ok) {
                const result = await response.json();
                alert("Данные отправлены! Бэк ответил: " + result.received);
            } else {
                alert("Ошибка сервера");
            }
        } catch (error) {
            console.error("Ошибка при отправке:", error);
            alert("Не удалось соединиться с сервером");
        }
    };

    return (
        <div style={{ padding: "20px" }}>
            <form onSubmit={handleSubmit}>
                <input 
                    type="text" 
                    value={inputText}
                    // Обновляем состояние при каждом нажатии клавиши
                    onChange={(e) => setInputText(e.target.value)} 
                    placeholder="Введите данные"
                />
                <button type="submit">Send</button>
            </form>
            <p>Вы печатаете: {inputText}</p>
        </div>
    );
}

export default RegForm;
