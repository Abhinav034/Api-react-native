import axios from 'axios'

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers:{
    Authorization: 'Bearer WZCHSrQewznMosOavv7yf1VpBo_mZLLHxuEa-679F7hvV8yLsCyEvKLy0i6dlf11ieqIvgfInHyNgGbDRK0DEkSQSho3F58zSrm7WhD9zRzU1FDJ0a8w8v2a4tCpX3Yx'
}
})