import { Request, Response, NextFunction} from "express";

const ERRORS = {
	bad_request: 400,
	unauthorized: 401,
	not_found: 404,
	conflict: 409,
	unprocessable_entity: 422
}

export default function errorHandlerMiddleware(
	error, 
	req: Request, 
	res: Response, 
	next: NextFunction
) {
	console.log(error);
	const type: string = error.type;
	let statusCode = Error[type];
	if(!statusCode) statusCode === 500; 

	return res.sendStatus(statusCode);
}