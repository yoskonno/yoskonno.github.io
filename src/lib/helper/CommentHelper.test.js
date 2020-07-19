import createTree from './CommentHelper'

const items = [
  {
      id: 1,
      parent: 0,
  },
  {
      id: 2,
      parent: 1,
  },
  {
      id: 3,
      parent: 1,
  },
  {
      id: 4,
      parent: 0,
  },
  {
      id: 5,
      parent: 4,
  },
  {
      id: 6,
      parent: 2,
  },
  {
      id: 7,
      parent: 0,
  }
]

const expectedItemsTree = [
  {
      id: 1,
      parent: 0,
      children: [
        {
            id: 2,
            parent: 1,
            children: [
              {
                  id: 6,
                  parent: 2,
              },
            ]
        },
        {
            id: 3,
            parent: 1,
        }
      ]
  },
  {
      id: 4,
      parent: 0,
      children: [
        {
            id: 5,
            parent: 4,
        }
      ]
  },
  {
      id: 7,
      parent: 0,
  }
]

test('get properly nested tree', () => {
  expect(createTree(items)).toMatchObject(expectedItemsTree)
})
