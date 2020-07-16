import createTree from './CommentHelper'

const items = [
  {
      id: 1,
      parent: 0,
      name: "Grady"
  },
  {
      id: 2,
      parent: 1,
      name: "Scarlet"
  }
]

const expectedItemsTree = [ 
  {
          id: 1,
          parent: 0,
          name: "Grady",
          children : [
              {
                  id: 2,
                  parent: 1,
                  name: "Scarlet",
                  children : []
              }
          ]
  } 
]

test('get tree', () => {
  expect(createTree(items)).toMatchObject(expectedItemsTree)
})
