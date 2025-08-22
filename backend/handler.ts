import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const hello = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({ message: 'Hello from Lambda (Node 18)!' })
  };
};
