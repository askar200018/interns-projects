import { Node } from "./models/node.model";

export const NODE_DATA:Node []= [
  {
    id: 1,
    name: 'Book 1',
    children: [
      {
        id: 11,
        name: 'Chapter 1',
        parent_id: 1,
        children: [
          {
            id: 111,
            name: 'Section 1',
            parent_id: 11
          },
          {
            id: 112,
            name: 'Section 2',
            parent_id: 11
          },
          {
            id: 113,
            name: 'Section 3',
            parent_id: 11
          },
          {
            id: 114,
            name: 'Section 4',
            parent_id: 11
          }
        ]
      },
      {
        id: 12,
        name: 'Chapter 2',
        parent_id: 1,
        children: [
          {
            id: 121,
            name: 'Section 1',
            parent_id: 11
          },
          {
            id: 122,
            name: 'Section 2',
            parent_id: 11
          },
          {
            id: 123,
            name: 'Section 3',
            parent_id: 11
          },
          {
            id: 124,
            name: 'Section 4',
            parent_id: 12
          }
        ]
      }
    ]
  },
  {
    id: 2,
    name: 'Book 2',
    children: [
      {
        id: 21,
        name: 'Chapter 1',
        parent_id: 2,
        children: [
          {
            id: 211,
            name: 'Section 1',
            parent_id: 21
          },
          {
            id: 212,
            name: 'Section 2',
            parent_id: 21
          },
          {
            id: 213,
            name: 'Section 3',
            parent_id: 21
          },
          {
            id: 214,
            name: 'Section 4',
            parent_id: 21
          }
        ]
      },
      {
        id: 22,
        name: 'Chapter 2',
        parent_id: 2,
        children: [
          {
            id: 221,
            name: 'Section 1',
            parent_id: 22
          },
          {
            id: 222,
            name: 'Section 2',
            parent_id: 22
          },
          {
            id: 223,
            name: 'Section 3',
            parent_id: 22
          },
          {
            id: 224,
            name: 'Section 4',
            parent_id: 22
          }
        ]
      }
    ]
  }
];