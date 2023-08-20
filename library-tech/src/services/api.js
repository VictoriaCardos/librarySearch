import axios from 'axios'

const api = axios.create({
  baseURL: 'https://api.nytimes.com/svc/books/v3/lists/full-overview.json?api-key=wLzQCcE0bRtb73EriIFAOpFZm5aZFtHg'
})

export default api