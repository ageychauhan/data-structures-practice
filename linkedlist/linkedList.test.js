import { linkedList } from './linkedList';

test("Create LinkedList", () => {
    console.log(linkedList);
    expect(linkedList).toBe(linkedList);
});

test("Create Node", () => {
    let node = {node: "Ag"};
    console.log(linkedList);
    expect(linkedList.addNode(node)).toBe(linkedList.head);
});

test("insert node at last", () => {
    let node = { node: "David" };
    let node1 = { node: "Vishal"};
    let node2 = { node: "Pradyuman" };
   expect(linkedList.insertNodeAtLast(node)).toBe(linkedList);
   expect(linkedList.insertNodeAtLast(node1)).toBe(linkedList);
   expect(linkedList.insertNodeAtLast(node2)).toBe(linkedList);
});

test("find value in linked list", () => {
    expect(linkedList.findNode("Pradyuman")).toBe("Pradyuman");
});

test("find value in linked list and delete", () => {
    expect(linkedList.deleteNode("Vishal")).toBe(linkedList);
});