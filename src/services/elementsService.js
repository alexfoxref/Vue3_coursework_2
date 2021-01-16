import { getData, updateData, postData, removeData } from './service'

const baseUrl =
  'https://resume-coursework-default-rtdb.europe-west1.firebasedatabase.app'

export const getElements = async () => {
  const data = await getData(baseUrl, '/elements.json')

  if (!data) {
    throw new Error('Empty data of elements')
  }

  return Object.entries(data).map(([id, element]) => ({
    ...element,
    id,
    selected: false,
  }))
}

export const createElement = async body => {
  return await postData(baseUrl, '/elements.json', body)
}

export const removeElement = async id => {
  return await removeData(baseUrl, `/elements/${id}.json`)
}

export const updateElement = async (id, body) => {
  return await updateData(baseUrl, `/elements/${id}.json`, body)
}
