export const getData = async (baseUrl, url) => {
  const response = await fetch(`${baseUrl}${url}`, {
    headers: { 'Content-Type': 'application/json' },
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch resource "${baseUrl}${url}"`)
  }

  return await response.json()
}

export const postData = async (baseUrl, url, body) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch resource "${baseUrl}${url}"`)
  }

  return await response.json()
}

export const removeData = async (baseUrl, url) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'DELETE',
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch resource "${baseUrl}${url}"`)
  }

  return await response.json()
}

export const updateData = async (baseUrl, url, body) => {
  const response = await fetch(`${baseUrl}${url}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  })

  if (!response.ok) {
    throw new Error(`Failed to fetch resource "${baseUrl}${url}"`)
  }

  return await response.json()
}
