export const isPrd = process.env.NODE_ENV === 'production';
export const isDev = process.env.NODE_ENV === 'development';
export const isLocal = process.env.NODE_ENV === 'local';
// export const API_HOST = 'http://kakaofit.gomip.ml:3031';
export const API_HOST = 'http://localhost:3031';

// export const API_HOST = isPrd ? 'https://manage-api.rsquare.co.kr' : (isDev ? 'https://manage-api-dev.rsquare.co.kr' : 'http://localhost:5000')
