const nestItems = (items, id = 0) => {
  const filteredItems = items.filter(item => item.parent === id)
  const nestetItems = filteredItems.map(item => ({ ...item, children: nestItems(items, item.id) }))
  return nestetItems
}

const createTree = (items) => {
  return nestItems(items)
}

export default createTree