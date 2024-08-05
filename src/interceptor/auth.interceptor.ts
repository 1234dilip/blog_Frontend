import { HttpInterceptorFn } from '@angular/common/http';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const authToken = localStorage.getItem('token');
  const authReq = req.clone({
    setHeaders: {
      Authorization: `${authToken}`
    }
  });

  return next(authReq);
}
