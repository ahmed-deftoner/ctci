package trees

type Node struct {
	item  int
	left  *Node
	right *Node
}

func (n Node) NewNode(item int) *Node {
	return &Node{
		item: item,
		left: nil,
		right: nil,
	}
}

func Insert(root *Node, key int) {
	if root == nil {
		root.NewNode(key)
	}
	if root.item < key {
		Insert(root.right, key)
	}else {
		Insert(root.left, key)
	}
}

func InorderElement(cur *Node) *Node {
	for curr.left != nil {
		cur = cur.left
	}
	return &cur;
}

func Delete(root *Node, key int) {
	if root.item == key {
		root = nil
	} else {
		if root.left == nil {
			root = root.right
			root.right = nil
		} else if root.right == nil {
			root = root.left
			root.left = nil
		} else {

		}
	}
}
Search(root *Node, key int)

