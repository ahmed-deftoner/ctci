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

}
Delete(root *Node, key int)
Search(root *Node, key int)

