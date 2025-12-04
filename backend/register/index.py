import json
import os
from typing import Dict, Any
from datetime import datetime
import requests

def handler(event: Dict[str, Any], context: Any) -> Dict[str, Any]:
    '''
    Обрабатывает регистрацию пользователей и отправляет данные в Google Sheets
    Args: event - словарь с данными HTTP запроса
          context - объект с атрибутами запроса
    Returns: HTTP ответ со статусом операции
    '''
    method: str = event.get('httpMethod', 'GET')
    
    # Обработка CORS OPTIONS запроса
    if method == 'OPTIONS':
        return {
            'statusCode': 200,
            'headers': {
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Methods': 'POST, OPTIONS',
                'Access-Control-Allow-Headers': 'Content-Type',
                'Access-Control-Max-Age': '86400'
            },
            'body': '',
            'isBase64Encoded': False
        }
    
    if method == 'POST':
        try:
            body_data = json.loads(event.get('body', '{}'))
            
            name = body_data.get('name', '')
            email = body_data.get('email', '')
            phone = body_data.get('phone', '')
            plan = body_data.get('plan', 'free')
            timestamp = datetime.now().strftime('%Y-%m-%d %H:%M:%S')
            
            # Отправка данных в Google Sheets через веб-хук
            webhook_url = os.environ.get('GOOGLE_SHEETS_WEBHOOK_URL')
            
            if webhook_url:
                sheet_data = {
                    'timestamp': timestamp,
                    'name': name,
                    'email': email,
                    'phone': phone,
                    'plan': plan
                }
                
                try:
                    requests.post(webhook_url, json=sheet_data, timeout=10)
                except Exception as webhook_error:
                    print(f'Ошибка отправки в Google Sheets: {webhook_error}')
            
            result = {
                'success': True,
                'message': 'Заявка принята',
                'data': {
                    'name': name,
                    'email': email,
                    'phone': phone,
                    'plan': plan,
                    'timestamp': timestamp
                }
            }
            
            return {
                'statusCode': 200,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps(result, ensure_ascii=False),
                'isBase64Encoded': False
            }
            
        except Exception as e:
            return {
                'statusCode': 500,
                'headers': {
                    'Content-Type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                'body': json.dumps({'error': str(e)}, ensure_ascii=False),
                'isBase64Encoded': False
            }
    
    return {
        'statusCode': 405,
        'headers': {'Content-Type': 'application/json', 'Access-Control-Allow-Origin': '*'},
        'body': json.dumps({'error': 'Method not allowed'}, ensure_ascii=False),
        'isBase64Encoded': False
    }