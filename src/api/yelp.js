import axios from 'axios'

export default axios.create({
baseURL: 'https://api.yelp.com/v3/businesses',
headers:{
    Authorization: 'Bearer m0dUh2tosaW3AB4p84aWvRwfoUpMcIOhEVYsgcuuAYD_fO7zo4ZnpHDqzkMhvQqGux6lafhtHnmgpCJKBhKdJNzIQ0EKGnOwpWHbgoO2xyuR0BaHFgSrznDAlfGmX3Yx'
}
})