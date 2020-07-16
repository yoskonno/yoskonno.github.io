const nest = (items, id = null) => 
  items
    .filter(item => item.parent === id)
    .map(item => ({ ...item, children: nest(items, item.id) }))


const createTree = (dataset) => {
  console.log(dataset)
  console.log(nest(dataset))
  return nest(dataset)
}

export default createTree