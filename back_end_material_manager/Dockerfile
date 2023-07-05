# Use an official Python runtime as a parent image
FROM python:3

# Set environment varibles
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1
#ENV DJANGO_SETTINGS_MODULE=material_manager.settings.production

#switch to /app directory so that everything runs from here
WORKDIR /code

#let pip install required packages
RUN pip install --upgrade pip 
COPY ./src/requirements.txt /code/ 
RUN pip install -r requirements.txt
#COPY ./src /code/
