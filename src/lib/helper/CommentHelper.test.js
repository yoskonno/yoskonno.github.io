import createTree from './CommentHelper'

const dataSet = [
  {
      id: 1,
      parent: null,
      name: "Grady"
  },
  {
      id: 2,
      parent: 1,
      name: "Scarlet"
  }
]

const expectedDataTree = [ 
  {
          id: 1,
          parent: null,
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
  expect(createTree(dataSet)).toMatchObject(expectedDataTree)
})
