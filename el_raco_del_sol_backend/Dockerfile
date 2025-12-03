FROM python:3.12-slim

# Устанавливаем зависимости для SQLite и Pillow
RUN apt-get update && apt-get install -y \
    build-essential \
    libsqlite3-dev \
    libjpeg62-turbo-dev \
    zlib1g-dev \
    && rm -rf /var/lib/apt/lists/*

WORKDIR /app

COPY requirements.txt .
RUN pip install --no-cache-dir -r requirements.txt

COPY . .

# Важно: создать директорию для статики
RUN mkdir -p /staticfiles

# Собираем статику
RUN python manage.py collectstatic --noinput

EXPOSE 8000

CMD ["python", "manage.py", "runserver", "0.0.0.0:8000"]
