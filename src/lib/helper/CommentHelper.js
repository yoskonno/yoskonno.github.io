const nestItems = (items, id = 0) => {
  console.log('items @nestItems')
  console.log(items)
  const filteredItems = items.filter(item => item.parent === id)
  console.log('filteredItems @nestItems')
  console.log(filteredItems)
  const nestetItems = filteredItems.map(item => ({ ...item, children: nestItems(items, item.id) }))
  console.log('nestedItems @nestItems')
  return nestetItems
}


const createTree = (items) => {
  return nestItems(items)
}

export default createTree