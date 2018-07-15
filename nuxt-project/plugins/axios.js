export default function ({ $axios }) {
  $axios.onRequest((config) => {
    if (config.url.indexOf('api.github.com') + 1) {
      config.headers.Authorization = `token ${process.env.API_KEY}` // dotenv使えばいいけど、ひとまずこのまま進める
    }
  })
}
