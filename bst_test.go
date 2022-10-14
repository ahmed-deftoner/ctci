package trees

import (
	"testing"
)

func TestInsert(t *testing.T) {

	root := NewNode(90)

	Insert(root, 80)
	Insert(root, 100)

	if root.item != 90 {
		t.Errorf("root should have item = 90")
	}

	if root.left.item != 80 {
		t.Errorf("left child should have item = 80")
	}

	if root.right.item != 100 {
		t.Errorf("right child should have item = 100")
	}

}

func TestDelete(t *testing.T) {
	t.Run("Delete a node with no child", func(t *testing.T) {
		root := NewNode(90)

		Insert(root, 80)
		Insert(root, 100)

		Delete(root, 100)

		if root.item != 90 {
			t.Errorf("root should have itemue = 90")
		}

		if root.left.item != 80 {
			t.Errorf("left child should have itemue = 80")
		}

		if root.right != nil {
			t.Errorf("right child should have itemue = nil")
		}
	})

	t.Run("Delete a node with one child", func(t *testing.T) {
		root := NewNode(90)

		Insert(root, 80)
		Insert(root, 100)
		Insert(root, 70)

		Delete(root, 80)

		if root.item != 90 {
			t.Errorf("root should have itemue = 90")
		}

		if root.right.item != 100 {
			t.Errorf("right child should have itemue = 100")
		}

		if root.left.item != 70 {
			t.Errorf("left child should have itemue = 70")
		}

	})

	t.Run("Delete a node with two children", func(t *testing.T) {
		root := NewNode(90)

		Insert(root, 80)
		Insert(root, 100)
		Insert(root, 70)
		Insert(root, 85)

		Delete(root, 80)

		if root.item != 90 {
			t.Errorf("root should have itemue = 90")
		}

		if root.left.item != 85 {
			t.Errorf("left child should have itemue = 85")
		}

		if root.right.item != 100 {
			t.Errorf("right child should have itemue = 100")
		}

	})
}

func TestInOrder(t *testing.T) {
	root := NewNode(90)

	Insert(root, 80)
	Insert(root, 100)
	Insert(root, 70)
	Insert(root, 85)
	Insert(root, 95)
	Insert(root, 105)

	Inorder(root)
}

func TestPreOrder(t *testing.T) {
	root := NewNode(90)

	Insert(root, 80)
	Insert(root, 100)
	Insert(root, 70)
	Insert(root, 85)
	Insert(root, 95)
	Insert(root, 105)

}

func TestPostOrder(t *testing.T) {
	root := NewNode(90)

	Insert(root, 80)
	Insert(root, 100)
	Insert(root, 70)
	Insert(root, 85)
	Insert(root, 95)
	Insert(root, 105)
}

func TestLevelOrder(t *testing.T) {
	root := NewNode(90)

	Insert(root, 80)
	Insert(root, 100)
	Insert(root, 70)
	Insert(root, 85)
	Insert(root, 95)
	Insert(root, 105)
}

func TestAccessNodesByLayer(t *testing.T) {
	root := NewNode(90)

	Insert(root, 80)
	Insert(root, 100)
	Insert(root, 70)
	Insert(root, 85)
	Insert(root, 95)
	Insert(root, 105)

}
