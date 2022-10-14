package trees

type Node struct {
	item  int
	left  *Node
	right *Node
}

func (n Node) NewNode(item int) *Node {
	return &Node{
		item:  item,
		left:  nil,
		right: nil,
	}
}

func Insert(root *Node, key int) {
	if root == nil {
		root.NewNode(key)
	}
	if root.item < key {
		Insert(root.right, key)
	} else {
		Insert(root.left, key)
	}
}

func InorderElement(cur *Node) *Node {
	for cur.left != nil {
		cur = cur.left
	}
	return cur
}

func Delete(root *Node, key int) *Node {
	if root == nil {
		return nil
	} else if root.item > key {
		Delete(root.left, key)
	} else if root.item < key {
		Delete(root.right, key)
	} else {
		if root.left == nil {
			root = root.right
			root.right = nil
		} else if root.right == nil {
			root = root.left
			root.left = nil
		} else {
			d := InorderElement(root.right)
			root.item = d.item
			d = nil
		}
	}
	return root
}

func Search(root *Node, key int) bool {
	if root == nil {
		return false
	} else if root.item > key {
		Search(root.left, key)
	} else if root.item < key {
		Search(root.right, key)
	} else {
		return true
	}
	return false
}
