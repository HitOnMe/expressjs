export const responseSuccess = (data, message = 'ok', code = 200, status = 'success') => {
   return {
    status: status,
    code: code,
    message: message,
    content: data,
   }
}
export const responseError = (message = 'failed', code = 400, status = 'failed', stack = null) => {
    return {
     status: status,
     code: code,
     message: message,
     stack: stack,
    }
 }
