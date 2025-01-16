# **Chat Application with Django, React, and AWS Lambda**

This project is a **Chat Application** developed using **Django** for the backend, **React** for the frontend, and **AWS Lambda** for serverless functions. It includes features such as real-time messaging, user authentication, file uploads, and more.

---

## **Table of Contents**

1. [Backend Setup (Django)](#backend-setup-django)
2. [Frontend Setup (React)](#frontend-setup-react)
3. [AWS Lambda Setup](#aws-lambda-setup)
4. [Running the Application](#running-the-application)
5. [Technologies Used](#technologies-used)
6. [License](#license)
7. [Contributing](#contributing)
8. [Acknowledgments](#acknowledgments)

---

## **Backend Setup (Django)**

Follow these steps to set up the backend:

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yourusername/chat_app.git
   cd chat_app

Create a Virtual Environment: For Windows:

bash
Copy
Edit
python -m venv venv
venv\Scripts\activate
For Linux/Mac:

bash
Copy
Edit
python3 -m venv venv
source venv/bin/activate
Install Dependencies: Install all required Python packages:

bash
Copy
Edit
pip install -r requirements.txt
Configure Database: In settings.py, configure your database. You can use PostgreSQL or any database of your choice. Example for PostgreSQL configuration:

python
Copy
Edit
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'chat_db',
        'USER': 'your_user',
        'PASSWORD': 'your_password',
        'HOST': 'localhost',
        'PORT': '5432',
    }
}
Run Migrations: Run migrations to set up the database tables:

bash
Copy
Edit
python manage.py migrate
Start the Django Server: Start the Django development server:

bash
Copy
Edit
python manage.py runserver
Frontend Setup (React)
Follow these steps to set up the frontend:

Clone the Repository:

bash
Copy
Edit
git clone https://github.com/yourusername/chat_frontend.git
cd chat_frontend
Install Dependencies: Install all the required frontend dependencies:

bash
Copy
Edit
npm install
Start the React Server: Run the React development server:

bash
Copy
Edit
npm start
Update API URL: In the frontend project, configure the API URL to point to your Django backend. Update the API endpoint in src/config.js:

javascript
Copy
Edit
export const API_URL = 'http://localhost:8000/api/';
AWS Lambda Setup
For AWS Lambda, the following functions are included:

1. Add Two Numbers (AWS Lambda Function)
This Lambda function adds two numbers:

python
Copy
Edit
def lambda_handler(event, context):
    num1 = event['num1']
    num2 = event['num2']
    return {
        'statusCode': 200,
        'body': num1 + num2
    }
Steps to deploy the Lambda function:

Go to the AWS Lambda Console.
Create a new Lambda function.
Use the Python runtime and paste the above code in the inline editor.
Configure triggers (e.g., API Gateway or event-based triggers).
2. Store Document in S3 (AWS Lambda Function)
This Lambda function uploads a file to AWS S3:

python
Copy
Edit
import boto3
s3 = boto3.client('s3')

def lambda_handler(event, context):
    file = event['file']
    bucket_name = 'your-bucket-name'
    s3.upload_file(file, bucket_name, 'path/to/file')
    return {
        'statusCode': 200,
        'body': 'File uploaded successfully'
    }
Steps to deploy the Lambda function:

Create a new Lambda function in the AWS console.
Upload the above Python script.
Set the trigger (e.g., from API Gateway or any other service).
Ensure your Lambda function has sufficient IAM permissions to access S3.
Running the Application
Once both the backend and frontend are set up, follow these steps to run the entire application:

Start the Backend Server: Run the Django server:

bash
Copy
Edit
python manage.py runserver
Start the Frontend Server: Run the React server:

bash
Copy
Edit
npm start
Test the Application: Open your browser and visit:

Frontend: http://localhost:3000
Backend: http://localhost:8000
You should be able to sign up, log in, and start chatting with other users.

Technologies Used
This project utilizes the following technologies:

Backend: Django, Django Channels (for WebSocket support)
Frontend: React, Axios (for API calls), WebSockets (for real-time chat)
Database: PostgreSQL (for production), SQLite (for local development)
AWS Lambda: Python, Boto3 (for interacting with S3)
Deployment: AWS (for Lambda), Heroku (for Django, if needed)

