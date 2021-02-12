const apiKey = '0c0faae15533bdf68bcd87aa3afc019c'

const getWeather = (url) => {
  return new Promise((resolve, reject) => {
    const req = new window.XMLHttpRequest()
    req.open('GET', url)

    req.onload = () => {
      if (req.status === 200) {
        resolve(req.response)
      } else {
        reject(Error(req.statusText))
      }
    }

    req.onerror = () => {
      reject(Error('Algo a ido mal...'))
    }
    req.send()
  })
}

export const getWeatherCity = async (input) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${input}&appid=${apiKey}&units=metric`
  const res = await getWeather(url)
  const product = await JSON.parse(res)
  return product
}

export const getWeatherForecast = async (input) => {
  const url = `https://api.openweathermap.org/data/2.5/forecast?q=${input}&appid=${apiKey}&units=metric`
  const res = await getWeather(url)
  const product = await JSON.parse(res)
  return product
}
