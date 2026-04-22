import { APIGatewayProxyEvent, APIGatewayProxyResult } from 'aws-lambda';

export const helloo = async (
  _event: APIGatewayProxyEvent
): Promise<APIGatewayProxyResult> => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Lambda! Successfully deployed Dev Branch  feaure-dev Betrand ok'
    }),
  };
};
