import boto3
import os

def lambda_handler(event, context):
    num1 = event['num1']
    num2 = event['num2']
    result = num1 + num2
    return {
        'statusCode': 200,
        'body': f'The sum is: {result}'
    }


def lambda_handler(event, context):
    s3_client = boto3.client('s3')
    file = event['file']
    bucket_name = 'your-bucket-name'
    file_name = os.path.basename(file['filename'])

    s3_client.put_object(
        Bucket=bucket_name,
        Key=file_name,
        Body=file['body']
    )

    return {
        'statusCode': 200,
        'body': f'File {file_name} uploaded successfully'
    }
