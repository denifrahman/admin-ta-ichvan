export interface Data {
    count: number;
    rows: any;
}

export interface ResponseInterface {
    message: string;
    statusCode: number;
    data: Data;
}
