export interface ResponseType<T> {
    success: boolean,
    errorMessage?: string,
    data?: Array<T> | T
}