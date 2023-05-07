interface Node {
    data: number,
    left: Node | null,
    right: Node | null
}

class BST {

    constructor() {
    }

    newNode(val: number): Node {
        return {
            data: val,
            left: null,
            right: null
        } as Node;
    }

    insertNode(val: number, root: Node | null): Node {
        if (root == null) {
            return this.newNode(val);        
        }
        if (val > root?.data) {
            root.right = this.insertNode(val, root.right);
        } else {
            root.left = this.insertNode(val, root.left);
        } 
        return root;
    }

    inorder(root: Node | null) {
        if (root == null) {
            return;
        }
        this.inorder(root?.left);
        console.log(root.data);
        this.inorder(root.right);
    }

    checkBST(root: Node | null): boolean {
        if (root?.left != null) {
            if (root.data < root.left.data) {
                return false;
            }
        }
        return true;
    }

    height(root: Node | null, h: number): number {
        if (root == null) {
            return h;
        }
        return Math.max(this.height(root.left, h+1), this.height(root.right, h+1));
    }
}

let node: Node;
const bst: BST = new BST();
node = bst.insertNode(23, null);
node = bst.insertNode(43, node);
node = bst.insertNode(2, node);
node = bst.insertNode(98, node);
node = bst.insertNode(67, node);
node = bst.insertNode(4, node);
//bst.inorder(node);
console.log(bst.height(node, 0));






